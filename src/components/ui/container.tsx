import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
};

export function Container({ children, className = "", as = "div" }: ContainerProps) {
  const Tag = as;
  return <Tag className={`mx-auto w-full max-w-6xl px-6 lg:px-8 ${className}`}>{children}</Tag>;
}

