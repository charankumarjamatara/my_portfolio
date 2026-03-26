import type { LucideIcon } from "lucide-react";

interface IconBoxProps {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: { box: "w-12 h-12 rounded-xl", icon: "h-5 w-5" },
  md: { box: "w-14 h-14 rounded-2xl", icon: "h-7 w-7" },
  lg: { box: "w-16 h-16 rounded-2xl", icon: "h-7 w-7" },
};

export function IconBox({ icon: Icon, size = "md", className = "" }: IconBoxProps) {
  const s = sizeMap[size];
  return (
    <div
      className={`${s.box} bg-blue-50 text-blue-500 flex items-center justify-center flex-shrink-0 ${className}`}
    >
      <Icon className={s.icon} />
    </div>
  );
}
