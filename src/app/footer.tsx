import Link from "next/link";

export function Footer() {
  return (
    <footer className="h-40 bg-gradient-to-r from-blue-100 to-blue-200 mt-12 flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-4">
        {/* Logo or Site Name */}
        <div className="text-2xl font-bold text-blue-900 mb-4 md:mb-0">FileBox</div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
          <Link href="/privacy" className="text-blue-900 hover:text-blue-500 transition duration-300 ease-in-out">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="text-blue-900 hover:text-blue-500 transition duration-300 ease-in-out">
            Terms of Service
          </Link>
          <Link href="/about" className="text-blue-900 hover:text-blue-500 transition duration-300 ease-in-out">
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}
