
import * as React from "react";
import { FilterCheckbox, Title } from ".";
import { Input,RangeSlider } from "components/ui";

export interface IAppProps {}

export function Filters(props: IAppProps) {
  return (
    <div className="w-1/5">
      <Title text="Фильтрация" className="font-bold mb-7"></Title>

      <div>
        <FilterCheckbox text="Новинки" value="1"></FilterCheckbox>
        <FilterCheckbox text="Можно собирать" value="1"></FilterCheckbox>

      </div>

      <div className="mt-5 mb-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold text-base mb-2">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="100   ₽" min={0} max={100} defaultValue={0}></Input>
          <Input type="number" min={100} max={1000} placeholder="1000   ₽" ></Input>
        </div>
        <RangeSlider min={100} max={1000} step={50}></RangeSlider>
      </div>

      <div>
        <p className="font-bold text-base mb-2">Ингредиенты:</p>
        <FilterCheckbox text="Сырный соус" value="1"></FilterCheckbox>
        <FilterCheckbox text="Моцарелла" value="1"></FilterCheckbox>
        <FilterCheckbox text="Чеснок" value="1"></FilterCheckbox>
        <FilterCheckbox text="Солённые огурчики" value="1"></FilterCheckbox>
        <FilterCheckbox text="Красный лук" value="1"></FilterCheckbox>
        <FilterCheckbox text="Томаты" value="1"></FilterCheckbox>
        <br></br>
        <button className="text-orange-500">+ Показать всё</button>
      </div>

    </div>
  );
}
