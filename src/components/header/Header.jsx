import React, { useState } from 'react';
import { LayoutPage } from '../../layout/LayoutPage';
import { Head, MobileNavigation } from './styled';
import logo from '../../assets/logo.svg';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [menu, setMenu] = useState(false);

  const handleNavLinkClick = () => {
    if (menu) {
      setMenu(false);
    }
  };
  return (
    <>
      <LayoutPage>
          <Head data-aos="fade-down" data-aos-duration="1500">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
            <nav>
              <ul>
                <li className="desktop">
                  <Link to="/contact">
                    <button>Contact us</button>
                  </Link>
                </li>
                <li className="mobile">
                  <label>
                    <input
                      type="checkbox"
                      id="check"
                      checked={menu}
                      onChange={() => setMenu(!menu)}
                    />
                    <span></span>
                    <span></span>
                    <span></span>
                  </label>
                </li>
              </ul>
            </nav>
          </Head>
      </LayoutPage>

      {menu && (
        <MobileNavigation>
          <nav className={!menu ? 'slideOutRight' : 'slideInRight'}>
            <ul>
              <li>
                <NavLink to="/contact" onClick={handleNavLinkClick}>
                  <button>Contact us</button>
                </NavLink>
              </li>
            </ul>
          </nav>
        </MobileNavigation>
      )}
    </>
  );
}

export default Header;
