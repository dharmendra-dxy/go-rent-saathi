'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, FileQuestion, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="bg-background flex min-h-screen items-center justify-center p-4">
      <div className="max-w-md space-y-6 text-center">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="bg-muted inline-flex h-24 w-24 items-center justify-center rounded-full">
            <FileQuestion className="text-muted-foreground h-12 w-12" />
          </div>
        </div>

        {/* Error Code */}
        <div className="space-y-2">
          <h1 className="text-6xl font-bold tracking-tight">404</h1>
          <h2 className="text-2xl font-semibold tracking-tight">Page Not Found</h2>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Please check the
          URL or return to the homepage.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button
            onClick={() => router.back()}
            variant={"secondary"}
            className="border-input  hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring inline-flex items-center justify-center gap-2 rounded-md border px-6 py-2.5 text-xs font-medium shadow-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Button>
          <Button
            onClick={() => router.push('/')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring inline-flex items-center justify-center gap-2 rounded-md px-6 py-2.5 text-xs font-medium shadow transition-colors focus-visible:ring-2 focus-visible:outline-none"
          >
            <Home className="h-4 w-4" />
            Go to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;