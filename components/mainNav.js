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
                            className='h-6 md:h-8 md:h-10'
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
                    <Navbar.Item>Mission</Navbar.Item>
                    <Navbar.Item>Investments</Navbar.Item>
                    <Link href='/team'><Navbar.Item>Team</Navbar.Item></Link>
                    <Navbar.Item>Events</Navbar.Item>
                    <Navbar.Item>Unleash Your Inner Company</Navbar.Item>
                    </Navbar.Segment>

                </Navbar.Menu>
            </Container>
        </Navbar>
    )
}

export default MainNav