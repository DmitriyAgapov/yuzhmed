import Lnk from "./ui/Link";
import Logo from "./Logo";
import Button from "./ui/Button";
import {InstaSvg, MailSvg, PhoneSvg, TelegramSvg, VkSvg} from "./svg/Svg";

const Footer = () => {
	return (
		<footer className={'footer'}>
			<Logo />
			<div className={'footer__menu'}>
				<h3>О нас</h3>
				<ul>
					<li><Lnk href={"#"} text={'Специалисты'}/></li>
					<li><Lnk href={"#"} text={'Услуги'}/></li>
					<li><Lnk href={"#"} text={'Новости'}/></li>
				</ul>
			</div>
			<div className={'footer__menu'}>
				<h3>Пациентам</h3>
				<ul>
					<li><Lnk href={"#"} text={'Записаться на прием'}/></li>
					<li><Lnk href={"#"} text={'Задать вопрос врачу'}/></li>
					<li><Lnk href={"#"} text={'Личный кабинет'}/></li>
					<li><Lnk href={"#"} text={'Справочник'}/></li>
				</ul>
			</div>
			<div className={'footer__menu'}>
				<h3>Контакты</h3>
				<ul>
					<li><Button variant={'button__icon'} href={"info@юж-мед.рф"} text={'info@юж-мед.рф'} icon={<MailSvg />}/></li>
					<li><Button variant={'button__icon'} href={"#"} text={'8 (35134) 5 60 77'} icon={<PhoneSvg />}/></li>
					<li style={{display: "flex", gap: '.625rem'}}>
						<Button variant={'button__icon'} href={"#"} icon={<InstaSvg />}/>
						<Button variant={'button__icon'} href={"#"} icon={<VkSvg />}/>
						<Button variant={'button__icon'} href={"#"} icon={<TelegramSvg />}/>
					</li>
				</ul>
			</div>

		</footer>
	)
}

export default Footer