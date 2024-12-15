import { useAtomValue } from "jotai"
import ComponentDetail from "../component/ComponentDetail"
import { generatorAtom, GeneratorId } from "~/datasource/generators"

type GeneratorParamsProps = {
  generatorId: GeneratorId
}

const GeneratorParamsDetail = ({generatorId}: GeneratorParamsProps) => {
  const generator = useAtomValue(generatorAtom(generatorId))

  return <ComponentDetail data= {generator}/>
}

export default GeneratorParamsDetail
