import { Link } from "react-router-dom";

const Logo = () => (
    <div>
        <img width={100} src='https://static.vecteezy.com/system/resources/previews/017/032/871/original/burger-logo-illustration-fast-food-logo-emblem-label-burger-vintage-design-business-burger-vector.jpg' />
    </div>
)

const NavItems = () => (
    <div>
        <ul className='flex font-mono font-bold text-xl space-x-4'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>AboutUs</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li>Profile</li>
        </ul>
    </div>
)

const Header = () => (
    <>
        <div className='flex items-center justify-between'>
            <Logo />
            <NavItems />
        </div>
        <hr className='shadow-2xl border border-b-2 mb-4'></hr>
    </>
)

export default Header;