interface FormInputProps {
  icon: React.ReactNode;
  placeholder: string;
  type: string;
  required: boolean;
  errors: string[];
  name: string;
}

export default function FormInput({
  icon,
  placeholder,
  type,
  required,
  errors,
  name,
}: FormInputProps) {
  return (
    <div>
      <div className="relative">
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          className="pl-10 w-full outline-none ring-1 focus:ring-2 focus:ring-teal-200 ring-neutral-300 border-none"
        />
        {icon}
      </div>
      {errors.map((error, index) => (
        <span key={index} className="text-red-500">
          {error}
        </span>
      ))}
    </div>
  );
}
