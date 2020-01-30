import Link from 'next/link'

const Navbar = () => {

    return (
        <nav className='flex flex-col m-5 text-center md:flex-row md:text-left justify-between'>
            <ul className="flex-grow">
                <Link href="/">
                    <a className="font-bold tracking-tighter">Marco Richetta</a>
                </Link>
            </ul>
        </nav>
    )

}

export default Navbar