"use client"
import mapboxgl from 'mapbox-gl'

import { useEffect, useState } from "react"
import { ISceneConfig, Mapbox } from '@antv/l7';
import MyMap from '~/components/MyMap/MyMap';
import Locations from './Locations/index';
import Arrows from './Arrows/index';
import ArrowMarks from './Arrows/ArrowMarks';
// import 'mapbox-gl/';

(window as unknown as any).mapboxgl = mapboxgl


const MapPanel = () => {
  const [scene, setScene] = useState<ISceneConfig | undefined>()
  useEffect(() => {
    setScene({
      id: 'homeMap',
      map: new Mapbox({
        style: 'light', // 样式URL
        center: [5.19382669582967, 50.258134],
        pitch: 0,
        zoom: 4,
        token: 'pk.eyJ1IjoiY2hlbnlhbnllaHR3IiwiYSI6ImNtMnNleDN4ZjFrbDEybHNiYW1mYTVidWMifQ.dUX2v7rCVi_i4QnsYHbg2Q'
      }),
    })
  }, [])

 

  return <div>
   
    {scene && <MyMap scene = {scene} style={{}}>
     <Locations />
     <Arrows />
     <ArrowMarks />
     
    </MyMap>
      
    }
</div>


}

export default MapPanel