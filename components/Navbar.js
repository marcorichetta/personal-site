import Link from 'next/link'

const Navbar = () => {

    const routes = [
        { to: '', title: 'CV', openOn: '_blank' },
    ]

    return (
        <nav className='flex flex-col m-5 text-center md:flex-row md:text-left justify-between'>
            <ul className="flex-grow">
                <Link href="/">
                    <a className="font-bold pl-2 tracking-tighter">Marco Richetta</a>
                </Link>
            </ul>

            <ul className='md:mr-2 text-sm md:text-base'>
                <a 
                    target='_blank' 
                    href='https://drive.google.com/open?id=1x7Fn0SiH0IwkcpaI-ISyn6HXdJN8OguV'
                    className='py-4 px-2 text-blue-500 no-underline hover:underline text-md'>
                        CV
                </a>
            </ul>
        </nav>
    )

}

export default Navbar