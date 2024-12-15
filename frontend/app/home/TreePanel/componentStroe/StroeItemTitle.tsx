
import { StoreId } from "~/datasource/stores"
import StoreParamsDetail from "./StroeParamsDetail"
import ComponentItemTitleLayout from "../component/ComponentItemTitleLayout"
type StoreItemTitleProps = {
  storeId: StoreId
}

const StoreItemTitle = ({storeId}: StoreItemTitleProps) => {
  
    
  return  <ComponentItemTitleLayout 
    title = {`store:${storeId}`}
    detail = {<StoreParamsDetail storeId={storeId}/>}
    />
}

export default StoreItemTitle