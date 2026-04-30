
'use client';

/**
 * ErrorState Component
 * Displays a user-friendly error message when data fetching fails
 * Includes retry button functionality
 */

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export const ErrorState = ({
  message = 'Failed to load users. Please try again.',
  onRetry,
}: ErrorStateProps) => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
      {/* Error icon */}
      <div className="mb-4 text-4xl">⚠️</div>

      {/* Error message */}
      <h3 className="text-lg font-semibold text-red-900 mb-2">
        Something went wrong
      </h3>
      <p className="text-red-700 mb-4">{message}</p>

      {/* Retry button */}
      {onRetry && (
        <button
          onClick={onRetry}
          className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
        >
          Try Again
        </button>
      )}
    </div>
  );
};
