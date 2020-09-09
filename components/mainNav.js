import {Navbar, Container} from 'rbx'
import Link from 'next/link'
import { useRouter } from 'next/router'

const MainNav = () => {
    const {pathname} = useRouter()
    const isActive = (target) => pathname.split('/')[1] === target ? true: false
    const activeStyle = 'border-b-2 border-default-purple'
    return (
        <Navbar className='py-6'>
            <Container >
                <Navbar.Brand>
                    <Link href='/'>
                    <Navbar.Item>
                        <img
                            className='hero-image h-6 md:h-8 lg:h-10'
                            src="/assets/jcvlogowithline.png"
                            alt=""
                            role="presentation"
                        />
                    </Navbar.Item>
                    </Link>
                    <Navbar.Burger />
                </Navbar.Brand>
                <Navbar.Menu>
                    <Navbar.Segment className='text-xl' align="end">
                        <Navbar.Item href="/#resources">Resources</Navbar.Item>
                        <Link href='/mission'><Navbar.Item className={`${isActive('mission') ? activeStyle : null}`} active={isActive('mission')}>Mission</Navbar.Item></Link>
                        <Link href='/investments'><Navbar.Item className={`${isActive('investments') ? activeStyle : null}`}  active={isActive('investments')}>Investments</Navbar.Item></Link>
                        <Link href='/team'><Navbar.Item className={`${isActive('team') ? activeStyle : null}`}  active={isActive('team')}>Team</Navbar.Item></Link>
                        <Navbar.Item href='http://unleashyourinnercompany.com' target='_blank'>Unleash</Navbar.Item>
                        <Navbar.Item href='http://integralpoem.com' target='_blank'>Integral</Navbar.Item>
                    </Navbar.Segment>
                </Navbar.Menu>
            </Container>
        </Navbar>
    )
}

export default MainNav