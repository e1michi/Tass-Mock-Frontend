import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { ReactNode } from "react";

const items = [
  { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
]

type Props = {
  children: ReactNode;
  items: { label: string; url: string }[];
};

export default function Pagination() {
  return (
    <div className="flex justify-between items-center gap-x-4">
      <div className='inline-flex'>
        1 - 10 / 97件
      </div>
      <div>
        <nav className="isolate inline-flex -space-x-px">
          <a
            href="#"
            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-200"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 text-white bg-blue-600"
          >
            1
          </a>
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 text-gray-800 ring-1 ring-inset ring-gray-200"
          >
            2
          </a>
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 text-gray-800 ring-1 ring-inset ring-gray-200"
          >
            3
          </a>
          <span
            className="relative inline-flex items-center px-4 py-2 text-gray-800 ring-1 ring-inset ring-gray-200"
          >
            ...
          </span>
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 text-gray-800 ring-1 ring-inset ring-gray-200"
          >
            8
          </a>
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 text-gray-800 ring-1 ring-inset ring-gray-200"
          >
            9
          </a>
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 text-gray-800 ring-1 ring-inset ring-gray-200"
          >
            10
          </a>
          <a
            href="#"
            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-200"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </a>
        </nav>
      </div>
    </div>
  );
}
