import { AnchorHTMLAttributes, ReactNode } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export default function Anchor({children, ...props}: Props) {
  const class_name = `
    text-blue-600 underline
    hover:no-underline`;

  return (
    <a
      className={class_name}
      {...props}
    >
      {children}
    </a>
  );
}
