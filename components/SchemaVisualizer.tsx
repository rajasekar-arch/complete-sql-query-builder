'use client';
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: 'users',
    type: 'default',
    position: { x: 0, y: 0 },
    data: { label: 'users\n———\nid (PK)\nname\nemail' },
  },
  {
    id: 'orders',
    type: 'default',
    position: { x: 300, y: 100 },
    data: { label: 'orders\n———\nid (PK)\nuser_id (FK)\namount' },
  },
];

const initialEdges = [
  {
    id: 'e1-2',
    source: 'orders',
    target: 'users',
    label: 'user_id → id',
    animated: true,
  },
];

export default function SchemaVisualizer() {
  return (
    <div style={{ width: '100%', height: '600px' }}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}
