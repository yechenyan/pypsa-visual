import { LineLayer } from "@antv/l7"
import { useAtomValue } from "jotai"
import { useEffect, useRef } from "react"
import { myMapSceneAtoms, myMapSceneIdAtom } from "~/components/MyMap/MyMap"
import { arrowsAtom } from "~/datasource/buses/arrow"

const Arrows = () => {
  const arrows = useAtomValue(arrowsAtom)
  const mapId = useAtomValue(myMapSceneIdAtom)

  const scene= useAtomValue(myMapSceneAtoms(mapId))
  const layerRef = useRef<any>()
    
  useEffect(() => {
    if (layerRef.current && scene) { 
      scene.removeLayer(layerRef.current)
    }

    layerRef.current = new LineLayer({
      zIndex: 0,
    })
    .source(arrows, {parser: {
      type: 'json',
      x: 'startX',
      y: 'startY',
      x1: 'endX',
      y1: 'endY',
    }})
    .scale('count', {
      type: 'quantile',
    })
    .size(1)
    .shape('flowline')
    .color('#000')

    .style({
      opacity: 1,
      gapWidth: 0,
      offsets: [10, 10],
      // strokeWidth: 1,
      // strokeOpacity: 1,
      // stroke: '#000'
    })

    if (scene) {
      scene.addLayer(layerRef.current)
    }
    
  }, [scene, arrows])
  return null
}
export default Arrows