import {
  Dialog,
  DialogContent, DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import type { PokemonType } from "../types";
import { PokemonDetails } from "./PokemonDetails";
import { Tag } from "./Tag";

type CardProps = {
  name: string;
  order: number;
  imgUrl: string;
  types: {
    type: {
      name: PokemonType;
    };
  }[];
} & React.HTMLAttributes<HTMLDivElement>;

export function Card({ name, imgUrl, order, types, ...props }: CardProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <div
          {...props}
          className="w-[244px] h-[264px] card flex flex-col items-center justify-center gap-1 p-4"
        >
          <img className="w-[128px] h-[128px]" src={imgUrl} alt={name} />
          <p className="font-light text-xxs text-brand-secondary">
            Nº {order.toString().padStart(4, "0")}
          </p>
          <h1 className="font-bold text-xs text-brand-primary capitalize">
            {name}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {types.map((item, index) => (
              <Tag key={index} type={item.type.name} />
            ))}
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="w-screen">
        <DialogHeader>
          <DialogTitle className="font-bold text-4xl text-brand-primary text-center">Detalhes</DialogTitle>
        </DialogHeader>
        <PokemonDetails />
      </DialogContent>
    </Dialog>
  );
}
