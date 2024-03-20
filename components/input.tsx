export default function Input({...props}) {
  const class_name = `
    w-full
    border border-gray-300 rounded-lg
    disabled:bg-gray-100 disabled:pointer-events-none
    focus:border-blue-500 focus:ring-blue-500
  `;

  return (
    <input
      className={class_name}
      {...props}
    />
  );
}
