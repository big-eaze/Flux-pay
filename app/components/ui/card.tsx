"use client"
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({
  children,
  className = "",
  hover = false,
}: CardProps) {
  return (
    <div
      className={`
        bg-[#14141f]
        border
        border-white/8
        rounded-3xl
        transition-all
        duration-300
        ${hover
          ? "hover:border-white/18 hover:bg-[#16161f]"
          : ""
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}