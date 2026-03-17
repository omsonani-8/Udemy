import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface FileInputProps<TFormValues extends FieldValues> {
  label?: string;
  name: Path<TFormValues>;
  register: UseFormRegister<TFormValues>;
  accept?: string;
  error?: string;
}

const FileInput = <TFormValues extends FieldValues>({
  label,
  name,
  register,
  accept,
  error,
}: FileInputProps<TFormValues>) => (
  <div className="flex flex-col w-full p-1">
    {label && (
      <label htmlFor={name} className="mb-1 text-sm font-medium text-gray-700">
        {label}
      </label>
    )}
    <input
      type="file"
      id={name}
      accept={accept}
      {...register(name)}
      className="block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4
                 file:rounded-md file:border-0 file:text-sm file:font-semibold
                 file:bg-purple-600 file:text-white
                 hover:file:bg-purple-700 focus:outline-none"
    />
    {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
  </div>
);

export default FileInput;
