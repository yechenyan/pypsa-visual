import { atom } from "jotai";
import { busesOriginAtom, BusId } from "../buses/index";
import { atomFamily } from "jotai/utils";

type LocationId = string;
type LocationItem = {
  id: LocationId;
  x: number;
  y: number;
  buses: BusId[];
};
type LocationsAtom = Record<string, LocationItem>;

export const locationsAtom = atom<LocationsAtom>((get) => {
  const busOrigin = get(busesOriginAtom);

  const buses = Object.values(busOrigin);

  return buses.reduce((acc: LocationsAtom, item) => {
    const key = item.location;
    if (!acc[key]) {
      acc[key] = {
        id: key,
        x: item.x,
        y: item.y,
        buses: [],
      };
    }
    acc[key].buses.push(item.id);
    return acc;
  }, {});
});

export const locationAtom = atomFamily((locationId: LocationId) =>
  atom((get) => {
    const locations = get(locationsAtom);
    return locations[locationId];
  })
);
