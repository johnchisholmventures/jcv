import Container from './Container'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <Container>
        <div className="py-8 flex flex-row justify-between items-center">
          <div className="flex flex-row">
            <a
              className="mr-4"
              target="_blank"
              rel="noopener noreferrer"
              href="https://instagram.com/johndchisholm"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-8" src="/instagram.png" alt="Instagram" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/johndchisholm"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-8" src="/twitter.png" alt="Twitter" />
            </a>
          </div>
          <h3 className="text-md font-bold">
            Copyright &#169; {new Date().getFullYear()}
          </h3>
        </div>
      </Container>
    </footer>
  )
}
