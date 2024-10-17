import * as React from "react";
import { Container } from "./Container";
import { cn } from "@/lib/utils";
export interface IAppProps {}

export function Header(props: IAppProps) {
  return (
    <div>
      <header className={cn("border border-b")}>
        <Container>

          <div>
            <img src="logo.png" alt="" />
            <div className=""><h5>NEXT PIZZA</h5><div>вкусней уже некуда</div></div>
          </div>
        </Container>
      </header>
    </div>
  );
}
