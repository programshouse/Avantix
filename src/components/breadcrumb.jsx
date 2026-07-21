import { Link } from "react-router-dom"
import { ChevronLeft } from "lucide-react"

export function Breadcrumb({ items }) {
  return (
    <nav className="flex items-center justify-end gap-1 text-sm" aria-label="مسار التنقل">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1">
          {item.to ? (
            <Link to={item.to} className="text-muted-foreground transition-colors hover:text-primary">
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold text-primary">{item.label}</span>
          )}
          {i < items.length - 1 && <ChevronLeft className="h-4 w-4 text-muted-foreground" />}
        </span>
      ))}
    </nav>
  )
}
