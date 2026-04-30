'use client';

/**
 * Loader Component
 * Displays a loading skeleton for the dashboard cards
 * Shows animated placeholders while data is being fetched
 */

export const Loader = () => {
  return (
    <div className="space-y-4">
      {/* Render 6 skeleton cards */}
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm animate-pulse"
        >
          {/* Skeleton name */}
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>

          {/* Skeleton email */}
          <div className="h-3 bg-gray-200 rounded w-1/2 mb-4"></div>

          {/* Skeleton company */}
          <div className="h-3 bg-gray-200 rounded w-2/3"></div>
        </div>
      ))}
    </div>
  );
};
