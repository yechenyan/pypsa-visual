import { GeneratorId } from "~/datasource/generators"
import GeneratorParamsDetail from "./GeneratorParamsDetail"
import ComponentItemTitleLayout from "../component/ComponentItemTitleLayout"
type GeneratorItemTitleProps = {
  generatorId: GeneratorId
}

const GeneratorItemTitle = ({generatorId}: GeneratorItemTitleProps) => {
  
    
  return  <ComponentItemTitleLayout 
    title = {`gen:${generatorId}`}
    detail = {<GeneratorParamsDetail generatorId={generatorId}/>}
    />
}

export default GeneratorItemTitle