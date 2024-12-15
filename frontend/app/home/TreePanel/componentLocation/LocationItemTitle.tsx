import Box from "@mui/material/Box/Box"
import { useState } from "react"
import MyTextButton from "~/components/MyButton/MyTextButton"
import LocationChildren from "./LocationChildren"
import GridViewIcon from '@mui/icons-material/GridView';


type LocationItemTitleProps = {
  locationId: string
  defaultShowChildren?: boolean
}

const LocationItemTitle = ({locationId, defaultShowChildren}: LocationItemTitleProps) => {
   
    const [showChildren, setShowChildren] = useState(defaultShowChildren)
  
    const toggleBusChildren = () => {
      setShowChildren(detail => !detail)
    }
  
  
    return <Box sx= {{fontSize: '12px', marginBottom: '8px'}}>
      <Box sx= {{display: 'flex', alignItems: 'center'}}>
        Location: {locationId}
        <MyTextButton onClick = {toggleBusChildren}><GridViewIcon sx={{fontSize: 12}}/></MyTextButton>
      </Box>
  
      <Box sx= {{
        paddingLeft: 2
      }}>
      {showChildren && <LocationChildren locationId = {locationId} />}
      </Box>
    </Box>
}

export default LocationItemTitle