import clsx from "clsx";
import type { InputHTMLAttributes } from "react";
import type { FieldValues, Path, UseFormRegister } from "react-hook-form";




export interface InputProps<TFormValues extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  register?: UseFormRegister<TFormValues>;
  error?: string;
  name?: Path<TFormValues>;
}


const Input = <TFormValues extends FieldValues>({
  label,
  name,
  className,
  error,
  onChange,
  register,
  ...props
}: InputProps<TFormValues>) => {

  return (
    <div className="w-full p-1 flex flex-col ">
      {
        label && <label htmlFor={name}> {label} </label>
      }
      <input type="text"
        className={clsx(
          " w-full border-[1px] border-[#6D28D2] rounded-[6px] p-1",
          className
        )
        }
        id={name}
        {...props}
        onChange={onChange}
        {...(register && name && register(name, { onChange }))}
      />
      {error && <p className="text-red-500">{error}</p>}

    </div>
  )
}

export default Input;