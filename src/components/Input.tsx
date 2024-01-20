type InputProps = {
  label: string;
  id: string;
  type: "text" | "number";
};

export default function Input({ label, id, type }: InputProps) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} />
    </p>
  );
}
