import Box from '@mui/material/Box';


type DataItemProps = {
  itemKey: string,
  value: any
}
const DataItem = ({
  itemKey,
  value
}: DataItemProps) => {
  return <Box sx= {{display: 'flex'}}>
    <Box>{itemKey}: </Box>
    <Box>{JSON.stringify(value)}</Box>
  </Box>
}

type ItemDetailProps = {
  data: Record<string, any>
}

const ComponentDetail = ({
  data
}: ItemDetailProps) => {

  return <Box sx= {{
    color: '#555',
    fontSize: '12px'
  }}>
    {Object.entries(data).map(([key, value]: any) => <DataItem key = {key} itemKey= {key} value = {value}/>)

    }
  </Box>

}

export default ComponentDetail