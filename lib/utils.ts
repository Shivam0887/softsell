import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (className: string, ...inputs: ClassValue[]) => {
  return twMerge(className, clsx(inputs));
};
