import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
   const [click , setclick] = useState (false);
   const handleClick = () => setclick(!click);
  return (
    <>
      <nav className="navbar">
         <div className="navbar-container">
            <Link to="/" navbar-logo>
               TRVL <i className='fab fa-typo3' />
            </Link> 
            <div className="menu-icon" onClick={handleClick}>
               <i classname={clisk ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
         </div>
      </nav>
    </>
  )
}

export default Navbar
