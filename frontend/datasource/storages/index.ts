import { atom } from "jotai";
import storages from "../originData/storages.json";
import { atomFamily } from "jotai/utils";
import { BusId } from "../buses";

export type StorageId = string;

export type StorageItemOrigin = {
  bus: string; // e.g., "DE0 1"
  control: string; // e.g., "PQ"
  type: string; // e.g., ""
  p_nom: number; // e.g., 90.0
  p_nom_mod: number; // e.g., 0.0
  p_nom_extendable: boolean; // e.g., false
  p_nom_min: number; // e.g., 0.0
  p_nom_max: number | null; // e.g., null
  p_min_pu: number; // e.g., -1.0
  p_max_pu: number; // e.g., 1.0
  p_set: number; // e.g., 0.0
  q_set: number; // e.g., 0.0
  sign: number; // e.g., 1.0
  carrier: string; // e.g., "PHS"
  spill_cost: number; // e.g., 0.0
  marginal_cost: number; // e.g., 0.0103929384
  marginal_cost_quadratic: number; // e.g., 0.0
  marginal_cost_storage: number; // e.g., 0.0
  capital_cost: number; // e.g., 182698.7345918511
  active: boolean; // e.g., true
  build_year: number; // e.g., 0
  lifetime: number | null; // e.g., null
  state_of_charge_initial: number; // e.g., 0.0
  state_of_charge_initial_per_period: boolean; // e.g., false
  state_of_charge_set: number | null; // e.g., null
  cyclic_state_of_charge: boolean; // e.g., true
  cyclic_state_of_charge_per_period: boolean; // e.g., true
  max_hours: number; // e.g., 6.2888888889
  efficiency_store: number; // e.g., 0.8660254038
  efficiency_dispatch: number; // e.g., 0.8660254038
  standing_loss: number; // e.g., 0.0
  inflow: number; // e.g., 0.0
  p_nom_opt: number; // e.g., 90.0
  id: StorageId; // e.g., "DE0 1 PHS"
};

export type StorageOrigin = Record<StorageId, StorageItemOrigin>;

export const StorageOriginAtom = atom<StorageOrigin>(storages);

export const storageAtom = atomFamily((storageId: StorageId) =>
  atom((get) => {
    const storages = get(StorageOriginAtom);
    return storages[storageId];
  })
);

export const storagesByBusIdAtom = atomFamily((busId: BusId) =>
  atom((get) => {
    const storageMap = get(StorageOriginAtom);
    return Object.values(storageMap).filter((storage) => storage.bus === busId);
  })
);
