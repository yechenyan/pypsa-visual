import { atom } from "jotai";
import buses from "../originData/buses.json";
import { atomFamily } from "jotai/utils";

export type BusId = string;

export type BusItemOrigin = {
  v_nom: number;
  type: string;
  x: number;
  y: number;
  carrier: string;
  unit: string;
  v_mag_pu_set: number;
  v_mag_pu_min: number;
  v_mag_pu_max: number | null;
  control: string;
  generator: string;
  sub_network: string;
  country: string;
  location: string;
  substation_lv: any; // Assuming null might be replaced with other types later
  substation_off: any; // Assuming null might be replaced with other types later
  id: string;
};

export type BusOrigin = Record<string, BusItemOrigin>;

export const busesOriginAtom = atom<BusOrigin>(buses);

export const busAtom = atomFamily((busId: BusId) =>
  atom((get) => {
    const buses = get(busesOriginAtom);
    return buses[busId];
  })
);

// export const bustMixAtom = atomFamily((busId: BusId) =>
//   atom((get) => {
//     const buses = get(busesOriginAtom);
//     const generators = get(GeneratorsOriginAtom);
//     const currentGenerators = generators.filter(
//       (generator) => generator.bus === busId
//     );
//   })
// );

export const busesByLocationIdAtom = atomFamily((locationId: BusId) =>
  atom((get) => {
    const busDict = get(busesOriginAtom);
    const buses = Object.values(busDict);

    return Object.values(buses).filter((bus) => bus.location === locationId);
  })
);
