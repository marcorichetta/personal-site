import Link from 'next/link'

const Navbar = () => {

    const routes = [
        { to: '/about', title: 'About' },
        { to: '/projects', title: 'Projects' },
        { to: '/cv', title: 'CV' },
        { to: '/contact', title: 'Contact' },
    ]

    return (
        <nav className='flex flex-col m-5 text-center md:flex-row md:text-left justify-between'>
            <ul className="flex-grow">
                <Link href="/">
                    <a className="font-bold pl-2 tracking-tighter">Marco Richetta</a>
                </Link>
            </ul>

            <ul className='md:mr-2 text-sm md:text-base'>
                {routes.map(({ to, title }) => (
                    <Link href={to} key={title}>
                        <a className='py-4 px-2 text-blue-500 no-underline hover:underline text-md'>{title}</a>
                    </Link>
                ))}
            </ul>
        </nav>
    )

}

export default Navbar