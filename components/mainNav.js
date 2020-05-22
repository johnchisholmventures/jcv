import {Navbar, Container} from 'rbx'
import Link from 'next/link'

const MainNav = () => {
    return (
        <Navbar>
            <Container className='py-12'>
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
                    <Link href='/mission'><Navbar.Item>Mission</Navbar.Item></Link>
                    <Link href='/investments'><Navbar.Item>Investments</Navbar.Item></Link>
                    <Link href='/team'><Navbar.Item>Team</Navbar.Item></Link>
                    <Navbar.Item href='http://unleashyourinnercompany.com'>Unleash Your Inner Company</Navbar.Item>
                    </Navbar.Segment>
                </Navbar.Menu>
            </Container>
        </Navbar>
    )
}

export default MainNav