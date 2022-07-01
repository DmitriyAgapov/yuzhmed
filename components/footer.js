import Lnk from "./ui/Link";
import Logo from "./Logo";

const Footer = () => {
	return (
		<footer>
			<Logo />
			<div className={'footer__menu'}>
				<h3>О нас</h3>
				<ul>
					<li><Lnk text={'Специалисты'}/></li>
					<li><Lnk text={'Услуги'}/></li>
					<li><Lnk text={'Новости'}/></li>
				</ul>
			</div>
			<div className={'footer__menu'}>
				<h3>Пациентам</h3>
				<ul>
					<li><Lnk text={'Записаться на прием'}/></li>
					<li><Lnk text={'Задать вопрос врачу'}/></li>
					<li><Lnk text={'Личный кабинет'}/></li>
					<li><Lnk text={'Справочник'}/></li>
				</ul>
			</div>
			<div className={'footer__menu'}>
				<h3>Контакты</h3>
				<ul>
					<li><Lnk text={'Специалисты'}/></li>
					<li><Lnk text={'Услуги'}/></li>
					<li><Lnk text={'Новости'}/></li>
				</ul>
			</div>

		</footer>
	)
}

export default Footer