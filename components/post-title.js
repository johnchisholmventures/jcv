import {italicizeWord} from '../lib/util'

// NOTE: The reason this exists is because this component is used for not only page titles but also post titles
// because post titles are pulled from the metadata of the .md file, it's not possible to italicize them
// this will break if you use it on page and try to manually add <em> around UYIC
// this function will also only italicize UYIC
// if you want to manually do pages you can either create a new PageTitle component
// or just do an <h1> with post-title classname
export default function PostTitle({ children }) {
  return (
    <h1 className="post-title">
      {italicizeWord('Unleash Your Inner Company', children)}
    </h1>
  )
}
