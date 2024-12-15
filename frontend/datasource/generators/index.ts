import { atom } from "jotai";
import generators from "../originData/generators.json";
import { atomFamily } from "jotai/utils";
import { BusId } from "../buses";

export type GeneratorId = string;

export type GeneratorItemOrigin = {
  bus: string;
  control: string;
  type: string;
  p_nom: number;
  p_nom_mod: number;
  p_nom_extendable: boolean;
  p_nom_min: number;
  p_nom_max: number | null;
  p_min_pu: number;
  p_max_pu: number;
  p_set: number;
  e_sum_min: number | null;
  e_sum_max: number | null;
  q_set: number;
  sign: number;
  carrier: string;
  marginal_cost: number;
  marginal_cost_quadratic: number;
  active: boolean;
  build_year: number;
  lifetime: number | null;
  capital_cost: number;
  efficiency: number;
  committable: boolean;
  start_up_cost: number;
  shut_down_cost: number;
  stand_by_cost: number;
  min_up_time: number;
  min_down_time: number;
  up_time_before: number;
  down_time_before: number;
  ramp_limit_up: number | null;
  ramp_limit_down: number | null;
  ramp_limit_start_up: number;
  ramp_limit_shut_down: number;
  weight: number;
  p_nom_opt: number;
  id: GeneratorId;
};

export type GeneratorOrigin = Record<GeneratorId, GeneratorItemOrigin>;

export const GeneratorOriginAtom = atom<GeneratorOrigin>(generators);

export const generatorAtom = atomFamily((generatorId: GeneratorId) =>
  atom((get) => {
    const generators = get(GeneratorOriginAtom);
    return generators[generatorId];
  })
);

export const generatorsByBusIdAtom = atomFamily((busId: BusId) =>
  atom((get) => {
    const generatorMap = get(GeneratorOriginAtom);
    return Object.values(generatorMap).filter(
      (generator) => generator.bus === busId
    );
  })
);
