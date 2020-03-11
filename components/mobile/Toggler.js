const Toggler = ({ isMenuOpen, setisMenuOpen }) => {
	return (
		<button onClick={() => setisMenuOpen(!isMenuOpen)} aria-label="Toggle">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="26"
				height="26"
				viewBox="0 0 24 24"
				fill="none"
				stroke="#ffffff"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				{/* Change between hamburger and X */}
				{isMenuOpen ? (
					<>
						<line x1="18" y1="6" x2="6" y2="18"></line>
						<line x1="6" y1="6" x2="18" y2="18"></line>
					</>
				) : (
					<>
						<line x1="3" y1="12" x2="21" y2="12"></line>
						<line x1="3" y1="6" x2="21" y2="6"></line>
						<line x1="3" y1="18" x2="21" y2="18"></line>
					</>
				)}
			</svg>
		</button>
	);
};

export default Toggler;
