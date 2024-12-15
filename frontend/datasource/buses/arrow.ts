import { atom } from "jotai";
import { LineOriginAtom } from "../lines";
import { LinkOriginAtom } from "../links";
import { busAtom } from ".";

enum ArrowType {
  LINE = "LINE",
  LINK = "LINK",
}
type ArrowItem = {
  startLocation: string;
  endLocation: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  carriers: [];
  type: ArrowType;
  id: string;
};

export const arrowsAtom = atom<ArrowItem[]>((get) => {
  const arrowDict: Record<
    string,
    ArrowItem & { carriers: Record<string, number> }
  > = {};
  const lineDict = get(LineOriginAtom);
  const linkDick = get(LinkOriginAtom);
  const lines = Object.values(lineDict);
  const links = Object.values(linkDick);

  for (const line of lines) {
    if (line.location) {
      continue;
    }

    if (line.location0 === "EU" || line.location1 === "EU") {
      continue;
    }

    const id = `${line.location0}-${line.location1}`;
    if (!arrowDict[id]) {
      const bus0 = get(busAtom(line.bus0));
      const bus1 = get(busAtom(line.bus1));

      arrowDict[id] = {
        startLocation: line.location0,
        endLocation: line.location1,
        startX: bus0.x,
        startY: bus0.y,
        endX: bus1.x,
        endY: bus1.y,
        carriers: {} as any,
        id: id,
        type: ArrowType.LINE,
      };
    }

    arrowDict[id].carriers[line.carrier] = 1;
  }

  for (const line of links) {
    const id = `${line.location0}-${line.location1}`;
    if (line.location) {
      continue;
    }

    if (line.location0 === "EU" || line.location1 === "EU") {
      continue;
    }

    if (!arrowDict[id]) {
      const bus0 = get(busAtom(line.bus0));
      const bus1 = get(busAtom(line.bus1));

      arrowDict[id] = {
        startLocation: line.location0,
        endLocation: line.location1,
        startX: bus0.x,
        startY: bus0.y,
        endX: bus1.x,
        endY: bus1.y,
        carriers: {} as any,
        id: id,
        type: ArrowType.LINK,
      };
    }
    arrowDict[id].carriers[line.carrier] = 1;
  }

  const arrows = Object.values(arrowDict).map((arrow) => {
    return {
      ...arrow,
      carriers: Object.keys(arrow.carriers),
    };
  });

  return arrows as ArrowItem[];
});
