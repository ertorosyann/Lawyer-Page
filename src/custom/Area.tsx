"use client";

import { FC, HTMLAttributes, ReactNode } from "react";

interface Area extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "lower__shadow";
  className?: string;
  children?: ReactNode;
}

export const Area: FC<Area> = ({
  variant = "default",
  className,
  children,
}: Area) => {
  const baseStyles = "rounded-[14px] p-2 border-[2px] border-solid";

  const variantStyles = {
    default:
      "border-[#1F0C6F] hover:border-[#464061] shadow-[0_0_12px_0_#F5F5F580] hover:shadow-none transition-all duration-300 bg-[#121212] ",
    lower__shadow:
      "border-[#1F0C6F] hover:border-[#464061] shadow-[0_0_6px_0_#F5F5F580] hover:shadow-none transition-all duration-300 bg-[#121212] ",
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
};
