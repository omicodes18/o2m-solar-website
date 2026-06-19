import { getStructuredDataGraph } from "@/lib/seo";

export function JsonLd() {
  const graph = getStructuredDataGraph();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
