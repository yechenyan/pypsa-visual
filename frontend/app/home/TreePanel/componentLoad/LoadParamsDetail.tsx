import { useAtomValue } from "jotai"
import ComponentDetail from "../component/ComponentDetail"
import {loadAtom, LoadId } from "~/datasource/load"

type LoadParamsProps = {
  LoadId: LoadId
}

const LoadParamsDetail = ({LoadId}: LoadParamsProps) => {
  const Load = useAtomValue(loadAtom(LoadId))

  return <ComponentDetail data= {Load}/>
}

export default LoadParamsDetail
