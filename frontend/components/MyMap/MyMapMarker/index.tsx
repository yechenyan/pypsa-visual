import { Marker } from "@antv/l7";
import { useAtomValue } from "jotai";
import { MouseEventHandler, ReactNode, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { myMapSceneAtoms, myMapSceneIdAtom } from "../MyMap";
import Box from "@mui/material/Box/Box";


type MyMapMarkerProps = {
  x: number,
  y: number,
  children?: ReactNode,
  onClick?: MouseEventHandler<HTMLDivElement>,
}
const MyMapMarker = ({x, y,onClick, children}: MyMapMarkerProps) => {
  const mapId = useAtomValue(myMapSceneIdAtom)
  const scene = useAtomValue(myMapSceneAtoms(mapId))
  const el = useRef(document.createElement('div'));
  useEffect(() => {
    const currentEl = el.current;
    const marker = new Marker({ element: currentEl }).setLnglat({
      lng: x,
      lat: y,
    });
    scene?.addMarker(marker);
    return () => {
      marker.remove()
    }
  }, [scene, x, y])

  return ReactDOM.createPortal(
    <Box
      sx = {{
        position: 'relative',
      }}
     
      onClick = {onClick}
    >
      {children}
    </Box>,
    el.current
  );
};

export default MyMapMarker