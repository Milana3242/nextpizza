import { Container, Title } from "components/shared";
import { Categories } from "components/shared/Categories";

export default function Home() {
  return (
    <div>
      <Container>
        <Title size="lg" className="font-extrabold" text=" Все пиццы"></Title>
      </Container>

      <div>
        <Categories></Categories>
      </div>
    </div>
  );
}
