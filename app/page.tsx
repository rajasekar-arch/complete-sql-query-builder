import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">🛠️ SQL Builder Dashboard</h1>
      <p className="mb-6">Generate SQL interactively for any command or function.</p>

      <ul className="grid grid-cols-2 gap-4">
        <li><Link href="/ddl" className="block p-4 bg-gray-100 hover:bg-gray-200 rounded">🧱 DDL (Create/Alter Tables)</Link></li>
        <li><Link href="/dml" className="block p-4 bg-gray-100 hover:bg-gray-200 rounded">📋 DML (Insert/Update/Delete)</Link></li>
        <li><Link href="/joins" className="block p-4 bg-gray-100 hover:bg-gray-200 rounded">🔗 JOIN Builder</Link></li>
        <li><Link href="/subqueries" className="block p-4 bg-gray-100 hover:bg-gray-200 rounded">🔍 Subqueries</Link></li>
        <li><Link href="/functions" className="block p-4 bg-gray-100 hover:bg-gray-200 rounded">📊 Functions (Agg/String/Date)</Link></li>
        <li><Link href="/dcl-tcl" className="block p-4 bg-gray-100 hover:bg-gray-200 rounded">🔐 DCL / TCL (GRANT, COMMIT...)</Link></li>
        <li><Link href="/schema-visualizer" className="block p-4 bg-gray-100 hover:bg-gray-200 rounded">Schema visualizer</Link></li>

      </ul>
    </div>
  );
}
