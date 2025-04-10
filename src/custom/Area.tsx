"use client";

import { FC, HTMLAttributes, ReactNode } from "react";

interface Area extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "cheks";
  className?: string;
  children?: ReactNode;
}

export const Area: FC<Area> = ({
  variant = "default",
  className,
  children,
}: Area) => {
  const baseStyles = "rounded-[4px] p-[8px] border-[2px] border-solid";

  const variantStyles = {
    default:
      " border-[#1F0C6F] hover:border-[#464061] shadow-[0px_0px_12px_0px_#F5F5F580] hover:shadow-none transition-all duration-300 bg-[#121212] ",
    cheks: "border-[#464061] bg-[#44424C]",
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
};
