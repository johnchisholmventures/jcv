import Container from './container'

export default function Alert({children}) {
  return (
    <>
    {
      !children
      ? null
      : 
      <div className={'bg-default-purple border-accent-2'}>
        <Container>
          <div className="py-2 text-center text-sm text-white">
            {children}
          </div>
        </Container>
      </div>  
    }
    </>
  )
}
