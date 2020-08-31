import Container from './container'
import { Icon } from 'rbx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 text-center">
          <a target='_blank' href='https://twitter.com/johndchisholm'>
            <Icon size={'medium'}>
              <FontAwesomeIcon size={'lg'} icon={faTwitter} />
            </Icon>
          </a>
          <h3 className="text-center text-md font-bold mb-10 lg:mb-0">
            Follow John on Twitter
          </h3>
        </div>
      </Container>
    </footer>
  )
}
