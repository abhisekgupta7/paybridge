import {
  AlertTriangle,
  Info,
  ShieldAlert,
} from "lucide-react"

import type { ReactNode } from "react"

type CalloutType =
  | "info"
  | "warning"
  | "security"

const styles = {
  info: {
    icon: Info,
    className:
      "border-blue-500/20 bg-blue-500/10",
  },

  warning: {
    icon: AlertTriangle,
    className:
      "border-yellow-500/20 bg-yellow-500/10",
  },

  security: {
    icon: ShieldAlert,
    className:
      "border-red-500/20 bg-red-500/10",
  },
}

export function Callout({
  type = "info",
  children,
}: {
  type?: CalloutType
  children: ReactNode
}) {
  const config = styles[type]

  const Icon = config.icon

  return (
    <div
      className={`my-6 flex gap-3 rounded-2xl border p-4 ${config.className}`}
    >
      <Icon className="mt-0.5 h-5 w-5 shrink-0" />

      <div className="text-sm">
        {children}
      </div>
    </div>
  )
}