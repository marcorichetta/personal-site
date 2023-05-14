import Image from "next/image";
import cvImg from "public/images/cv200.jpg";

const Avatar = () => {
	return (
		<div id="avatar">
			<Image
				alt="Foto de perfil"
				src={cvImg}
				className="h-32 w-32 md:h-40 md:w-40 rounded-full"
			/>
		</div>
	);
};

export default Avatar;
