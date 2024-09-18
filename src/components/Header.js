const Logo = () => (
    <div>
        <img width={100} src='https://static.vecteezy.com/system/resources/previews/017/032/871/original/burger-logo-illustration-fast-food-logo-emblem-label-burger-vintage-design-business-burger-vector.jpg' />
    </div>
)

const NavItems = () => (
    <div>
        <ul className='flex font-mono font-bold text-xl space-x-4'>
            <li>Home</li>
            <li>AboutUs</li>
            <li>Menu</li>
            <li>Profile</li>
        </ul>
    </div>
)

const Header = () => (
<div className='flex items-center justify-between'>
    <Logo />
    <NavItems />
</div>
)

export default Header;