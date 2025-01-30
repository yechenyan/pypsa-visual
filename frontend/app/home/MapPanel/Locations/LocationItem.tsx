import Box from "@mui/material/Box/Box"
import { useSetAtom } from "jotai"
import MyMapMarker from "~/components/MyMap/MyMapMarker"
import { currentSelectNodeIdAtom } from "~/datasource/current"

const LocationItem = ({location}: any) => {
  const setCurrentSelectNodeId = useSetAtom(currentSelectNodeIdAtom)
  const handleClick = () => {

    setCurrentSelectNodeId(`location$${location.id}`)
  }

 return <MyMapMarker x= {location.x} y = {location.y} onClick = {handleClick}>
  <Box sx= {{
    width: '18px', 
    height: '18px',
    border: '1px solid #999',
    fontSize: '10px',
    borderRadius: '18px',
    textAlign: 'center',  
    justifyContent: 'center',
    paddingLeft: '2px',
    alignItems: 'center',
    color: '#333',
    position: 'absolute',
    left: '-9px',
    top: '-9px',
    // background: '#fff'
  }}>
   {location.buses.length} {location.id}
  </Box>
 </MyMapMarker>
}

export default LocationItem