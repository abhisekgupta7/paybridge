type TocItem = {
  id: string
  text: string
  level: number
}

export function TableOfContents({
  items,
}: {
  items: TocItem[]
}) {
  return (
    <aside className="sticky top-24 hidden w-64 shrink-0 xl:block">
      <div className="space-y-3">
        <p className="text-sm font-semibold">
          On This Page
        </p>

        <nav className="space-y-2">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`block text-sm text-muted-foreground transition hover:text-foreground ${
                item.level === 2
                  ? "pl-0"
                  : "pl-4"
              }`}
            >
              {item.text}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  )
}