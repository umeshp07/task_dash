'use client';
/**
 * API service module
 * Handles all external API calls to JSONPlaceholder
 * Centralized location for fetch operations
 */

import { User } from '@/types';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

/**
 * Fetch users from the public API
 * @returns Promise<User[]> - Array of user objects
 * @throws Error if the API request fails
 */
export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch(`${BASE_URL}/users`, {
      // Add cache: no-store to ensure fresh data on each request
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data: User[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
