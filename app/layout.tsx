import './globals.css';
import Header from '../components/Header';


export const metadata = {
  title: 'SQL Builder',
  description: 'Build SQL queries interactively for DDL, DML, Joins, Functions, and more.',
  // Set base for proper paths (optional if assetPrefix works)
  metadataBase: new URL('https://rajasekar-arch.github.io/complete-sql-query-builder/'),
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen">
        <Header />
        <main className="max-w-5xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
