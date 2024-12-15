import { useAtomValue } from "jotai"
import ComponentDetail from "../component/ComponentDetail"
import { storageAtom, StorageId } from "~/datasource/storages"

type StorageParamsProps = {
  storageId: StorageId
}

const StorageParamsDetail = ({storageId}: StorageParamsProps) => {
  const storage = useAtomValue(storageAtom(storageId))

  return <ComponentDetail data= {storage}/>
}

export default StorageParamsDetail
