import { Link } from 'react-router-dom'

const Nav = () => {
  let navStyles = {
    backgroundColor: 'black',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 15px 0 15px',
    gap: '7.5px'
  }

  let linkStyles = {
    textDecoration: 'none',
    color: 'white'
  }

  const linkHoverEventHandler = e => {
    if (e.target.style.textDecoration !== 'underline') {
      e.target.style.textDecoration = 'underline'
    } else {
      e.target.style.textDecoration = 'none'
    }
  }

  return(
    <nav style={navStyles}>
      <Link to='/' style={linkStyles} onMouseEnter={linkHoverEventHandler} onMouseLeave={linkHoverEventHandler}>Home</Link>
      <Link to='/about' style={linkStyles} onMouseEnter={linkHoverEventHandler} onMouseLeave={linkHoverEventHandler}>About</Link>
      <Link to='/skills' style={linkStyles} onMouseEnter={linkHoverEventHandler} onMouseLeave={linkHoverEventHandler}>Skills</Link>
    </nav>
  )
}

export default Nav