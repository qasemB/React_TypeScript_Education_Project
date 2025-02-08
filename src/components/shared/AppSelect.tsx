import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ComponentProps } from "react";

type AppSelectType = Omit<ComponentProps<"select">, "title" | "onChange"> & {
  title: string;
  onChange: (val: string) => void;
  options: { value: string; title: string }[];
};

const AppSelect = ({
  title,
  className,
  onChange,
  options,
  ...rest
}: AppSelectType) => {
  return (
    <div className="mb-5">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {title}
      </label>
      <Select onValueChange={(val) => onChange(val)}>
        <SelectTrigger className={`shadow-none h-10 ${className}`}>
          <SelectValue placeholder={title} {...rest} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option, i) => (
            <SelectItem key={option.value + i} value={option.value}>
              {option.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default AppSelect;
