import React from 'react';

export default function ProjectFooter({ sections = {}, className = '' }) {

    const normalized = (Array.isArray(sections) ? sections : Object.entries(sections || {}))
        .map(([title, items]) => ({ title, items: Array.isArray(items) ? items : [items] }));

    if (normalized.length === 0) return null;


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
    )

    return (
        <footer className={`w-full border-gray-200 bg-white ${className}`}>
            <div className={`p-6 px-6 w-full ${gridClass} text-left`}>
                {normalized.map((s, i) => (
                    <Section key={s.title || i} title={s.title} items={s.items} />
                ))}
            </div>
        </footer>
    )

}
