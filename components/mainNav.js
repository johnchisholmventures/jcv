import {Navbar, Container} from 'rbx'
import Link from 'next/link'
import { useRouter } from 'next/router'

const MainNav = () => {
    const {pathname} = useRouter()
    const isActive = (target) => pathname.split('/')[1] === target ? true: false
    const activeStyle = 'border-b-2 border-default-purple'
    return (
        <Navbar>
            <Container >
                <Navbar.Brand>
                    <Link href='/'>
                    <Navbar.Item>
                        <img
                            className='hero-image h-8 sm:h-12 md:h-12 lg:h-14'
                            src="/assets/jcv-logo.png"
                            alt=""
                            role="presentation"
                        />
                    </Navbar.Item>
                    </Link>
                    <Navbar.Burger ref={ref => {console.log("REF", ref)}}/>
                </Navbar.Brand>
                <Navbar.Menu className='md:my-6'>
                    <Navbar.Segment className='text-xl' align="end">
                        <Navbar.Item className='font-bold' href="/#resources">Resources</Navbar.Item>
                        <Link href='/mission'><Navbar.Item className={`font-bold ${isActive('mission') ? activeStyle : null}`} active={isActive('mission')}>Mission</Navbar.Item></Link>
                        <Link href='/investments'><Navbar.Item className={`font-bold ${isActive('investments') ? activeStyle : null}`}  active={isActive('investments')}>Investments</Navbar.Item></Link>
                        <Link href='/team'><Navbar.Item className={`font-bold ${isActive('team') ? activeStyle : null}`}  active={isActive('team')}>Team</Navbar.Item></Link>
                        <Navbar.Item className='font-bold text-default-purple' href='http://unleashyourinnercompany.com' target='_blank'>Unleash</Navbar.Item>
                        <Navbar.Item className='font-bold text-default-purple' href='http://integralpoem.com' target='_blank'>Integral</Navbar.Item>
                    </Navbar.Segment>
                </Navbar.Menu>
            </Container>
        </Navbar>
    )
}

export default MainNav