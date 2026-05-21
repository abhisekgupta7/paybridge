"use client"

import * as TabsPrimitive from "@radix-ui/react-tabs"

import type { ReactNode } from "react"

export function Tabs({
  defaultValue,
  children,
}: {
  defaultValue: string
  children: ReactNode
}) {
  return (
    <TabsPrimitive.Root
      defaultValue={defaultValue}
      className="mt-6"
    >
      {children}
    </TabsPrimitive.Root>
  )
}

export function TabsList({
  children,
}: {
  children: ReactNode
}) {
  return (
    <TabsPrimitive.List className="inline-flex rounded-xl border border-border bg-muted p-1">
      {children}
    </TabsPrimitive.List>
  )
}

export function TabsTrigger({
  value,
  children,
}: {
  value: string
  children: ReactNode
}) {
  return (
    <TabsPrimitive.Trigger
      value={value}
      className="rounded-lg px-4 py-2 text-sm transition data-[state=active]:bg-background"
    >
      {children}
    </TabsPrimitive.Trigger>
  )
}

export function TabsContent({
  value,
  children,
}: {
  value: string
  children: ReactNode
}) {
  return (
    <TabsPrimitive.Content
      value={value}
      className="mt-4"
    >
      {children}
    </TabsPrimitive.Content>
  )
}