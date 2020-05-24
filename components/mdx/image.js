const Image = ({src, description, altText}) => {
    return (
      <div className='text-center'>
        <img className='mx-auto' src={src} altText={altText || description}/>
        {
          description
          ? <p className='text-xs italic'>{description}</p>
          : null
        }
      </div>
    )
  }

export default Image