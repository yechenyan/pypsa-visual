import { useAtomValue } from "jotai"
import ComponentDetail from "../component/ComponentDetail"
import { lineAtom, LineId } from "~/datasource/lines"

type LineParamsProps = {
  lineId: LineId
}

const LineParamsDetail = ({lineId}: LineParamsProps) => {
  const line = useAtomValue(lineAtom(lineId))

  return <ComponentDetail data= {line}/>
}

export default LineParamsDetail
