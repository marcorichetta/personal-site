
const Footer = () => (
    <footer className="p-4 text-center text-gray-400 text-xs transition-colors">
        &copy; Marco Richetta {new Date().getFullYear()}
        <br />
        Hecho con{' '}
        <a className='text-blue-300 no-underline' href="https://nextjs.org">Next.js</a>,{' '}
        <a className='text-blue-300 no-underline' href="https://tailwindcss.com">Tailwind CSS</a> y{' '}
        <a className='text-blue-300 no-underline' href="https://zeit.co/now">Zeit Now</a>
    </footer>
)

export default Footer