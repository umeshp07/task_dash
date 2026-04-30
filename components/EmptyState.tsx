'use client';

/**
 * EmptyState Component
 * Displays a message when no data is available
 * Shown when the API returns an empty array
 */

export const EmptyState = () => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-12 text-center">
      {/* Empty state icon */}
      <div className="mb-4 text-5xl">📭</div>

      {/* Empty state message */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        No users found
      </h3>
      <p className="text-gray-600">
        There are no users to display at the moment.
      </p>
    </div>
  );
};
