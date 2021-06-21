const Avatar = () => {
	return (
		<img
			id="avatar"
			alt="Foto de perfil"
			src="https://res.cloudinary.com/dacfp3qlk/f_auto,c_limit,w_256,q_auto/cv.jpg"
			className="h-32 w-32 md:h-40 md:w-40 rounded-full"
			width={250}
			height={250}
		></img>
	);
};

export default Avatar;
