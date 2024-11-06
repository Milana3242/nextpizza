import * as React from 'react';
import { FilterCheckbox } from '.';
import { Input } from '../ui';

type Item = {
  text: string;
  value: string;
  endAdornment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
};

export interface IAppProps {
  title: string;
  items: Item[];
  defaultItem: Item[];
  limit?: number;
  searchInputPlaceHolder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string;
  className?: string;
}

export function CheckBoxFilterGroup({
  title,
  items,
  defaultItem,
  limit,
  searchInputPlaceHolder,
  onChange,
  defaultValue,
  className,
}: IAppProps) {
  return (
    <div className="mb-5">
      <p>{title}:</p>
      <div>
        {defaultItem.map((item) => {
          return <FilterCheckbox text={item.text} value={item.value} />;
        })}
      </div>
    </div>
  );
}
