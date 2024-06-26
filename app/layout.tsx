import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="bg-gradient-to-bl from-gray-800 to-gray-900 to-30% text-gray-200">
        <div className="mx-auto max-w-screen-xl">
          <nav className="flex items-center justify-between px-4 py-6">
            <Link href="/" className="text-2xl font-semibold">
              Koester Dev
            </Link>
            <div className="flex gap-4 text-lg font-semibold">
              <Link href="/mark">Mark</Link>
              <Link href="/nick">Nick</Link>
            </div>
          </nav>
          <main className="px-4">{children}</main>
        </div>
      </body>
    </html>
  );
};

export const metadata: Metadata = {
  title: 'Koester | Home',
  description: 'Personal website for Mark and Nick Koester',
};

export default RootLayout;
