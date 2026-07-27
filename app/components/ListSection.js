export default function ListSection({ items }) {
  return (
    <div className="p-6">
      <div className="max-w-3xl space-y-7 sm:space-y-8">
        {items.map((item, idx) => (
          <div key={idx} className="text-base sm:text-lg leading-relaxed">
            <strong className="block font-bold mb-1">{item.title}</strong>
            <div className="space-y-0.5">
              {item.lines.map((line, lineIdx) => (
                <p key={lineIdx}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
