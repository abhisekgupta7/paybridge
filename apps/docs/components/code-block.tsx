import { codeToHtml } from "shiki"

import { CopyButton } from "./copy-button"

type CodeBlockProps = {
  code: string
  lang: string
}

export async function CodeBlock({
  code,
  lang,
}: CodeBlockProps) {
  const html = await codeToHtml(code, {
    lang,

    themes: {
      light: "github-light",
      dark: "github-dark",
    },

    defaultColor: false,
  })

  return (
    <div className="group relative my-6 overflow-hidden rounded-2xl border border-border bg-zinc-950">
      <div className="absolute right-3 top-3 z-10 opacity-0 transition group-hover:opacity-100">
        <CopyButton text={code} />
      </div>

      <div
        className="overflow-x-auto text-sm"
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </div>
  )
}