

/**
 * Dashboard Page
 * Main page component that displays:
 * 1. User data from JSONPlaceholder API (using React Query)
 * 2. Loading, error, and empty states
 * 3. Contact form with validation
 * 
 * All UI states are handled:
 * - Loading: Shows skeleton loaders
 * - Error: Shows user-friendly error message with retry
 * - Success: Displays users in card format
 * - Empty: Shows empty state fallback
 */

import { useState } from 'react';
import { useUsers } from '@/hooks/useUsers';
import { DashboardCard } from '@/components/DashboardCard';
import { DataTable } from '@/components/DataTable';
import { Form } from '@/components/Form';
import { Loader } from '@/components/Loader';
import { ErrorState } from '@/components/ErrorState';
import { EmptyState } from '@/components/EmptyState';

type ViewMode = 'cards' | 'table';

export default function Dashboard() {
  const [viewMode, setViewMode] = useState<ViewMode>('cards');

  // React Query hook for fetching users
  // Automatically handles loading, error, and data states
  const { data: users, isLoading, error, refetch } = useUsers();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-8">
      {/* Main container */}
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">
            Manage and view user information from our database
          </p>
        </div>

        {/* Layout: Two column grid on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content area - takes up 2 columns on desktop */}
          <div className="lg:col-span-2 space-y-6">
            {/* View toggle buttons */}
            <div className="flex gap-2 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <button
                onClick={() => setViewMode('cards')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  viewMode === 'cards'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Card View
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  viewMode === 'table'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Table View
              </button>
            </div>

            {/* Content section - handles all states */}
            <div className="space-y-4">
              {/* Loading state: Show skeleton loaders */}
              {isLoading && <Loader />}

              {/* Error state: Show error message with retry button */}
              {error && !isLoading && (
                <ErrorState
                  message={`Failed to load users: ${error.message}`}
                  onRetry={() => refetch()}
                />
              )}

              {/* Success state: Display users based on view mode */}
              {!isLoading && !error && users && users.length > 0 && (
                <>
                  {/* Show card view */}
                  {viewMode === 'cards' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {users.map((user) => (
                        <DashboardCard key={user.id} user={user} />
                      ))}
                    </div>
                  )}

                  {/* Show table view */}
                  {viewMode === 'table' && <DataTable users={users} />}

                  {/* Results count */}
                  <div className="text-sm text-gray-600 mt-4">
                    Showing {users.length} users
                  </div>
                </>
              )}

              {/* Empty state: No users returned from API */}
              {!isLoading && !error && (!users || users.length === 0) && (
                <EmptyState />
              )}
            </div>
          </div>

          {/* Sidebar - Contact form */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
