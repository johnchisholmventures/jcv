import {Navbar, Container} from 'rbx'
import Link from 'next/link'
import { useRouter } from 'next/router'

const MainNav = () => {
    const {pathname} = useRouter()
    const isActive = (target) => pathname.split('/')[1] === target ? true: false
    return (
        <Navbar>
            <Container className='py-6 md:py-12'>
                <Navbar.Brand>
                    <Link href='/'>
                    <Navbar.Item>
                        <img
                            className='h-6 md:h-8 lg:h-10'
                            src="/assets/logo.png"
                            alt=""
                            role="presentation"
                        />
                    </Navbar.Item>
                    </Link>
                    <Navbar.Burger />
                </Navbar.Brand>
                <Navbar.Menu>
                    <Navbar.Segment align="end">
                    <Link href='/mission'><Navbar.Item active={isActive('mission')}>Mission</Navbar.Item></Link>
                    <Link href='/investments'><Navbar.Item active={isActive('investments')}>Investments</Navbar.Item></Link>
                    <Link href='/team'><Navbar.Item active={isActive('team')}>Team</Navbar.Item></Link>
                    <Navbar.Item href='http://unleashyourinnercompany.com'><span className='italic'>Unleash</span></Navbar.Item>
                    <Navbar.Item href='http://integralpoem.com'><span className='italic'>Integral</span></Navbar.Item>
                    </Navbar.Segment>
                </Navbar.Menu>
            </Container>
        </Navbar>
    )
}

export default MainNav