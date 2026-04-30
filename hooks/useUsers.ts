'use client';

/**
 * Custom React Query hook for fetching users
 * Encapsulates all user-related API queries
 * Provides a clean interface for components to fetch and manage user data
 */

import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '@/services/api';
import { User } from '@/types';

/**
 * Custom hook to fetch and manage users
 * Uses React Query for caching, refetching, and state management
 * 
 * Returns:
 * - data: Array of users (undefined while loading)
 * - isLoading: Boolean indicating if data is being fetched
 * - error: Error object if request failed
 * - refetch: Function to manually refetch data
 */
export const useUsers = () => {
  return useQuery<User[], Error>({
    queryKey: ['users'], // Unique key for caching this query
    queryFn: fetchUsers, // Function to fetch the data
    // Query will be enabled by default and start fetching immediately
  });
};
