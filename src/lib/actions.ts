"use server";

import { z } from "zod";
import { initializeFirebase } from "@/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { errorEmitter } from "@/firebase/error-emitter";
import { FirestorePermissionError } from "@/firebase/errors";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address.").optional().or(z.literal('')),
  phone: z.string().min(1, "Phone number is required."),
  message: z.string().optional(),
});

export async function submitContactForm(
  prevState: any,
  formData: FormData
) {
  const validatedFields = contactSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Please correct the errors and try again.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  try {
    const { firestore } = initializeFirebase();
    const submissionsCollection = collection(firestore, 'contactFormSubmissions');

    await addDoc(submissionsCollection, {
      fullName: validatedFields.data.name,
      emailAddress: validatedFields.data.email,
      phoneNumber: validatedFields.data.phone,
      message: validatedFields.data.message,
      submissionDate: serverTimestamp(),
    }).catch(error => {
      errorEmitter.emit(
        'permission-error',
        new FirestorePermissionError({
          path: submissionsCollection.path,
          operation: 'create',
          requestResourceData: validatedFields.data,
        })
      )
    });

  } catch (error) {
    console.error("Error saving to Firestore:", error);
    let errorMessage = "An unexpected error occurred.";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return {
      success: false,
      message: errorMessage,
      errors: null,
    };
  }

  return {
    success: true,
    message: "Thank you for your message! We'll be in touch soon.",
    errors: null,
  };
}
