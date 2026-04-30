'use client';

/**
 * DashboardCard Component
 * Displays a single user's information in a card format
 * Reusable component for showing user details
 */

import { User } from '@/types';

interface DashboardCardProps {
  user: User;
}

export const DashboardCard = ({ user }: DashboardCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* User name */}
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{user.name}</h3>

      {/* Username */}
      <p className="text-sm text-gray-500 mb-3">@{user.username}</p>

      {/* User details grid */}
      <div className="space-y-2 text-sm">
        {/* Email */}
        <div className="flex items-start">
          <span className="font-medium text-gray-700 w-20">Email:</span>
          <a
            href={`mailto:${user.email}`}
            className="text-blue-600 hover:text-blue-800 break-all"
          >
            {user.email}
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-start">
          <span className="font-medium text-gray-700 w-20">Phone:</span>
          <a
            href={`tel:${user.phone}`}
            className="text-blue-600 hover:text-blue-800"
          >
            {user.phone}
          </a>
        </div>

        {/* Company */}
        <div className="flex items-start">
          <span className="font-medium text-gray-700 w-20">Company:</span>
          <span className="text-gray-600">{user.company.name}</span>
        </div>

        {/* Website */}
        <div className="flex items-start">
          <span className="font-medium text-gray-700 w-20">Website:</span>
          <a
            href={`https://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            {user.website}
          </a>
        </div>
      </div>
    </div>
  );
};
