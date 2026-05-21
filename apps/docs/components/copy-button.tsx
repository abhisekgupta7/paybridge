"use client"

import { Check, Copy } from "lucide-react"

import { useState } from "react"

type CopyButtonProps = {
  text: string
}

export function CopyButton({
  text,
}: CopyButtonProps) {
  const [copied, setCopied] =
    useState(false)

  async function copy() {
    await navigator.clipboard.writeText(
      text
    )

    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <button
      onClick={copy}
      className="absolute right-3 top-3 rounded-md border border-border bg-background p-2 transition hover:bg-muted"
    >
      {copied ? (
        <Check className="h-4 w-4" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </button>
  )
}