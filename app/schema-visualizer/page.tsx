import SchemaVisualizer from './../../components/SchemaVisualizer';

export default function SchemaPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">📊 Schema Visualizer</h1>
      <p className="mb-4">View your database schema and table relationships.</p>
      <SchemaVisualizer />
    </div>
  );
}
