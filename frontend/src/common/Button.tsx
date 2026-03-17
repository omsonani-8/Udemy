import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";
import LoadingSVG from '../assets/loading.svg';



interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?:boolean;
  icon?:string;
}


const Button = ({children,className,disabled,isLoading,icon,...props}:ButtonProps) => {

  return ( <button disabled={disabled} className={clsx("w-auto px-4   border-1 border-[#6D28D2] rounded-xl ",className,{
    'opacity-40 cursor-not-allowed': disabled }
    )}
    {...props}
    >
    {icon && (
        <img
          src={icon}
          alt="Loading..."
          className={clsx('w-5 h-4', { 'mr-2': !!children })}
        />
      )}
    {isLoading && (
        <img
          src={LoadingSVG}
          alt="Loading..."
          className="w-5 h-4 mr-2 animate-spin"
        />
      )}
      {children}
  </button>)
}


export default Button;