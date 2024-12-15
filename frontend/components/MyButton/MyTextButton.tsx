import Button, {ButtonProps} from "@mui/material/Button"

const MyTextButton = (props: ButtonProps) => {
  const myProps = props ?? {}
  const {sx,children, ...otherProps} = myProps

  return <Button variant="text" size="small"  
  sx={{ textTransform: 'none',fontSize: "12px" , paddingLeft: '8px', paddingRight: '8px', minWidth: 0,...sx }}
   {...otherProps}>{children}</Button>
}

export default MyTextButton