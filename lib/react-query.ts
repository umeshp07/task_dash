'use client';

/**
 * React Query configuration and setup
 * Initializes QueryClient with optimized default options
 * Can be imported and used in any part of the application
 */

import { QueryClient } from '@tanstack/react-query';

/**
 * Create and configure QueryClient instance
 * Default options:
 * - staleTime: 5 minutes (data is considered fresh for 5 min)
 * - gcTime: 10 minutes (garbage collection time for inactive queries)
 * - retry: 1 (retry failed requests once)
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes (formerly cacheTime)
      retry: 1,
      refetchOnWindowFocus: false, // Don't refetch when window regains focus
    },
  },
});
