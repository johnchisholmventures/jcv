import Container from './container'

export default function Alert({active, children}) {
  return (
    <>
    {
      !active
      ? null
      : 
      <div className={'border-b bg-accent-1 border-accent-2'}>
        <Container>
          <div className="py-2 text-center text-sm">
            {children}
          </div>
        </Container>
      </div>  
    }
    </>
  )
}
