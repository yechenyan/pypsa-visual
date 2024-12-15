import { Box } from "@mui/material"
import DetailLocation from "./DetailLocation"
import { currentSelectNodeIdAtom } from "~/datasource/current"
import { useSetAtom } from "jotai"
import MyTextButton from "~/components/MyButton/MyTextButton"


const TreePanel = () => {
  const setCurrentSelectNodeId= useSetAtom(currentSelectNodeIdAtom)
  return <Box sx= {{
    position: 'absolute',
    left: '0px',
    top: '0px',
    padding: '16px',
    paddingBottom: '16px',
    height: '100vh',
    width: '400px',
    maxHeight: '100vh',
    zIndex: 1000,
    // backgroundColor: '#FFF',
    overflow: 'scroll',
    overflowX: 'scroll',
    // borderRadius: 1
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    backdropFilter: "blur(20px)"
   
  }}>
    <Box sx= {{
      display: 'flex',
      marginBottom: '8px'
    }}>
      <Box>PyPSA Visual</Box>
      <MyTextButton onClick= {() => {setCurrentSelectNodeId('$')}} sx= {{marginLeft: '8px'}}>All</MyTextButton>
    </Box>
    <DetailLocation />

    
  </Box>
}

export default TreePanel