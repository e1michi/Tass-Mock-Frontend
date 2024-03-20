import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  items: { label: string; url: string }[];
};

export default function Dropdown({ children, items }: Props) {
  return (
    <>
      <div className="relative group w-fit">
        <button className="inline-flex items-center shadow-sm hover:text-gray-400 disabled:pointer-events-none">
          {children}
          <svg className="w-4 h-4 text-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
        </button>
        <div id="dropdown_menu" className="hidden absolute z-10 top-3 left-4 w-40 bg-white shadow-md rounded-lg border mt-2 p-2 group-hover:block">
          {items.map(({ label, url }) => (
            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-gray-800 hover:bg-gray-100" href={url} key={label}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
