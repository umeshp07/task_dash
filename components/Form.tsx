
'use client';

/**
 * Contact Form Component
 * Uses React Hook Form for form state management
 * Uses Zod for schema validation
 * Displays validation errors in real-time
 */

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FormSubmissionData } from '@/types';

/**
 * Zod validation schema for form data
 * Ensures type safety and runtime validation
 */
const formSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must not exceed 50 characters'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
});

export const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormSubmissionData | null>(
    null
  );

  /**
   * useForm hook - manages form state, validation, and submission
   * zodResolver integrates Zod schema for validation
   */
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormSubmissionData>({
    resolver: zodResolver(formSchema),
    mode: 'onBlur', // Validate on blur for better UX
  });

  /**
   * Handle form submission
   * This only runs if all validation passes (thanks to Zod)
   */
  const onSubmit = (data: FormSubmissionData) => {
    setSubmittedData(data);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      reset();
      setIsSubmitted(false);
      setSubmittedData(null);
    }, 3000);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Get In Touch</h2>

      {/* Success message */}
      {isSubmitted && submittedData && (
        <div className="mb-4 bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-green-800 text-sm">
            ✓ Thanks for your submission, {submittedData.name}! We&apos;ll get back
            to you soon.
          </p>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            {...register('name')}
            className={`w-full px-4 py-2 border rounded-lg text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all ${
              errors.name
                ? 'border-red-500 focus:ring-red-200'
                : 'border-gray-300 focus:ring-blue-200'
            }`}
          />
          {/* Error message */}
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register('email')}
            className={`w-full px-4 py-2 border rounded-lg text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all ${
              errors.email
                ? 'border-red-500 focus:ring-red-200'
                : 'border-gray-300 focus:ring-blue-200'
            }`}
          />
          {/* Error message */}
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
