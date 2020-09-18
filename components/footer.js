import Container from './container'
import { Icon } from 'rbx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <Container>
        <div className="py-8 flex fex-col justify-between items-center">
          <div className='flex flex-row'>
          <a className='mr-4' target='_blank' href='https://instagram.com/johndchisholm'>
              <img className='w-8' src='/instagram.png'/>
            </a>
            <a  target='_blank' href='https://twitter.com/johndchisholm'>
              <img className='w-8' src='/twitter.png' />
            </a>
          </div>
          <h3 className="text-md font-bold lg:mb-0">
            Copyright &#169; 2020
          </h3>
        </div>
      </Container>
    </footer>
  )
}
