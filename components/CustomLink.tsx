export default function CustomLink({ text, href }) {
	return (
		<a href={href} className="link" target="_blank" rel="noopener noreferrer">
			{text}
		</a>
	);
}
