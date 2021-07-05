import { useRouter } from "next/router";
import en from "../locales/en";
import es from "../locales/es";

const useLocale = () => {
    const router = useRouter();
    const { locale } = router;

	const translation = locale === "es" ? es : en;
    
    return translation
}

export default useLocale;