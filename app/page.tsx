import Link from 'next/link';

/**
 * Home Page
 * Landing page that introduces the application and links to the dashboard
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        {/* Logo/Icon */}
        <div className="mb-8 text-6xl">📊</div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Task Dashboard
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-8">
          A production-quality dashboard built with Next.js, React Query, and
          Tailwind CSS. View user data, manage information, and submit forms
          with validation.
        </p>

        {/* Features */}
        <div className="mb-8 space-y-2 text-left">
          <div className="flex items-center gap-2 text-gray-700">
            <span className="text-blue-600 font-bold">✓</span>
            <span>Server-side data fetching with React Query</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <span className="text-blue-600 font-bold">✓</span>
            <span>Form validation with React Hook Form & Zod</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <span className="text-blue-600 font-bold">✓</span>
            <span>Responsive design with Tailwind CSS</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <span className="text-blue-600 font-bold">✓</span>
            <span>Comprehensive UI states (loading, error, empty)</span>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href="/dashboard"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
