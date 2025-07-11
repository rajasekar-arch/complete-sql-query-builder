'use client';

export default function CopyDownload({ sql }: { sql: string }) {
  const copy = () => {
    navigator.clipboard.writeText(sql).then(() => alert('Copied!'));
  };

  const download = () => {
    const blob = new Blob([sql], { type: 'text/sql' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'query.sql';
    a.click();
  };

  return (
    <div className="mt-4 flex gap-3">
      <button onClick={copy} className="bg-green-600 text-white px-4 py-2 rounded">📋 Copy</button>
      <button onClick={download} className="bg-purple-600 text-white px-4 py-2 rounded">⬇ Download</button>
    </div>
  );
}
