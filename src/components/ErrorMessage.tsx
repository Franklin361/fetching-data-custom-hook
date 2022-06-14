export const ErrorMessage = ({msg}:{msg:string}) => {
  return (
    <div className="error-msg">{msg.toUpperCase()}</div>
  )
}