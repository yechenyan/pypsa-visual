import { useAtomValue } from "jotai"
import { currentSelectNodeIdAtom } from "~/datasource/current"
import Box from "@mui/material/Box"
import LocationList from "./componentLocation/LocationList"
import LocationItemTitle from "./componentLocation/LocationItemTitle"

const DetailLocation = () => {
  const currentNodeId = useAtomValue(currentSelectNodeIdAtom)
  const componentId = currentNodeId.split('$')[1]
  const componentType =currentNodeId.split('$')[0]
  
  if (componentType === 'location') {
    return <LocationItemTitle locationId={componentId} defaultShowChildren/>
  }

  return <Box>
    <LocationList />
  </Box>
}

export default DetailLocation