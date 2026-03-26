interface BadgeProps {
  label: string;
  variant?: "skill" | "tag";
}

const variants = {
  skill:
    "px-4 py-2 bg-gray-50 text-gray-700 text-sm font-medium rounded-xl border border-gray-100 hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50 transition-colors shadow-sm",
  tag:
    "text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100/50",
};

export function Badge({ label, variant = "skill" }: BadgeProps) {
  return <span className={variants[variant]}>{label}</span>;
}
