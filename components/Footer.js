const Footer = () => (
    <footer className="p-4 text-center text-gray-400 text-sm">
        &copy; Marco Richetta {new Date().getFullYear()}
        <br />
        Hecho con{' '}
        <a className='text-blue-300 link hover-1' href="https://nextjs.org" target="_blank" rel="noopener">Next.js</a>,{' '}
        <a className='text-blue-300 link hover-1' href="https://tailwindcss.com" target="_blank" rel="noopener">Tailwind CSS</a> y{' '}
        <a className='text-blue-300 link hover-1' href="https://zeit.co/now" target="_blank" rel="noopener">Zeit Now</a>
        <a href="https://github.com/marcorichetta/personal-site" target="_blank" rel="noopener">
					<img
						className="inline px-2"
						src={`icons/social/github2.svg`}
					></img>
				</a>
    </footer>
)

export default Footer