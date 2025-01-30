import { atom } from "jotai";
import { arrowsAtom } from "./arrow";

// function toRadians(degrees) {
//   return (degrees * Math.PI) / 180;
// }

// function toDegrees(radians) {
//   return (radians * 180) / Math.PI;
// }

// function calculateBearing(lat1, lon1, lat2, lon2) {
//   const φ1 = toRadians(lat1);
//   const φ2 = toRadians(lat2);
//   const λ1 = toRadians(lon1);
//   const λ2 = toRadians(lon2);

//   const y = Math.sin(λ2 - λ1) * Math.cos(φ2);
//   const x =
//     Math.cos(φ1) * Math.sin(φ2) -
//     Math.sin(φ1) * Math.cos(φ2) * Math.cos(λ2 - λ1);
//   const θ = Math.atan2(y, x);

//   const bearing = (toDegrees(θ) + 360) % 360;

//   return bearing;
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
