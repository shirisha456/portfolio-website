import type { ArchitectureEdge, ArchitectureNode } from "@/lib/data";

function center(n: ArchitectureNode) {
  return { x: n.x + n.w / 2, y: n.y + n.h / 2 };
}

function anchor(from: ArchitectureNode, to: ArchitectureNode) {
  const a = center(from);
  const b = center(to);
  const dx = b.x - a.x;
  const dy = b.y - a.y;

  if (Math.abs(dx) >= Math.abs(dy)) {
    return { x: dx >= 0 ? from.x + from.w : from.x, y: a.y };
  }
  return { x: a.x, y: dy >= 0 ? from.y + from.h : from.y };
}

const variantStyles: Record<NonNullable<ArchitectureNode["variant"]>, { stroke: string; fill: string; strokeWidth: number; dash?: string }> = {
  primary: { stroke: "var(--color-accent)", fill: "var(--color-accent-soft)", strokeWidth: 1.5 },
  store: { stroke: "var(--color-border-strong)", fill: "var(--color-surface-raised)", strokeWidth: 1.25 },
  external: { stroke: "var(--color-border-strong)", fill: "transparent", strokeWidth: 1.25, dash: "3 3" },
  group: { stroke: "var(--color-border-strong)", fill: "var(--color-surface)", strokeWidth: 1.25 },
};

export function ArchitectureDiagram({
  nodes,
  edges,
  title,
}: {
  nodes: ArchitectureNode[];
  edges: ArchitectureEdge[];
  title: string;
}) {
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));
  const maxX = Math.max(...nodes.map((n) => n.x + n.w)) + 20;
  const maxY = Math.max(...nodes.map((n) => n.y + n.h)) + 20;

  return (
    <div className="min-w-0 overflow-x-auto rounded-xl border border-border bg-surface/60 p-4">
      <svg
        role="img"
        aria-label={title}
        viewBox={`0 0 ${maxX} ${maxY}`}
        width="100%"
        style={{ minWidth: 640, height: "auto" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <marker id="arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L8,4 L0,8 Z" fill="var(--color-muted)" />
          </marker>
        </defs>

        {edges.map((edge, i) => {
          const from = byId[edge.from];
          const to = byId[edge.to];
          if (!from || !to) return null;
          const p1 = anchor(from, to);
          const p2 = anchor(to, from);
          const midX = (p1.x + p2.x) / 2;
          const midY = (p1.y + p2.y) / 2;

          return (
            <g key={`${edge.from}-${edge.to}-${i}`}>
              <line
                x1={p1.x}
                y1={p1.y}
                x2={p2.x}
                y2={p2.y}
                stroke="var(--color-muted)"
                strokeWidth={1.25}
                strokeDasharray={edge.dashed ? "4 4" : undefined}
                markerEnd="url(#arrow)"
                opacity={0.75}
              />
              {edge.label && (
                <g>
                  <rect
                    x={midX - edge.label.length * 3.1 - 4}
                    y={midY - 9}
                    width={edge.label.length * 6.2 + 8}
                    height={16}
                    fill="var(--color-surface)"
                    opacity={0.92}
                  />
                  <text
                    x={midX}
                    y={midY + 3}
                    textAnchor="middle"
                    fontFamily="var(--font-mono)"
                    fontSize={10}
                    fill="var(--color-muted)"
                  >
                    {edge.label}
                  </text>
                </g>
              )}
            </g>
          );
        })}

        {nodes.map((node) => {
          const style = variantStyles[node.variant ?? "group"];
          return (
            <g key={node.id}>
              <rect
                x={node.x}
                y={node.y}
                width={node.w}
                height={node.h}
                rx={8}
                fill={style.fill}
                stroke={style.stroke}
                strokeWidth={style.strokeWidth}
                strokeDasharray={style.dash}
              />
              <text
                x={node.x + node.w / 2}
                y={node.y + node.h / 2 + (node.sublabel ? -3 : 4)}
                textAnchor="middle"
                fontFamily="var(--font-sans)"
                fontSize={12.5}
                fontWeight={500}
                fill="var(--color-foreground)"
              >
                {node.label}
              </text>
              {node.sublabel && (
                <text
                  x={node.x + node.w / 2}
                  y={node.y + node.h / 2 + 13}
                  textAnchor="middle"
                  fontFamily="var(--font-mono)"
                  fontSize={9.5}
                  fill="var(--color-muted)"
                >
                  {node.sublabel}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
