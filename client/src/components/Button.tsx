import {
  type DetailedHTMLProps,
  type ButtonHTMLAttributes,
  forwardRef,
} from "react";

const Button = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>(({ className, children, ...rest }, ref) => {
  return (
    <button
      className={` border-2 border-gray-900 bg-blue-600 rounded text-white font-bold hover:bg-blue-500 focus:bg-blue-400 transition-colors disabled:bg-gray-500 p-2 w-full  ${className}`}
      {...rest}
      ref={ref}
    >
      {children}
    </button>
  );
});

export default Button;
