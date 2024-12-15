import Box from "@mui/material/Box/Box"
import { ReactNode, useState } from "react"
import MyTextButton from "~/components/MyButton/MyTextButton"
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';

type ComponentItemTitleLayout = {
  title: string
  detail: ReactNode
}


const ComponentItemTitleLayout = ({title, detail}: ComponentItemTitleLayout) => {
    const [showParamsDetail, setShowParamsDetail] = useState(false)
  
    const toggleParamsDetail = () => {
      setShowParamsDetail(detail => !detail)
    }
    
  return <Box sx= {{fontSize: '12px', marginBottom: '8px'}}>
        <Box sx= {{display: 'flex', alignItems: 'center'}}>
      {title}
      <MyTextButton onClick = {toggleParamsDetail}><HelpOutlineRoundedIcon sx={{fontSize: 12}}/></MyTextButton>
    </Box>
    <Box sx= {{paddingLeft: 2}}>
    {showParamsDetail && detail}
    </Box>
  </Box>
}

export default ComponentItemTitleLayout