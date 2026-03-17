import React from 'react';

interface MarkdownRendererProps {
    content: string;
}

/**
 * A simple markdown-lite renderer to avoid extra heavy dependencies.
 * Handles headers, paragraphs, lists, tables, and links.
 */
export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let currentList: { items: string[]; type: 'ul' | 'ol' } | null = null;
    let currentTable: string[][] | null = null;

    const flushList = () => {
        if (currentList) {
            const ListTag = currentList.type;
            elements.push(
                <ListTag key={`list-${elements.length}`} className={`${currentList.type === 'ul' ? 'list-disc' : 'list-decimal'} ml-6 mb-6 space-y-2 text-slate-600`}>
                    {currentList.items.map((item, i) => (
                        <li key={i} className="pl-2" dangerouslySetInnerHTML={{ __html: parseInline(item) }} />
                    ))}
                </ListTag>
            );
            currentList = null;
        }
    };

    const flushTable = () => {
        if (currentTable) {
            elements.push(
                <div key={`table-${elements.length}`} className="overflow-x-auto mb-8 border border-slate-200 rounded-xl">
                    <table className="w-full text-sm text-left text-slate-600">
                        <thead className="bg-slate-50 text-slate-900 border-b border-slate-200">
                            <tr>
                                {currentTable[0].map((cell, i) => (
                                    <th key={i} className="px-6 py-4 font-bold" dangerouslySetInnerHTML={{ __html: parseInline(cell.trim()) }} />
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {currentTable.slice(1).filter(row => !row[0].trim().startsWith(':---') && !row[0].trim().startsWith('---')).map((row, i) => (
                                <tr key={i} className="hover:bg-slate-50 transition-colors">
                                    {row.map((cell, j) => (
                                        <td key={j} className="px-6 py-4" dangerouslySetInnerHTML={{ __html: parseInline(cell.trim()) }} />
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
            currentTable = null;
        }
    };

    const parseInline = (text: string) => {
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900">$1</strong>')
            .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
            .replace(/\[(.*?)\]\((.*?)\)/g, (match, label, href) => {
                const isExternal = /^https?:\/\//.test(href);
                const isDoFollow = !isExternal || href.includes('cgpahub.com') || href.includes('https://subsidypk.com') || href.includes('https://www.gyaanpost.com/education') || href.includes('https://growithmoney.com') || href.includes('quickcareer.in') || href.includes('topfinanceoutreach.com');
                const rel = `noopener noreferrer${isDoFollow ? '' : ' nofollow'}`;
                return `<a href="${href}" class="text-indigo-600 font-semibold hover:underline" target="_blank" rel="${rel}">${label}</a>`;
            });
    };

    lines.forEach((line, index) => {
        const trimmed = line.trim();

        // Headers
        if (trimmed.startsWith('# ')) {
            flushList(); flushTable();
            elements.push(<h1 key={index} className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 mt-10">{trimmed.slice(2)}</h1>);
        } else if (trimmed.startsWith('## ')) {
            flushList(); flushTable();
            elements.push(<h2 key={index} className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-5 mt-12">{trimmed.slice(3)}</h2>);
        } else if (trimmed.startsWith('### ')) {
            flushList(); flushTable();
            elements.push(<h3 key={index} className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 mt-8">{trimmed.slice(4)}</h3>);
        }
        // Lists
        else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
            flushTable();
            if (!currentList || currentList.type !== 'ul') {
                flushList();
                currentList = { items: [trimmed.slice(2)], type: 'ul' };
            } else {
                currentList.items.push(trimmed.slice(2));
            }
        } else if (/^\d+\.\s/.test(trimmed)) {
            flushTable();
            if (!currentList || currentList.type !== 'ol') {
                flushList();
                currentList = { items: [trimmed.replace(/^\d+\.\s/, '')], type: 'ol' };
            } else {
                currentList.items.push(trimmed.replace(/^\d+\.\s/, ''));
            }
        }
        // Table
        else if (trimmed.startsWith('|')) {
            flushList();
            const cells = trimmed.split('|').slice(1, -1);
            if (!currentTable) {
                currentTable = [cells];
            } else {
                currentTable.push(cells);
            }
        }
        // Horizontal Rule
        else if (trimmed === '---') {
            flushList(); flushTable();
            elements.push(<hr key={index} className="my-10 border-slate-200" />);
        }
        // Paragraph or Image/Break
        else if (trimmed) {
            flushList(); flushTable();
            elements.push(
                <p key={index} className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6"
                    dangerouslySetInnerHTML={{ __html: parseInline(trimmed) }} />
            );
        } else {
            flushList(); flushTable();
        }
    });

    flushList();
    flushTable();

    return <div className="markdown-content">{elements}</div>;
}
