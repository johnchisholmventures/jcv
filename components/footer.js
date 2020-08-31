import Container from './container'
import { Icon } from 'rbx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col md:flex-row md:justify-between">
          <a className="mx-auto md:mx-0" href='https://twitter.com/johndchisholm'>
            <Icon size={'medium'}>
              <FontAwesomeIcon size={'lg'} icon={faTwitter} />
            </Icon>
          </a>
          <h3 className="text-md font-bold tracking-tighter leading-tight text-center lg:text-right mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Follow John on Twitter
          </h3>
        </div>
      </Container>
    </footer>
  )
}
