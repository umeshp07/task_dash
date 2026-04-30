'use client';
/**
 * Type definitions for the application
 * Centralized location for all TypeScript interfaces and types
 */

// User type - represents a user from the JSONPlaceholder API
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
  };
}

// Form submission type - data structure for the contact form
export interface FormSubmissionData {
  name: string;
  email: string;
}

// API response type - wrapper for API responses
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
