import Link from "next/link";
import {UserSvg} from '../svg/Svg'
import Button from '../ui/Button'

const Nav = ({state, action, breakpoint}) => {
	const handleChange = breakpoint ? action.bind(this) : null

	return (
		<nav className={`navigation ${state ? 'draweropen' : ''}`}>
			<ul className={'navigation__menu'}>
				<li>
					<Link href={'/services'}>
						<a onClick={() => handleChange()}>Услуги</a>
					</Link>
				</li>
				<li>
					<Link href={'/prices'}>
						<a onClick={() => handleChange()}>Цены</a>
					</Link>
				</li>
				<li>
					<Link href={'/akcii'}>
						<a onClick={() => handleChange()}>Акции</a>
					</Link>
				</li>
				<li>
					<Link href={'/specs'} q>
						<a onClick={() => handleChange()}>Специалисты</a>
					</Link>
				</li>
				<li>
					<Link href={'/spravochnik'}>
						<a onClick={() => handleChange()}>Справочник</a>
					</Link>
				</li>
			</ul>
			<div className={'navigation__userbar'}>
				<Button variant={'button-icon'} text={'Личный кабинет'} icon={<UserSvg />} />
				<Button variant={'button-primary'} text={'Запись на прием'} />
			</div>
		</nav>
	)
}

export default Nav