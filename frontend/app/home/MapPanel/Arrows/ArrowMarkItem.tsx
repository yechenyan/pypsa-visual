import Box from "@mui/material/Box/Box"
import { useSetAtom } from "jotai"
import MyMapMarker from "~/components/MyMap/MyMapMarker"
import { currentSelectNodeIdAtom } from "~/datasource/current"

const ArrowMarksItem = ({location}: any) => {
  const setCurrentSelectNodeId = useSetAtom(currentSelectNodeIdAtom)
  const handleClick = () => {

    setCurrentSelectNodeId(`location$${location.id}`)
  }

 return <MyMapMarker x= {location.x} y = {location.y} onClick = {handleClick}>
  <Box sx= {{
   
    fontSize: '8px',
    // transform: `rotate(${location.degrees}deg)`,
    color: 'rgba(0, 0, 0,.5)',
    position: 'absolute',
    left: '-7px',
    top: '-7px',
  }}>
   {location.carriers}
  </Box>
 </MyMapMarker>
}

export default ArrowMarksItem