import { Container, Title, Categories, Filters } from "components/shared";
import { SortPopUp } from "components/shared/SortPopUp";
import { Checkbox } from "components/ui";
import { cn } from "lib/utils";

export default function Home() {
  return (
    <div>
      <Container>
        <Title size="lg" className="font-extrabold mt-5" text=" Все пиццы"></Title>
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

      <Container className={cn("mt-9 flex gap-4")}>
        <Filters></Filters>

        <div className="w-4/5">swsws</div>
      </Container>
      <div style={{height:2000}}></div>
    </div>
  );
}
