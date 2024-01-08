import * as C from './styles'

export function Button({ children, red, ...props }) {
  return (
    <>
      {red ? (
        <C.ButtonRed {...props}>{children}</C.ButtonRed>
      ) : (
        <C.ButtonWhite {...props}>{children}</C.ButtonWhite>
      )}
    </>
  )
}
