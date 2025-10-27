'use client';

import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy, Timestamp } from 'firebase/firestore';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

// Extend the autotable interface for jsPDF
declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
  }
}

interface ContactFormSubmission {
  id: string;
  fullName: string;
  emailAddress?: string;
  phoneNumber: string;
  message?: string;
  submissionDate: Timestamp;
}

export default function FormDataPage() {
  const firestore = useFirestore();

  const submissionsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(
      collection(firestore, 'contactFormSubmissions'),
      orderBy('submissionDate', 'desc')
    );
  }, [firestore]);

  const {
    data: submissions,
    isLoading,
    error,
  } = useCollection<ContactFormSubmission>(submissionsQuery);

  const formatDate = (timestamp: Timestamp | null | undefined) => {
    if (!timestamp) return 'N/A';
    return new Date(timestamp.seconds * 1000).toLocaleString();
  };

  const downloadPdf = () => {
    if (!submissions) return;

    const doc = new jsPDF();
    doc.autoTable({
      head: [['Full Name', 'Email', 'Phone Number', 'Message', 'Submission Date']],
      body: submissions.map(sub => [
        sub.fullName,
        sub.emailAddress || 'N/A',
        sub.phoneNumber,
        sub.message || 'N/A',
        formatDate(sub.submissionDate),
      ]),
    });

    doc.save('contact-submissions.pdf');
  };
  
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto py-10 px-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Contact Form Submissions</CardTitle>
            <Button onClick={downloadPdf} disabled={!submissions || submissions.length === 0}>
              Download PDF
            </Button>
          </CardHeader>
          <CardContent>
            {isLoading && (
              <div className="space-y-2">
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
              </div>
            )}
            {error && (
                <div className="text-destructive">
                    <p>Error loading data: {error.message}</p>
                    <p>There might be a problem with permissions. Please check your Firestore security rules.</p>
                </div>
            )}
            {!isLoading && !error && (
              <Table>
                <TableCaption>A list of recent contact form submissions.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Full Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone Number</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead>Submission Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {submissions && submissions.length > 0 ? (
                    submissions.map((submission) => (
                      <TableRow key={submission.id}>
                        <TableCell className="font-medium">{submission.fullName}</TableCell>
                        <TableCell>{submission.emailAddress || 'N/A'}</TableCell>
                        <TableCell>{submission.phoneNumber}</TableCell>
                        <TableCell>{submission.message || 'N/A'}</TableCell>
                        <TableCell>{formatDate(submission.submissionDate)}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center">
                        No submissions yet.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
