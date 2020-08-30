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
                    <Navbar.Item href="/#resources">Resources</Navbar.Item>
                    <Link href='/mission'><Navbar.Item active={isActive('mission')}>Mission</Navbar.Item></Link>
                    <Link href='/investments'><Navbar.Item active={isActive('investments')}>Investments</Navbar.Item></Link>
                    <Link href='/team'><Navbar.Item active={isActive('team')}>Team</Navbar.Item></Link>
                    <Navbar.Item href='https://www.amazon.com/Unleash-Your-Inner-Company-Perseverance-ebook/dp/B0167HH5OI/ref=sr_1_2?dchild=1&keywords=unleash+your+inner+company&qid=1594217971&sr=8-2'><span className='italic'>Unleash</span></Navbar.Item>
                    <Navbar.Item href='https://www.amazon.com/Integral-Mathematical-Odyssey-John-Chisholm/dp/0692076123/ref=sr_1_1?dchild=1&keywords=integral+mathematical+odyssey&qid=1594217999&sr=8-1'><span className='italic'>Integral</span></Navbar.Item>
                    </Navbar.Segment>
                </Navbar.Menu>
            </Container>
        </Navbar>
    )
}

export default MainNav