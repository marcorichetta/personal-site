import { useRouter } from "next/router";

const ArgentinaFlag = () => (
	<>
		<path fill="#338af3" d="M0 0h512v144.7L488 256l24 111.3V512H0V367.3L26 256 0 144.7z" />
		<path fill="#eee" d="M0 144.7h512v222.6H0z" />
		<path
			fill="#ffda44"
			d="m332.4 256-31.2 14.7 16.7 30.3-34-6.5-4.2 34.3-23.7-25.2-23.6 25.2-4.3-34.3-34 6.5 16.6-30.3-31.2-14.7 31.3-14.7L194 211l34 6.5 4.3-34.3 23.6 25.2 23.6-25.2 4.4 34.3 34-6.5-16.7 30.3z"
		/>{" "}
	</>
);

const USAFlag = () => (
	<>
		<path
			fill="#eee"
			d="M0 256 256 0h256v55.7l-20.7 34.5 20.7 32.2v66.8l-21.2 32.7L512 256v66.8l-24 31.7 24 35.1v66.7l-259.1 28.3L0 456.3v-66.7l27.1-33.3L0 322.8z"
		/>
		<path
			fill="#d80027"
			d="M256 256h256v-66.8H236.9zm-19.1-133.6H512V55.7H236.9zM512 512v-55.7H0V512zM0 389.6h512v-66.8H0z"
		/>
		<path fill="#0052b4" d="M0 0h256v256H0z" />
		<path
			fill="#eee"
			d="M15 14.5 6.9 40H-20L1.7 55.8l-8.3 25.5L15 65.5l21.6 15.8-8.2-25.4L50.2 40H23.4zm91.8 0L98.5 40H71.7l21.7 15.8-8.3 25.5 21.7-15.8 21.7 15.8-8.3-25.4L142 40h-26.8zm91.9 0-8.3 25.6h-26.8l21.7 15.8-8.3 25.5 21.7-15.8 21.6 15.7-8.2-25.3 21.7-16H207zM15 89.2l-8.3 25.5H-20l21.7 15.8-8.3 25.5L15 140l21.6 15.7-8.2-25.3 21.7-16H23.4zm91.8 0-8.3 25.5H71.8l21.7 15.8-8.3 25.5 21.7-15.8 21.6 15.7-8.2-25.3 21.7-16h-26.8zm91.8 0-8.3 25.5h-26.8l21.7 15.8-8.3 25.5 21.7-15.8 21.6 15.7-8.2-25.3 21.7-16H207zM15 163.6l-8.3 25.5H-20L1.6 205l-8.3 25.5L15 214.6l21.7 15.8-8.3-25.4 21.7-15.9H23.3zm91.8 0-8.3 25.5H71.7L93.4 205l-8.3 25.5 21.7-15.8 21.7 15.8-8.3-25.4 21.7-15.9h-26.8zm91.8 0-8.3 25.5h-26.8l21.7 15.8-8.3 25.5 21.7-15.8 21.7 15.8L212 205l21.7-15.9H207z"
		/>
	</>
);

const LanguagePicker = () => {
	const router = useRouter();
	const { locale } = router;

	const changeLanguage = (newLocale) => {
		const locale = newLocale;
		router.push(router.pathname, router.asPath, { locale });
	};

	return (
		<button
			aria-label="Toggle Locale"
			type="button"
			onClick={() => changeLanguage(locale === "es" ? "en" : "es")}
			value={locale}
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 512 512">
				<mask id="a">
					<circle cx="256" cy="256" r="256" fill="#fff" />
				</mask>
				<g mask="url(#a)">{locale === "es" ? <ArgentinaFlag /> : <USAFlag />}</g>
			</svg>
		</button>
	);
};

export default LanguagePicker;
