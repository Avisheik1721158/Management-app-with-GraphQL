import logo from './assests/logo.png';
export default function Header() {
  return (
    <nav className='navbar bg-light mb-4 p-0'>
          <div className="container">
            <div className="navbar-brand" href="/"></div>
            <div className="d-flex">
                <img src={logo} alt="logo" className='mr-2' />
                <span className='font-weight-bold'>
                  <div> Project Management </div>  
                </span>
            </div>
          </div>
    </nav>
  )
}
