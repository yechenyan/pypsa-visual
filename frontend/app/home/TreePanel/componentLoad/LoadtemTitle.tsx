import { LoadId } from "~/datasource/load"
import LoadParamsDetail from "./LoadParamsDetail"

import ComponentItemTitleLayout from "../component/ComponentItemTitleLayout"
type LoadItemTitleProps = {
  loadId: LoadId
}

const LoadItemTitle = ({loadId}: LoadItemTitleProps) => {
  
    
  return  <ComponentItemTitleLayout 
    title = {`load:${loadId}`}
    detail = {<LoadParamsDetail LoadId={loadId}/>}
    />
}

export default LoadItemTitle