
const Footer = () => (
    <footer className="p-4 text-center text-gray-400 text-xs transition-colors">
        &copy; Marco Richetta {new Date().getFullYear()}. Made with{' '}
        <a href="https://nextjs.org">Next.js</a>,{' '}
        <a href="https://tailwindcss.com">Tailwind CSS</a>, and{' '}
        Hosted on <a href="https://zeit.co/now">Zeit Now</a>.
        <br />
        Photo by <a href="https://unsplash.com/photos/ln5drpv_ImI">Vincentiu Solomon</a> on Unsplash
    </footer>
)

export default Footer