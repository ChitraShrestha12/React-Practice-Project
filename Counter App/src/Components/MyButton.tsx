type MyButtonProps={
    value:string
    onClick:()=>void
}
function MyButton({value,onClick}:MyButtonProps) {
  return (
    <button onClick={onClick}>{value}</button>
  )
}

export default MyButton