import { notFound } from "next/navigation"

import { source } from "../../../lib/source"

export default async function DocsPage({
  params,
}: {
  params: {
    slug?: string[]
  }
}) {
  const page = source.getPage(
    params.slug
  )

  if (!page) {
    notFound()
  }

  const Content = page.data.body

  return (
    <article className="prose prose-invert max-w-none">
      <h1>{page.data.title}</h1>

      <Content />
    </article>
  )
}