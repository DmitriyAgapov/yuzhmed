import Button from "./ui/Button";
import {InstaSvg, TelegramSvg, VkSvg} from "./svg/Svg";

const Social = () => {
	return (
		<>
			<Button variant={'button-icon'} href={"#"} icon={<InstaSvg />}/>
			<Button variant={'button-icon'} href={"#"} icon={<VkSvg />}/>
			<Button variant={'button-icon'} href={"#"} icon={<TelegramSvg />}/>
		</>
	)
}
export default Social