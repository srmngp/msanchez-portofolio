export default function ListSection({ items }) {
  return (
    <div className="p-6">
      <div className="text-lg sm:text-xl md:text-[25px] leading-relaxed space-y-4">
        {items.map((item, idx) => (
          <div key={idx}>
            <strong>{item.title}</strong>
            {item.lines.map((line, lineIdx) => (
              <span key={lineIdx}>
                <br />
                {line}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
