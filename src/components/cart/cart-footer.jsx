export function CartFooter({
  total,
  onViewCart,
  onCheckout,
}) {
  return (
    <footer
      className="
        mt-auto border-t border-[#efefef]
        bg-white px-5 py-4
      "
    >
      <button
        type="button"
        onClick={onViewCart}
        className="
          flex h-11 w-full items-center justify-center
          rounded-[10px] border border-primary
          bg-white text-lg font-medium text-primary
          transition-colors
          hover:bg-[#f5f8ff]
        "
      >
        عرض السلة
      </button>

      <button
        type="button"
        onClick={onCheckout}
        className="
          mt-3 flex h-11 w-full items-center justify-center
          rounded-[10px] bg-primary
          text-lg font-medium text-white
          transition-colors
          hover:bg-[#0948ae]
        "
      >
        الدفع
      </button>

      <p className="mt-2 text-center text-[11px] text-[#888]">
        الإجمالي: {total} جنيهًا
      </p>
    </footer>
  )
}