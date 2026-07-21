export function Logo({ className = "" }) {
  return (
    <div className={`flex flex-col items-center leading-none ${className}`}>
      <svg width="42" height="30" viewBox="0 0 42 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M4 3 L21 26 L38 3" stroke="#0a3faa" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 3 L21 13 L28 3" stroke="#e01f7a" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="mt-1 text-[11px] font-extrabold tracking-[0.25em] text-primary">AVENTIX</span>
    </div>
  )
}
