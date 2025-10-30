import React from 'react';

/**
 * ProjectFooter
 *
 * Props:
 * - sections: object mapping header title -> array of string values
 *    e.g. { "Agency": ["Contenedor Cultural"], "Designer": ["Maria Sanchez", "Lola Palacios"] }
 *   or an array of [title, items]
 * - className: optional extra classes applied to the footer wrapper
 */
export default function ProjectFooter({ sections = {}, className = '', minColWidth = 220, fixedCols = 4, fixedMinWidth = 140 }) {
    // Normalize sections into an array of objects: [{ title, items }]
    const normalized = (Array.isArray(sections) ? sections : Object.entries(sections || {}))
        .map(([title, items]) => ({ title, items: Array.isArray(items) ? items : [items] }));

    if (normalized.length === 0) return null;

    // Fall back to explicit column classes so Tailwind includes them reliably.
    // Decide how many columns we want at md breakpoint based on number of sections.
    const cols = normalized.length >= 4 ? 4 : normalized.length >= 2 ? normalized.length : 1;
    const mdColsClass = cols === 4 ? 'md:grid-cols-4' : cols === 3 ? 'md:grid-cols-3' : cols === 2 ? 'md:grid-cols-2' : 'md:grid-cols-1';
    const gridClass = `grid grid-cols-2 ${mdColsClass} gap-8`;

    const Section = ({ title, items }) => (
        <div>
            <h4 className="font-bold mb-2">{title}</h4>
            <ul className="space-y-1 text-sm">
                {items.map((it, i) => (
                    <li key={i}>{it}</li>
                ))}
            </ul>
        </div>
    );

    return (
        <footer className={`w-full border-gray-200 bg-white ${className}`}>
            {/* Full-width content area; padding preserved */}
            <div className={`p-6 px-6 w-full ${gridClass} text-left`}>
                {normalized.map((s, i) => (
                    <Section key={s.title || i} title={s.title} items={s.items} />
                ))}
            </div>
        </footer>
    );
}
