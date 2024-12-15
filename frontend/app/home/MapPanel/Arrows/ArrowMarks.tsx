import { useAtomValue } from "jotai"
import ArrowMarksItem from "./ArrowMarkItem"
import arrowsMarkAtom from "~/datasource/buses/arrowMark"

const ArrowMarks = () => {
  const locations = useAtomValue(arrowsMarkAtom)
  const nodes = Object.values(locations)
  return <>{
    nodes.map(node => <ArrowMarksItem location= {node} key = {node.id}/>)
  }</>
}

export default ArrowMarks