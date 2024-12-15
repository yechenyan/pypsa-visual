import Box from "@mui/material/Box/Box"
import { useAtomValue } from "jotai"
import { busesByLocationIdAtom } from "~/datasource/buses"
import BusItemTitle from "../componentBus/BusItemTitle"

type LocationChildrenProps = {
  locationId: string
}
const LocationChildren = ({locationId}: LocationChildrenProps) => {

  const buses = useAtomValue(busesByLocationIdAtom(locationId))

  return <Box>
    {buses.map(bus => <BusItemTitle busId = {bus.id} key = {bus.id}/>)}
  </Box>
}

export default LocationChildren