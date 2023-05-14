import Image from "next/image";
import cvImg from "../public/images/cv.jpg";

const Avatar = () => {
	return (
		<div id="avatar">
			<Image
				alt="Foto de perfil"
				src={cvImg}
				className="h-32 w-32 md:h-40 md:w-40 rounded-full"
				width={250}
				height={250}
			/>
		</div>
	);
};

export default Avatar;
