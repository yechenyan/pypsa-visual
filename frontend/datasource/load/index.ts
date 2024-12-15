import { atom } from "jotai";
import loads from "../originData/loads.json";
import { atomFamily } from "jotai/utils";
import { BusId } from "../buses";

export type LoadId = string;

export type LoadItemOrigin = {
  bus: string;
  carrier: string;
  type: string;
  p_set: number;
  q_set: number;
  sign: number;
  active: boolean;
  id: LoadId;
};

export type loadOrigin = Record<LoadId, LoadItemOrigin>;

export const loadOriginAtom = atom<loadOrigin>(loads as any);

export const loadAtom = atomFamily((loadId: LoadId) =>
  atom((get) => {
    const load = get(loadOriginAtom);
    return load[loadId];
  })
);

export const loadsByBusIdAtom = atomFamily((busId: BusId) =>
  atom((get) => {
    const loadMap = get(loadOriginAtom);
    return Object.values(loadMap).filter((load) => load.bus === busId);
  })
);
