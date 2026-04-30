'use client';

/**
 * DataTable Component
 * Displays users in a clean table format
 * Responsive design that adapts to mobile screens
 */

import { User } from '@/types';

interface DataTableProps {
  users: User[];
}

export const DataTable = ({ users }: DataTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 border-b border-gray-200">
            {/* Table headers */}
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
              Name
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 hidden md:table-cell">
              Email
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 hidden lg:table-cell">
              Phone
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 hidden lg:table-cell">
              Company
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Table rows - map through each user */}
          {users.map((user, index) => (
            <tr
              key={user.id}
              className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              }`}
            >
              {/* Name cell */}
              <td className="px-4 py-3 text-sm text-gray-900 font-medium">
                <div>{user.name}</div>
                <div className="text-xs text-gray-500 md:hidden">
                  {user.email}
                </div>
              </td>

              {/* Email cell (hidden on mobile) */}
              <td className="px-4 py-3 text-sm text-gray-600 hidden md:table-cell">
                <a
                  href={`mailto:${user.email}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {user.email}
                </a>
              </td>

              {/* Phone cell (hidden on tablet and below) */}
              <td className="px-4 py-3 text-sm text-gray-600 hidden lg:table-cell">
                <a
                  href={`tel:${user.phone}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {user.phone}
                </a>
              </td>

              {/* Company cell (hidden on tablet and below) */}
              <td className="px-4 py-3 text-sm text-gray-600 hidden lg:table-cell">
                {user.company.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
