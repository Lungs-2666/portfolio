    import './NavBar.css';
    import Link from 'next/link';

    const NavBar = () => {
        return (
            <nav className='nav_bar'>
                <Link href="/#about" className="nav_item"> About me </Link>
                <Link href="/#projects" className="nav_item"> Featured Projects </Link>
                <Link href="/#skills" className="nav_item"> Skills </Link>
                <Link href="/#contacts" className="nav_item"> Contacts </Link>
            </nav>
        );
    }

    export default NavBar;