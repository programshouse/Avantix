export function SectionHeader({ title, description }) {
  return (
    <div className="mb-7 text-center">
      <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-2 text-sm text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}