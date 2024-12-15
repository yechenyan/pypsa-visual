import { atom } from "jotai";
import lines from "../originData/lines.json";
import { atomFamily } from "jotai/utils";
import { BusId } from "../buses";

export type LineId = string;

export type LineItemOrigin = {
  bus0: string; // e.g., "DE0 0"
  bus1: string; // e.g., "DE0 13"
  type: string; // e.g., "Al/St 240/40 4-bundle 380.0"
  x: number; // e.g., 22.7789775015
  r: number; // e.g., 2.7779240855
  g: number; // e.g., 0.0
  b: number; // e.g., 0.0038598276
  s_nom: number; // e.g., 5265.43
  s_nom_mod: number; // e.g., 0.0
  s_nom_extendable: boolean; // e.g., true
  s_nom_min: number; // e.g., 5265.43
  s_nom_max: number; // e.g., 25265.43
  s_max_pu: number; // e.g., 0.7
  capital_cost: number; // e.g., 12092.636686187
  active: boolean; // e.g., true
  build_year: number; // e.g., 2037
  lifetime: number | null; // e.g., null
  length: number; // e.g., 287.1236935588
  carrier: string; // e.g., "AC"
  terrain_factor: number; // e.g., 1.0
  num_parallel: number; // e.g., 3.1007725703
  v_ang_min: number | null; // e.g., null
  v_ang_max: number | null; // e.g., null
  sub_network: string; // e.g., ""
  x_pu: number; // e.g., 0.0
  r_pu: number; // e.g., 0.0
  g_pu: number; // e.g., 0.0
  b_pu: number; // e.g., 0.0
  x_pu_eff: number; // e.g., 0.0001577492
  r_pu_eff: number; // e.g., 0.0000192377
  s_nom_opt: number; // e.g., 5265.4303081308
  dc: number | null; // e.g., null
  i_nom: number; // e.g., 2.58
  v_nom: number; // e.g., 380.0
  id: LineId; // e.g., "0"
  location0: string; // e.g., "DE0 0"
  location1: string; // e.g., "DE0 13"
  location: string | null; // e.g., null
};

export type LineOrigin = Record<LineId, LineItemOrigin>;

export const LineOriginAtom = atom<LineOrigin>(lines);

export const lineAtom = atomFamily((lineId: LineId) =>
  atom((get) => {
    const lines = get(LineOriginAtom);
    return lines[lineId];
  })
);

export const linesByBus0IdAtom = atomFamily((bus0Id: BusId) =>
  atom((get) => {
    const lineMap = get(LineOriginAtom);
    return Object.values(lineMap).filter((line) => line.bus0 === bus0Id);
  })
);

export const linesByBus1IdAtom = atomFamily((bus1Id: BusId) =>
  atom((get) => {
    const lineMap = get(LineOriginAtom);
    return Object.values(lineMap).filter((line) => line.bus0 === bus1Id);
  })
);
