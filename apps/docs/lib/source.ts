import { loader } from "fumadocs-core/source";
import * as fumadocsMdx from "fumadocs-mdx";

const createMDXSource =
  // support both named export and default/primary export
  (fumadocsMdx as any)?.createMDXSource ??
  (fumadocsMdx as any)?.default ??
  fumadocsMdx;

export const source = loader({
  baseUrl: "/docs",
  source: createMDXSource("content/docs"),
});
