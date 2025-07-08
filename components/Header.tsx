'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white sticky top-0 z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-semibold">SQL Builder</h1>
        <nav className="space-x-6 text-sm">
          <Link href="/" className="hover:underline">🏠 Home</Link>
          <Link href="/ddl" className="hover:underline">🧱 DDL</Link>
          <Link href="/dml" className="hover:underline">📋 DML</Link>
          <Link href="/joins" className="hover:underline">🔗 Joins</Link>
          <Link href="/subqueries" className="hover:underline">🔍 Subqueries</Link>
          <Link href="/functions" className="hover:underline">📊 Functions</Link>
          <Link href="/dcl-tcl" className="hover:underline">🔐 DCL/TCL</Link>
        </nav>
      </div>
    </header>
  );
}
