import { faBars, faBell, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Box_header, Box_logo, Container, Logo, Menu_isMobile, Menu_isDesktop } from './styled'

const Header = () => {
  const router = useRouter()
  console.log(router.pathname)
  return (
    <>
      <Container>
        <Box_header>
          <Box_logo data-aos="zoom-in" data-aos-delay="250">
            <Logo src="/static/images/block.png" />
            <a>BLOCKCHAIN</a>
          </Box_logo>
          <Menu_isDesktop>
            <ul>
              <Link href="/exchange">
                <a data-aos="fade-up-left" data-aos-delay="150">
                  <li className={`${router.pathname === '/exchange' || '/' ? 'pathname' : ' '}`}>Exchange</li>
                </a>
              </Link>
              <Link href="/wallet">
                <a data-aos="fade-up-left" data-aos-delay="250">
                  <li className={`${router.pathname === '/wallet' ? 'pathname' : ' '}`}>Wallet</li>
                </a>
              </Link>
              <Link href="/news">
                <a data-aos="fade-up-left" data-aos-delay="350">
                  <li className={`${router.pathname === '/news' ? 'pathname' : ' '}`}>News</li>
                </a>
              </Link>
              <Link href="/about">
                <a data-aos="fade-up-left" data-aos-delay="450">
                  <li className={`${router.pathname === '/about' ? 'pathname' : ' '}`}>About</li>
                </a>
              </Link>
              <Link href="/terms">
                <a data-aos="fade-up-left" data-aos-delay="550">
                  <li className={`${router.pathname === '/terms' ? 'pathname' : ' '}`}>Terms</li>
                </a>
              </Link>
            </ul>
          </Menu_isDesktop>
          <Menu_isMobile>
            <button>
              <FontAwesomeIcon icon={faBell} />
            </button>
            <button>
              <FontAwesomeIcon icon={faUser} />
            </button>
            <button>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </Menu_isMobile>
        </Box_header>
      </Container>
    </>
  )
}

export default Header
