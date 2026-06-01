interface BadgeProps {
  label: string;
  variant?: "skill" | "tag";
}

const variants = {
  skill:
    "px-4 py-2 bg-gray-50 text-gray-700 text-sm font-medium rounded-xl border border-gray-100 hover:border-orange-200 hover:text-orange-600 hover:bg-orange-50 transition-colors shadow-sm",
  tag:
    "text-xs font-semibold text-orange-600 bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-100/50",
};

export function Badge({ label, variant = "skill" }: BadgeProps) {
  return <span className={variants[variant]}>{label}</span>;
}
