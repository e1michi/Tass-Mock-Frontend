type Props = {
  items: { label: string, value: string }[];
};

export default function InputFile({ ...props }: Props) {
  const class_name = `
    py-1 px-4
    w-full
    border border-gray-200 rounded-lg
    file:py-1.5 file:rounded file:border-0 file:text-gray-800
    disabled:bg-gray-100
  `;

  return (
    <input
      type="file"
      className={class_name}
      {...props}
    />
  );
}
