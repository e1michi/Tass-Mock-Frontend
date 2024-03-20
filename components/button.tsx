import { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  color: string;
};

export default function Button({children, color, ...props}: Props) {
  let class_name = `
    py-2 px-4
    inline-flex items-center
    text-white
    border border-transparent bg-blue-600 rounded-xl
    hover:bg-blue-700
    disabled:opacity-50 disabled:pointer-events-none`;

  switch (color) {
    case "gray":
      class_name = `
        py-2 px-4
        inline-flex items-center
        text-white
        border border-transparent bg-gray-500 rounded-xl
        hover:bg-gray-600
        disabled:opacity-50 disabled:pointer-events-none`;
      break;
    case "red":
      class_name = `
        py-2 px-4
        inline-flex items-center
        text-white
        border border-transparent bg-red-600 rounded-xl
        hover:bg-red-700
        disabled:opacity-50 disabled:pointer-events-none`;
      break;
    case "outlineblue":
      class_name = `
        py-2 px-4
        inline-flex items-center
        text-blue-600
        border border-blue-600 rounded-xl
        hover:border-blue-500 hover:text-blue-500
        disabled:opacity-50 disabled:pointer-events-none`;
      break;
  }

  return (
    <button
      className={class_name}
      {...props}
    >
      {children}
    </button>
  );
}
