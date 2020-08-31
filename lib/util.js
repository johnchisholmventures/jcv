import parse, {domToReact} from 'html-react-parser'

export const capitalizeFirst = str => str.charAt(0).toUpperCase() + str.slice(1)

export const italicizeWord = (word, text) => {
  console.log("TEXT", text)
    if(text && text.search(word)<0) return text
    const withText = text.replace(word, `<span id='italic'>${word}</span>`)
    const options = {
        replace: ({ attribs, children }) => {
          if (attribs && attribs.id === 'italic') {
            return (
              <span className='italic'>
                {domToReact(children, options)}
              </span>
            )
          }
        }
    }
    return parse(withText, options)
}
