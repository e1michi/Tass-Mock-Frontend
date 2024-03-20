type Props = {
  items: { label: string, key: string }[];
};

export default function InputCheckbox({ items, ...props }: Props) {
  const class_name = `
    border border-gray-100 rounded
    disabled:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none
  `;

  return (
    <div className="inline-flex items-center gap-x-6">
      {items.map(({ label, key }) => (
        <div className="inline-flex items-center" key={label}>
          <input
            type="checkbox"
            id={key}
            className={class_name}
            key={label}
            {...props}
          />
          <span className="pl-2">{label}</span>
        </div>
      ))}
    </div>
  );
}
