import Link from 'next/link'

const Navbar = () => {

    const routes = [
        { to: '/about', title: 'About' },
        { to: '/projects', title: 'Works' },
        { to: '/contact', title: 'Contact' },
    ]

    return (
        <nav className='flex flex-col mt-4 text-center md:flex-row md:text-left justify-between'>
            <ul className="flex-grow">
                <Link href="/">
                    <a className="font-bold p-4 pr-1 tracking-tighter">Marco Richetta</a>
                </Link>
            </ul>

            <ul className='md:mr-2 text-sm md:text-base'>
                {routes.map(({ to, title }) => (
                    <Link href={to} key={title}>
                        <a className='px-2 py-4 text-blue-500 no-underline text-md'>{title}</a>
                    </Link>
                ))}
            </ul>
        </nav>
    )

}

export default Navbar