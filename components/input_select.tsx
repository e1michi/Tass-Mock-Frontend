type Props = {
  items: { label: string, value: string }[];
};

export default function InputSelect({ items, ...props }: Props) {
  const class_name = `
    py-2 px-4
    w-full
    border border-gray-200 rounded-lg
    disabled:bg-gray-100 disabled:pointer-events-none
    focus:border-blue-500 focus:ring-blue-500
  `;

  return (
    <select
      className={class_name}
      {...props}
    >
      {items.map(({ label, value }) => (
        <option value={value} key={value}>{label}</option>
      ))}
    </select>
  );
}
