
import { StorageId } from "~/datasource/storages"
import ComponentItemTitleLayout from "../component/ComponentItemTitleLayout"
import StorageParamsDetail from "./StorageParamsDetail"
type StorageItemTitleProps = {
  storageId: StorageId
}

const StorageItemTitle = ({storageId}: StorageItemTitleProps) => {
  
    
  return  <ComponentItemTitleLayout 
    title = {`storage:${storageId}`}
    detail = {<StorageParamsDetail storageId={storageId}/>}
    />
}

export default StorageItemTitle