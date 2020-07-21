export default function Header({text, bgImage=false}) {
  return (
    <div className='hero-image'>
      <div className='hero-text'>
        <h1>{text}</h1>
      </div>
    </div>
  )
}
