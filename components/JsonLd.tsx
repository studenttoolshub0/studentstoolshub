import Script from "next/script";

interface JsonLdProps {
    data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
    const id = (data["@type"] as string)?.toLowerCase() || Math.random().toString(36).substr(2, 5);
    
    return (
        <Script
            id={`jsonld-${id}`}
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
