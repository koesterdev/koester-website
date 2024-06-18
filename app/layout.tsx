import type { Metadata } from 'next';
import './globals.css';

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export const metadata: Metadata = {
  title: 'Koester | Home',
  description: 'Personal website for Mark and Nick Koester',
};

export default RootLayout;
