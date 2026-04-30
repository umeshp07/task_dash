
'use client';

/**
 * Providers Component
 * Wraps the application with necessary context providers
 * Currently provides React Query's QueryClientProvider
 * 
 * This is a Client Component because it uses useContext and providers
 * It needs to be separate from the root layout (which is a Server Component)
 */

import { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/react-query';

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};
