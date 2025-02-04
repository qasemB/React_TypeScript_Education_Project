import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ComponentProps } from "react";

const AppSelect = ({ title, className, ...rest }: Omit<ComponentProps<"select">, "title"> & {title: string}) => {
  return (
    <div className="mb-5">
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {title}
      </label>
      <Select>
        <SelectTrigger className={`shadow-none h-10 ${className}`}>
          <SelectValue placeholder="انتخاب دسته بندی" {...rest} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">دسته 1</SelectItem>
          <SelectItem value="dark">دسته 2</SelectItem>
          <SelectItem value="system">دسته 3</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default AppSelect;
