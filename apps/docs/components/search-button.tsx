"use client"

import { Search } from "lucide-react"

export function SearchButton() {
  return (
    <button className="flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm text-muted-foreground transition hover:bg-muted">
      <Search className="h-4 w-4" />

      Search docs...
    </button>
  )
}