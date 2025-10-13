"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().optional(),
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
  
  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just simulate a successful submission.
  console.log("Form submitted successfully:", validatedFields.data);

  return {
    success: true,
    message: "Thank you for your message! We'll be in touch soon.",
    errors: null,
  };
}
