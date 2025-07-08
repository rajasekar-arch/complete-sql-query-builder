'use client';

import { useState } from 'react';
import CopyDownload from './../../components/copyDownload';

export default function DDLBuilder() {
  const [ddlType, setDdlType] = useState('CREATE');
  const [tableName, setTableName] = useState('');
  const [columns, setColumns] = useState([{ name: '', type: 'VARCHAR(255)' }]);

  const addColumn = () => setColumns([...columns, { name: '', type: 'VARCHAR(255)' }]);

  const updateColumn = (index: number, key: string, value: string) => {
    const updated = [...columns];
    updated[index][key] = value;
    setColumns(updated);
  };

  const generateDDL = () => {
    if (!tableName) return '-- Enter table name';

    if (ddlType === 'DROP') {
      return `DROP TABLE ${tableName};`;
    }

    const colDefs = columns
      .filter(col => col.name)
      .map(col => `${col.name} ${col.type}`)
      .join(',\n  ');

    if (ddlType === 'CREATE') {
      return `CREATE TABLE ${tableName} (\n  ${colDefs}\n);`;
    }

    if (ddlType === 'ALTER') {
      return columns
        .filter(col => col.name)
        .map(col => `ALTER TABLE ${tableName} ADD COLUMN ${col.name} ${col.type};`)
        .join('\n');
    }

    return '-- Invalid DDL type';
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">🧱 DDL Builder (CREATE / ALTER / DROP)</h1>

      <div className="mb-4 space-x-4">
        <select value={ddlType} onChange={e => setDdlType(e.target.value)} className="p-2 border">
          <option value="CREATE">CREATE TABLE</option>
          <option value="ALTER">ALTER TABLE</option>
          <option value="DROP">DROP TABLE</option>
        </select>

        <input
          type="text"
          placeholder="Table Name"
          className="p-2 border"
          value={tableName}
          onChange={e => setTableName(e.target.value)}
        />
      </div>

      {(ddlType !== 'DROP') &&
        <div className="space-y-2 mb-4">
          {columns.map((col, i) => (
            <div key={i} className="flex gap-2">
              <input
                className="border p-2 w-1/2"
                placeholder="Column Name"
                value={col.name}
                onChange={e => updateColumn(i, 'name', e.target.value)}
              />
              <select
                className="border p-2 w-1/2"
                value={col.type}
                onChange={e => updateColumn(i, 'type', e.target.value)}
              >
                <option value="INT">INT</option>
                <option value="VARCHAR(255)">VARCHAR(255)</option>
                <option value="TEXT">TEXT</option>
                <option value="DATE">DATE</option>
                <option value="BOOLEAN">BOOLEAN</option>
              </select>
            </div>
          ))}
          <button onClick={addColumn} className="bg-blue-500 text-white px-4 py-2 rounded">+ Add Column</button>
        </div>
      }

      <h2 className="text-lg font-semibold mt-6">Generated SQL</h2>
      <pre className="bg-gray-100 p-4 rounded border whitespace-pre-wrap">{generateDDL()}</pre>

      <CopyDownload sql={generateDDL()} />
    </div>
  );
}
