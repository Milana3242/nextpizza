import * as React from "react";
import { Container } from "./Container";
import { cn } from "lib/utils";
import { Button } from "../ui";
export interface IAppProps {}
import Image from "next/image";
import logo from "app/img/logo.png";
import lupa from "app/img/lupa.png";
import user from "app/img/user.png";
import cart from "app/img/cart.png";

export function Header(props: IAppProps) {
  return (
    <div>
      <header className={cn("border border-b py-11 px-16")}>
        <Container className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image
              src={logo}
              width={35}
              height={35}
              alt="logo"
              className=" "></Image>
            {/* <img src="app/logo192.png"  alt="" /> */}
            <div>
              <h5 className="font-bold text-2xl">NEXT PIZZA</h5>
              <div className="font-normal text-gray-500">
                вкусней уже некуда
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Image src={lupa} width={16} height={16} alt="lupa"></Image>
            <input type="text" placeholder="Поиск пицц..." />
          </div>

          <div className="flex item-center">
            <Button variant={"outline"} className="mr-2">
              <Image src={user} width={10} alt="user" className="mr-2"></Image> <div>Войти</div>
            </Button>
            <Button variant={'outline'} className="bg-orange-500">
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0  ">
                <b className="text-white">520p</b>
                <span className="text-white">|</span>
                <div>
                  <Image src={cart} width={14} alt="user"></Image>
                </div>
                <b className="text-white">2</b>
              </div>
            </Button>
          </div>
        </Container>
      </header>
    </div>
  );
}
