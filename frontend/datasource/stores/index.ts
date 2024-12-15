import { atom } from "jotai";
import stores from "../originData/stores.json";
import { atomFamily } from "jotai/utils";
import { BusId } from "../buses";

export type StoreId = string;

export type StoreItemOrigin = {
  bus: string; // e.g., "co2 atmosphere"
  type: string; // e.g., ""
  carrier: string; // e.g., "co2"
  e_nom: number; // e.g., 0.0
  e_nom_mod: number; // e.g., 0.0
  e_nom_extendable: boolean; // e.g., true
  e_nom_min: number; // e.g., 0.0
  e_nom_max: number | null; // e.g., null
  e_min_pu: number; // e.g., -1.0
  e_max_pu: number; // e.g., 1.0
  e_initial: number; // e.g., 0.0
  e_initial_per_period: boolean; // e.g., false
  e_cyclic: boolean; // e.g., false
  e_cyclic_per_period: boolean; // e.g., true
  p_set: number; // e.g., 0.0
  q_set: number; // e.g., 0.0
  sign: number; // e.g., 1.0
  marginal_cost: number; // e.g., 0.0094474036
  marginal_cost_quadratic: number; // e.g., 0.0
  marginal_cost_storage: number; // e.g., 0.0
  capital_cost: number; // e.g., 0.0
  standing_loss: number; // e.g., 0.0
  active: boolean; // e.g., true
  build_year: number; // e.g., 0
  lifetime: number | null; // e.g., null
  e_nom_opt: number; // e.g., 15787854.8400246631
  location: string; // e.g., ""
  id: StoreId; // e.g., "co2 atmosphere"
};

export type StoreOrigin = Record<StoreId, StoreItemOrigin>;

export const StoreOriginAtom = atom<StoreOrigin>(stores);

export const storeAtom = atomFamily((storeId: StoreId) =>
  atom((get) => {
    const stores = get(StoreOriginAtom);
    return stores[storeId];
  })
);

export const storesByBusIdAtom = atomFamily((busId: BusId) =>
  atom((get) => {
    const storeMap = get(StoreOriginAtom);
    return Object.values(storeMap).filter((store) => store.bus === busId);
  })
);
