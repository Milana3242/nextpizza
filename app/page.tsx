import { Container, Title, Categories, Filters } from "components/shared";
import { ProductCard } from "components/shared/ProductCard";
import { ProductCardGroup } from "components/shared/ProductCardGroup";
import { SortPopUp } from "components/shared/SortPopUp";
import { Checkbox } from "components/ui";
import { cn } from "lib/utils";

export default function Home() {
  const pizzas = [
    {
      imageUrl:
        "https://media.dodostatic.net/image/r:584x584/11ee7d610d2925109ab2e1c92cc5383c.avif",
      name: "Pizza",
      price: 350,
      id: 1,
    },
    {
      imageUrl:
        "https://media.dodostatic.net/image/r:584x584/11ee7d610d2925109ab2e1c92cc5383c.avif",
      name: "Pizza",
      price: 350,
      id: 2,
    },
    {
      imageUrl:
        "https://media.dodostatic.net/image/r:584x584/11ee7d610d2925109ab2e1c92cc5383c.avif",
      name: "Pizza",
      price: 350,
      id: 3,
    },
    {
      imageUrl:
        "https://media.dodostatic.net/image/r:584x584/11ee7d610d2925109ab2e1c92cc5383c.avif",
      name: "Pizza",
      price: 350,
      id: 4,
    },
  ];
  return (
    <div>
      <Container>
        <Title
          size="lg"
          className="font-extrabold mt-5"
          text=" Все пиццы"></Title>
      </Container>

      <div
        className={cn(
          "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10"
        )}>
        <Container>
          <Categories />
          <SortPopUp />
        </Container>
      </div>

      <Container className={cn("mt-9 flex gap-16")}>
        <Filters></Filters>

        <div>
          <ProductCardGroup
            items={pizzas}
            title="Пиццы"
            categoryId={1}></ProductCardGroup>
          <ProductCardGroup
            items={pizzas}
            title="Комбо"
            categoryId={2}></ProductCardGroup>
        </div>
      </Container>
    </div>
  );
}
