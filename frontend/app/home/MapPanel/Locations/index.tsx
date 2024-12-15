import { useAtomValue } from "jotai"
import LocationItem from "./LocationItem"
import { locationsAtom } from "~/datasource/locations"

const Locations = () => {
  const locations = useAtomValue(locationsAtom)
  const nodes = Object.values(locations)
  return <>{
    nodes.map(node => <LocationItem location= {node} key = {node.id}/>)
  }</>
}

export default Locations