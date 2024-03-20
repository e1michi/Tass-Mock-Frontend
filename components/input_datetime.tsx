import Input from "./input";

export default function InputDatetime({...props}) {
  return (
    <Input
      type="datetime-local"
      {...props}
    />
  );
}
