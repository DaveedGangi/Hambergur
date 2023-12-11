// Write your code here
import Popup from 'reactjs-popup'

import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'

import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const Headers = () => (
  <div className="FlexingHeader">
    <div>
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
        />
      </Link>
    </div>
    <div>
      <Popup
        modal
        trigger={
          <button
            data-testid="hamburgerIconButton"
            className="Button"
            type="button"
          >
            <GiHamburgerMenu />
            {/* */}
          </button>
        }
      >
        {close => (
          <div>
            <ul>
              <li>
                <Link to="/">
                  <AiFillHome /> HOME
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <BsInfoCircleFill /> ABOUT
                </Link>
              </li>
            </ul>

            <button
              data-testid="closeButton"
              type="button"
              onClick={() => close()}
            >
              <IoMdClose /> {/* */}
            </button>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default Headers
