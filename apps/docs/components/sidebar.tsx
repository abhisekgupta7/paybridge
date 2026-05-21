import Link from "next/link";

import { navigation } from "../lib/navigation";
import type * as PageTree from "fumadocs-core/page-tree";
export function Sidebar() {
  return (
    <aside className="sticky top-0 h-screen w-72 overflow-y-auto border-r border-border px-6 py-8">
      <div className="mb-8">
        <h2 className="text-xl font-semibold">Paybridge</h2>
      </div>

      <nav className="space-y-6">
        {navigation.children.map((section: PageTree.Folder) => (
          <div key={section.$id ?? String(section.name)}>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {section.name}
            </h3>

            <div className="space-y-2">
              {section.children
                ?.filter(
                  (n): n is PageTree.Item => typeof (n as any).url === "string",
                )
                .map((item) => (
                  <Link
                    key={item.url}
                    href={item.url}
                    className="block rounded-lg px-3 py-2 text-sm transition hover:bg-muted"
                  >
                    {item.name}
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
