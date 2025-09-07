export default function BarIndicator({ data }) {
  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex w-full h-4 rounded overflow-hidden mb-2">
        {data.map((segment) => (
          <div
            key={segment.label}
            style={{ width: `${(segment.value / total) * 100}%`, backgroundColor: segment.color }}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-4 text-xs">
        {data.map((segment) => (
          <div key={segment.label} className="flex items-center gap-1 text-gray-600">
            <div className="w-3 h-3 rounded" style={{ backgroundColor: segment.color }} />
            <span>{segment.label} ({segment.value})</span>
          </div>
        ))}
      </div>
    </div>
  );
}
