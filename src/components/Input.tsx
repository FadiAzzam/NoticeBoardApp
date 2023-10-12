import { InputHTMLAttributes, forwardRef } from "react";
import cn from "classnames";

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...rest }, ref) => {
  return (
    <input
      {...rest}
      ref={ref}
      className={cn(
        "w-full px-5 py-3 bg-transparent border outline-none border-zinc-50 shadow-xl rounded-lg placeholder:text-zinc-300 focus:border-blue-300",
        className
      )}
    />
  );
});
