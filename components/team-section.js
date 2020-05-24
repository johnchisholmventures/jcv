
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Column, Image, Icon } from 'rbx'
import PostBody from './post-body'

const TeamSection = ({picture, name, twitter, linkedIn, children}) => {
    return (
        <Column.Group>
            <Column className='text-center'>
                <div className='mt-0 md:mt-8'> 
                    <Image className='mx-auto rounded-full w-64 max-w-sm mb-4' src={picture}/>
                    <h3 className='text-xl font-bold text-default-grey mb-2'>{name}</h3>
                    <a href={twitter}>
                        <Icon>
                            <FontAwesomeIcon icon={faTwitter} />
                        </Icon>
                    </a>
                    <a href={linkedIn}>
                        <Icon>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </Icon>
                    </a>
                </div>
            </Column>
            <Column>
            <PostBody content={children}/>
            </Column>
        </Column.Group>
    )
}


export default TeamSection