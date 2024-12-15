import Box from "@mui/material/Box/Box"
import { useAtomValue } from "jotai"
import { locationsAtom } from "~/datasource/locations"
import LocationItemTitle from "./LocationItemTitle"

const LocationList = () => {
  const locationDict = useAtomValue(locationsAtom)
  const locations = Object.values(locationDict)

  return <Box>
    {locations.map(location => <LocationItemTitle locationId= {location.id} key = {location.id}/>)}
  </Box>
}

export default LocationList