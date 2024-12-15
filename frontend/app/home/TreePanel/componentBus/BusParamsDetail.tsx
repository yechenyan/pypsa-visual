import { useAtomValue } from "jotai"
import { busAtom, BusId } from "~/datasource/buses"
import ComponentDetail from "../component/ComponentDetail"

type BusParamsDetailProps = {
  busId: BusId
}

const BusParamsDetail = ({busId}: BusParamsDetailProps) => {
  const bus = useAtomValue(busAtom(busId))

  return <ComponentDetail data= {bus}/>
}

export default BusParamsDetail
