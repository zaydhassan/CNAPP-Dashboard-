export default function MultiSegmentDonutChart({ data, total }) {
  let angles = [];
  let lastAngle = 0;
  data.forEach((segment) => {
    let angle = Math.round((segment.value / total) * 360);
    angles.push({ ...segment, start: lastAngle, end: lastAngle + angle });
    lastAngle += angle;
  });

  const gradient = angles.map((seg) => `${seg.color} ${seg.start}deg ${seg.end}deg`).join(', ');
  const mainSegment = data[data.length - 1];

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div
        className="rounded-full w-24 h-24 flex items-center justify-center"
        style={{ background: `conic-gradient(${gradient})` }}
      >
        <div className="rounded-full w-14 h-14 bg-white flex items-center justify-center font-bold text-xl text-gray-800 border border-gray-200">
          {mainSegment.value}
        </div>
      </div>
      <div className="text-xs text-gray-500 mt-2">Total</div>
    </div>
  );
}