/**
 * Generic table used for messages, customers and invoices.
 * columns: [{ key, label, width, render? }] — width is a CSS grid track (e.g. "120px" or "1fr").
 * render(row, i) optionally overrides the default cell content for that column.
 */
export default function DataTable({ columns, data, onRowAction }) {
  const gridTemplateColumns = columns.map((c) => c.width || '1fr').join(' ');
  return (
    <div style={{ borderRadius: 12, overflow: 'hidden', border: `1px solid var(--vz-border)` }}>
      <div style={{ display: 'grid', gridTemplateColumns, background: 'var(--vz-panel)', padding: '10px 16px', fontSize: 12, fontWeight: 600, color: 'var(--vz-muted)' }}>
        {columns.map((c) => <span key={c.key}>{c.label}</span>)}
      </div>
      {data.map((row, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns, padding: '12px 16px', fontSize: 13, borderTop: `1px solid var(--vz-border)`, alignItems: 'center' }}>
          {columns.map((c) => (
            <span key={c.key} style={{ color: 'var(--vz-body)' }}>
              {c.render ? c.render(row, i, onRowAction) : row[c.key]}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
