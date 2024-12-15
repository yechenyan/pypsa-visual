import { useAtomValue } from "jotai"
import ComponentDetail from "../component/ComponentDetail"
import { storeAtom, StoreId } from "~/datasource/stores"

type StoreParamsProps = {
  storeId: StoreId
}

const StoreParamsDetail = ({storeId}: StoreParamsProps) => {
  const store = useAtomValue(storeAtom(storeId))

  return <ComponentDetail data= {store}/>
}

export default StoreParamsDetail
