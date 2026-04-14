import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  additionalClasses?: string;
}

export default function Button({
  children,
  additionalClasses = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`w-full bg-black text-white rounded cursor-pointer hover:bg-gray-800 transition-colors duration-200 ${additionalClasses}`}
      {...props}
    >
      {children}
    </button>
  );
}
