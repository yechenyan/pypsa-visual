
import { linkAtom, LinkId } from "~/datasource/links"
import LinkParamsDetail from "./LinkParamsDetail"
import ComponentItemTitleLayout from "../component/ComponentItemTitleLayout"
import { useAtomValue } from "jotai"

export enum LinkDirect {
  IN ='IN',
  OUT =  'OUT'

}
type LinkItemTitleProps = {
  linkId: LinkId
  direct: LinkDirect
}

const LinkItemTitle = ({linkId, direct}: LinkItemTitleProps) => {

  const link = useAtomValue(linkAtom(linkId))

  if (!link) return null

  let directText = ''

  // if (link.location) {
  //   if (direct === LinkDirect.IN) {
  //     directText = `(➡️me)`
  //   } else if (direct === LinkDirect.OUT) {
  //     directText = `(⬅️me)`
  //   }
  // } else {
  //   if (direct === LinkDirect.IN) {
  //     directText = `(${link.location1}➡️me)`
  //   } else if (direct === LinkDirect.OUT) {
  //     directText = `(${link.location1}⬅️me)`
  //   }
  // }

  if (direct === LinkDirect.IN) {
    // directText = `(me➡️${link.bus1})`
    directText = `(⬅️)`
  } else if (direct === LinkDirect.OUT) {
    // directText = `(me⬅️${link.bus1})`
    directText = `(➡️)`
  }

  return  <ComponentItemTitleLayout 
    title = {`link${directText}:${linkId}`}
    detail = {<LinkParamsDetail linkId={linkId}/>}
    />
}

export default LinkItemTitle