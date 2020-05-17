
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { Column, Image, Icon } from 'rbx'

const TeamCard = ({picture, name, twitter, linkedIn, children}) => {
    return (
        <Column.Group>
            <Column>
                <Image className='rounded-full w-64 max-w-sm' src={picture}/>
            </Column>
            <Column>
                <h3>{name}</h3>
                <a href={twitter}>
                    <Icon>
                        <FontAwesomeIcon icon={faTwitter} />
                    </Icon>
                </a>
                {children}
            </Column>
        </Column.Group>
    )
}

export default TeamCard