import { BusId } from "~/datasource/buses/index"
import BusParamsDetail from "./BusParamsDetail"
import Box from "@mui/material/Box"
import { useState } from "react"
import BusChildren from "./BusChildren"
import MyTextButton from "~/components/MyButton/MyTextButton"
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import GridViewIcon from '@mui/icons-material/GridView';


type DetailBusProps = {
  busId: BusId
}

const BusItemTitle = ({busId}: DetailBusProps) => {
  const [showParamsDetail, setShowParamsDetail] = useState(false)

  const toggleParamsDetail = () => {
    setShowParamsDetail(detail => !detail)
  }

  const [showChildren, setShowChildren] = useState(false)

  const toggleBusChildren = () => {
    setShowChildren(detail => !detail)
  }


  return <Box sx= {{fontSize: '12px', marginBottom: '8px'}}>
    <Box sx= {{display: 'flex', alignItems: 'center'}}>
      bus:{busId}
      <MyTextButton onClick = {toggleParamsDetail} ><HelpOutlineRoundedIcon sx={{fontSize: 12}}/></MyTextButton>
      <MyTextButton onClick = {toggleBusChildren}><GridViewIcon sx={{fontSize: 12}}/></MyTextButton>
    </Box>

    <Box sx= {{
      paddingLeft: 2
    }}>
    {showParamsDetail && <BusParamsDetail busId = {busId} />}
    {showChildren && <BusChildren busId = {busId} />}
    </Box>

  </Box>
}

export default BusItemTitle