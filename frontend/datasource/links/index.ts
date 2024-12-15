import { atom } from "jotai";
import links from "../originData/links.json";
import { atomFamily } from "jotai/utils";
import { BusId } from "../buses";

export type LinkId = string;

export type LinkItemOrigin = {
  bus0: string; // e.g., "DE0 20"
  bus1: string; // e.g., "DE0 1"
  type: string; // e.g., ""
  carrier: string; // e.g., "DC"
  efficiency: number; // e.g., 0.9635351744
  active: boolean; // e.g., true
  build_year: number; // e.g., 2026
  lifetime: number | null; // e.g., null
  p_nom: number; // e.g., 0.0
  p_nom_mod: number; // e.g., 0.0
  p_nom_extendable: boolean; // e.g., true
  p_nom_min: number; // e.g., 0.0
  p_nom_max: number; // e.g., 20000.0
  p_set: number; // e.g., 0.0
  p_min_pu: number; // e.g., 0.0
  p_max_pu: number; // e.g., 1.0
  capital_cost: number; // e.g., 46417.8075973356
  marginal_cost: number; // e.g., 0.0106446076
  marginal_cost_quadratic: number; // e.g., 0.0
  stand_by_cost: number; // e.g., 0.0
  length: number; // e.g., 728.1726448487
  terrain_factor: number; // e.g., 1.0
  committable: boolean; // e.g., false
  start_up_cost: number; // e.g., 0.0
  shut_down_cost: number; // e.g., 0.0
  min_up_time: number; // e.g., 0
  min_down_time: number; // e.g., 0
  up_time_before: number; // e.g., 1
  down_time_before: number; // e.g., 0
  ramp_limit_up: number | null; // e.g., null
  ramp_limit_down: number | null; // e.g., null
  ramp_limit_start_up: number; // e.g., 1.0
  ramp_limit_shut_down: number; // e.g., 1.0
  p_nom_opt: number; // e.g., 0.001059003
  bus4: string; // e.g., ""
  efficiency4: number; // e.g., 1.0
  bus3: string; // e.g., ""
  efficiency3: number; // e.g., 1.0
  bus2: string; // e.g., ""
  efficiency2: number; // e.g., 1.0
  reversed: boolean; // e.g., false
  project_status: string; // e.g., "in_permitting"
  location: string | null; // e.g., null
  underwater_fraction: number; // e.g., 0.0
  underground: number; // e.g., 1.0
  under_construction: number; // e.g., 1.0
  voltage: number | null; // e.g., null
  length_original: number; // e.g., 728.1726448487
  tags: string; // e.g., "\"url\"=>\"https://tyndp2020-project-platform.azurewebsites.net/projectsheets/transmission/235\", \"tyndp2020_proj_id\"=>\"235\", \"tyndp2020_invest_id\"=>\"664\", \"tyndp_status\"=>\"in_permitting\""
  geometry: string; // e.g., "LINESTRING (9.24087500000001 53.906765, 9.12211621382025 49.0939516665424)"
  id: LinkId; // e.g., "TYNDP2020_1"
  location0: string; // e.g., "DE0 20"
  location1: string; // e.g., "DE0 1"
};

export type LinkOrigin = Record<LinkId, LinkItemOrigin>;

export const LinkOriginAtom = atom<LinkOrigin>(links as any);

export const linkAtom = atomFamily((linkId: LinkId) =>
  atom((get) => {
    const links = get(LinkOriginAtom);
    return links[linkId];
  })
);

export const linksByBus0IdAtom = atomFamily((bus0Id: BusId) =>
  atom((get) => {
    const linkMap = get(LinkOriginAtom);
    return Object.values(linkMap).filter((link) => link.bus0 === bus0Id);
  })
);

export const linksByBus1IdAtom = atomFamily((bus1Id: BusId) =>
  atom((get) => {
    const linkMap = get(LinkOriginAtom);
    return Object.values(linkMap).filter((link) => link.bus1 === bus1Id);
  })
);
