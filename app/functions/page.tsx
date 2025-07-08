'use client';

import { useState } from 'react';
import CopyDownload from './../../components/copyDownload';

export default function FunctionsBuilder() {
  const [table, setTable] = useState('');
  const [funcType, setFuncType] = useState('COUNT');
  const [column, setColumn] = useState('');
  const [groupBy, setGroupBy] = useState('');
  const [condition, setCondition] = useState('');

  const generateSQL = () => {
    if (!table || !column) return '-- Please enter table and column';

    const funcMap = {
      COUNT: `COUNT(${column})`,
      SUM: `SUM(${column})`,
      AVG: `AVG(${column})`,
      MAX: `MAX(${column})`,
      MIN: `MIN(${column})`,
      UPPER: `UPPER(${column})`,
      LOWER: `LOWER(${column})`,
      LENGTH: `LENGTH(${column})`,
      NOW: `NOW()`,
      DATE: `DATE(${column})`,
    };

    let sql = `SELECT ${funcMap[funcType]} AS result\nFROM ${table}`;

    if (condition) sql += `\nWHERE ${condition}`;
    if (groupBy && ['COUNT', 'SUM', 'AVG', 'MAX', 'MIN'].includes(funcType)) {
      sql += `\nGROUP BY ${groupBy}`;
    }

    return sql + ';';
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">📊 SQL Functions Builder</h1>

      <input
        className="border p-2 w-full mb-4"
        placeholder="Table Name"
        value={table}
        onChange={e => setTable(e.target.value)}
      />

      <select
        className="border p-2 w-full mb-4"
        value={funcType}
        onChange={e => setFuncType(e.target.value)}
      >
        <optgroup label="Aggregate">
          <option value="COUNT">COUNT()</option>
          <option value="SUM">SUM()</option>
          <option value="AVG">AVG()</option>
          <option value="MAX">MAX()</option>
          <option value="MIN">MIN()</option>
        </optgroup>
        <optgroup label="String">
          <option value="UPPER">UPPER()</option>
          <option value="LOWER">LOWER()</option>
          <option value="LENGTH">LENGTH()</option>
        </optgroup>
        <optgroup label="Date/Time">
          <option value="NOW">NOW()</option>
          <option value="DATE">DATE()</option>
        </optgroup>
      </select>

      <input
        className="border p-2 w-full mb-4"
        placeholder="Column Name"
        value={column}
        onChange={e => setColumn(e.target.value)}
      />

      <input
        className="border p-2 w-full mb-4"
        placeholder="GROUP BY column (optional)"
        value={groupBy}
        onChange={e => setGroupBy(e.target.value)}
      />

      <input
        className="border p-2 w-full mb-4"
        placeholder="WHERE condition (optional)"
        value={condition}
        onChange={e => setCondition(e.target.value)}
      />

      <h2 className="text-lg font-semibold mt-6">Generated SQL</h2>
      <pre className="bg-gray-100 p-4 rounded border whitespace-pre-wrap">{generateSQL()}</pre>

      <CopyDownload sql={generateSQL()} />
    </div>
  );
}
