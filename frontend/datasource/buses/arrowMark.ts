import { atom } from "jotai";
import { arrowsAtom } from "./arrow";

function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

// function calculateBearing(lat1: number, lon1: number, lat2: number, lon2: number): number {
//   const φ1 = toRadians(lat1);
//   const φ2 = toRadians(lat2);
//   const Δλ = toRadians(lon2 - lon1);

//   const y = Math.sin(Δλ) * Math.cos(φ2);
//   const x = Math.cos(φ1)  Math.sin(φ2) - Math.sin(φ1)  Math.cos(φ2) * Math.cos(Δλ);

//   let θ = Math.atan2(y, x);
//   θ = θ * (180 / Math.PI);
//   θ = (θ + 360) % 360;
//   return θ;
// }

const arrowsMarkAtom = atom((get) => {
  const arrows = get(arrowsAtom);

  return arrows.map((arrow) => {
    const x = (arrow.startX + arrow.endX) / 2;
    const y = (arrow.startY + arrow.endY) / 2;

    // const degrees = calculateBearing(
    //   arrow.startX,
    //   arrow.startY,
    //   arrow.endX,
    //   arrow.endY
    // );

    return {
      x,
      y,
      id: arrow.id,
      carriers: arrow.carriers,
      // degrees,
    };
  });
});

export default arrowsMarkAtom;
