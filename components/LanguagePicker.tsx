import { useRouter } from "next/router";

const LanguagePicker = () => {
	const router = useRouter();
	const { locale } = router;

	const changeLanguage = (e) => {
		const locale = e.target.value;
		router.push(router.pathname, router.asPath, { locale });
	};

	return (
		<select
			onChange={changeLanguage}
			defaultValue={locale}
			className="text-white text-shadow-sm text-lg bg-transparent tracking-wide"
		>
			<option className="text-black" value="es">
				🇦🇷
			</option>
			<option className="text-black" value="en">
				🇺🇸
			</option>
		</select>
	);
};

export default LanguagePicker;
