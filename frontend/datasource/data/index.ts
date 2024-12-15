import { atomFamily } from "jotai/utils";
import { busesOriginAtom } from "../buses";
import { atom } from "jotai";

type DataItemAtom = {
  component: "bus";
  id: string;
};

export const dataItemAtom = atomFamily(({ component, id }: DataItemAtom) =>
  atom((get) => {
    if (component === "bus") {
      const buse = get(busesOriginAtom);
      return buse[id];
    }

    return null;
  })
);
