export function QuantityControl({
  quantity,
  onIncrease,
  onDecrease,
}) {
  return (
    <div
      dir="ltr"
      className="
        flex h-7 items-center overflow-hidden
        rounded-lg border border-[#d7e1f1]
        bg-[#f4f7fc]
      "
    >
      <button
        type="button"
        aria-label="تقليل الكمية"
        onClick={onDecrease}
        disabled={quantity <= 1}
        className="
          flex h-full w-8 items-center justify-center
          text-sm text-[#5f6b7a]
          transition-colors
          hover:bg-[#e9eff9]
          disabled:cursor-not-allowed
          disabled:opacity-40
        "
      >
        −
      </button>

      <span
        className="
          flex h-full min-w-8 items-center justify-center
          text-[11px] font-medium text-[#4b5563]
        "
      >
        {quantity}
      </span>

      <button
        type="button"
        aria-label="زيادة الكمية"
        onClick={onIncrease}
        className="
          flex h-full w-8 items-center justify-center
          text-sm text-[#5f6b7a]
          transition-colors
          hover:bg-[#e9eff9]
        "
      >
        +
      </button>
    </div>
  )
}