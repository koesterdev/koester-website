import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="bg-neutral-100">
        <div className="mx-auto max-w-screen-lg">
          <nav className="flex items-center justify-between py-6">
            <Link href="/" className="text-2xl font-semibold">
              Koester Dev
            </Link>
            <div className="flex gap-4">
              <Link href="/mark">Mark</Link>
              <Link href="/nick">Nick</Link>
            </div>
          </nav>
          <main>{children}</main>
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
