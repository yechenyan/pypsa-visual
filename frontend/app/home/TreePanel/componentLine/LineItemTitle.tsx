
import { lineAtom, LineId } from "~/datasource/lines"
import LineParamsDetail from "./LineParamsDetail"
import ComponentItemTitleLayout from "../component/ComponentItemTitleLayout"
import { useAtomValue } from "jotai"

export enum LineDirect {
  IN ='IN',
  OUT =  'OUT'

}
type LineItemTitleProps = {
  lineId: LineId
  direct: LineDirect
}

const LineItemTitle = ({lineId, direct}: LineItemTitleProps) => {
  let directText = ''
  const line = useAtomValue(lineAtom(lineId)) 

 if (line.location) {
     if (direct === LineDirect.IN) {
       directText = `(➡️)`
     } else if (direct === LineDirect.OUT) {
       directText = `(⬅️)`
     }
   } else {
     if (direct === LineDirect.IN) {
       directText = `(${line.location1}➡️)`
     } else if (direct === LineDirect.OUT) {
       directText = `(${line.location1}⬅️)`
     }
   }

  return  <ComponentItemTitleLayout 
    title = {`line${directText}:${lineId}`}
    detail = {<LineParamsDetail lineId={lineId}/>}
    />
}

export default LineItemTitle