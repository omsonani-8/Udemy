import clsx from "clsx";
import type { TextareaHTMLAttributes } from "react";
import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

export interface TextareaProps<TFormValues extends FieldValues>
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  register?: UseFormRegister<TFormValues>;
  error?: string;
  name?: Path<TFormValues>;
}

const Textarea = <TFormValues extends FieldValues>({
  label,
  name,
  className,
  error,
  onChange,
  register,
  ...props
}: TextareaProps<TFormValues>) => {
  return (
    <div className="w-full p-1 flex flex-col">
      {label && <label htmlFor={name}> {label} </label>}
      <textarea
        className={clsx(
          "border-[1px] border-blue-400 rounded-[6px] p-1 resize-none",
          className
        )}
        id={name}
        {...props}
        onChange={onChange}
        {...(register && name && register(name, { onChange }))}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Textarea;
