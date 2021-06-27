import { useRouter } from "next/router";
import en from "pages/locales/en";
import es from "pages/locales/es";

const LanguagePicker = () => {
	const router = useRouter();
	const { locale } = router;
	const t = locale === "en" ? es : en;

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
				ES
			</option>
			<option className="text-black" value="en">
				EN
			</option>
		</select>
	);
};

export default LanguagePicker;
