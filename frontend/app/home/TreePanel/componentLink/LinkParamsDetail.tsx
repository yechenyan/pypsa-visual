import { useAtomValue } from "jotai"
import ComponentDetail from "../component/ComponentDetail"
import { linkAtom, LinkId } from "~/datasource/links"

type LinkParamsProps = {
  linkId: LinkId
}

const LinkParamsDetail = ({linkId}: LinkParamsProps) => {
  const link = useAtomValue(linkAtom(linkId))

  return <ComponentDetail data= {link}/>
}

export default LinkParamsDetail
