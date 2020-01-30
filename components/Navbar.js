import Link from 'next/link'

const Navbar = () => {

    const routes = [
        { to: '/projects', title: 'Proyectos' },
    ]

    return (
        <nav className='flex flex-col m-5 text-center md:flex-row md:text-left justify-between'>
            <ul className="flex-grow">
                <Link href="/">
                    <a className="text-lg font-bold tracking-tighter">Marco Richetta</a>
                </Link>
            </ul>

            <ul className='md:mr-2 text-sm md:text-base'>
                {routes.map(({ to, title }) => (
                    <Link href={to} key={title}>
                        <a className='py-4 px-2 no-underline hover:underline text-lg'>{title}</a>
                    </Link>
                ))}
            </ul>
        </nav>
    )

}

export default Navbar