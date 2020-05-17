import Container from './container'
import { Icon } from 'rbx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="mt-16 bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <a href='https://twitter.com/johndchisholm'>
            <Icon>
              <FontAwesomeIcon icon={faTwitter} />
            </Icon>
          </a>
          <h3 className="text-md font-bold tracking-tighter leading-tight text-center lg:text-right mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Copyright 2020
          </h3>
        </div>
      </Container>
    </footer>
  )
}
