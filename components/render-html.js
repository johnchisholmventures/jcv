import markdownStyles from './markdown-styles.module.css'
import cn from 'classnames'

const RenderHtml = ({children, classNames}) => (
    <div
        className={cn(classNames, markdownStyles['markdown'])}
        dangerouslySetInnerHTML={{ __html: children }}
    />
)

export default RenderHtml