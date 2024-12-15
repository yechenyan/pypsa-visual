import { useAtomValue } from "jotai"
import { BusId } from "~/datasource/buses"
import { generatorsByBusIdAtom } from "~/datasource/generators"
import GeneratorItemTitle from "../componentGenerator/GeneratorItemTitle"
import Box from "@mui/material/Box/Box"
import { loadsByBusIdAtom } from "~/datasource/load"
import LoadItemTitle from "../componentLoad/LoadtemTitle"
import StoreItemTitle from "../componentStroe/StroeItemTitle"
import StorageItemTitle from "../componentStorage/StorageItemTitle"
import { storagesByBusIdAtom } from "~/datasource/storages"
import { storesByBusIdAtom } from "~/datasource/stores"
import { linksByBus0IdAtom, linksByBus1IdAtom } from "~/datasource/links"
import LinkItemTitle, { LinkDirect } from "../componentLink/LinkItemTitle"
import { linesByBus0IdAtom, linesByBus1IdAtom } from "~/datasource/lines"
import LineItemTitle, { LineDirect } from "../componentLine/LineItemTitle"

type BusChildren = {
  busId: BusId
}
const BusChildren = ({busId}: BusChildren) => {
  const generators = useAtomValue(generatorsByBusIdAtom(busId))
  const loads = useAtomValue(loadsByBusIdAtom(busId))
  const stores = useAtomValue(storesByBusIdAtom(busId))
  const storages = useAtomValue(storagesByBusIdAtom(busId))
  
  const link0s = useAtomValue(linksByBus0IdAtom(busId))
  const link1s = useAtomValue(linksByBus1IdAtom(busId))

  const line0s = useAtomValue(linesByBus0IdAtom(busId))
  const line1s = useAtomValue(linesByBus1IdAtom(busId))


  return <Box>
    {generators.map((generator) => 
    <GeneratorItemTitle generatorId = {generator.id} key = {generator.id}/>)}

  {loads.map((load) => 
    <LoadItemTitle loadId = {load.id} key = {load.id}/>)}

  {stores.map((store) => 
    <StoreItemTitle storeId = {store.id} key = {store.id}/>)}

  {storages.map((storage) => 
    <StorageItemTitle storageId = {storage.id} key = {storage.id}/>)}

  {link0s.map((link) => 
    <LinkItemTitle linkId = {link.id} key = {link.id} direct={LinkDirect.OUT}/>)}

  {link1s.map((link) => 
    <LinkItemTitle linkId = {link.id} key = {link.id} direct={LinkDirect.IN}/>)}

{line0s.map((line) => 
    <LineItemTitle lineId = {line.id} key = {line.id} direct={LineDirect.OUT}/>)}

  {line1s.map((line) => 
    <LineItemTitle lineId = {line.id} key = {line.id} direct={LineDirect.IN}/>)}



</Box>
}

export default BusChildren