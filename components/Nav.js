import Link from "next/link";
import {UserSvg} from './svg/Svg'
import Button from './ui/Button'
const Nav = () => {
	return (
		<nav className={'navigation'}>
			<ul className={'navigation__menu'}>
				<li>
					<Link href={'/services'}>
						<a>Услуги</a>
					</Link>
				</li>
				<li>
					<Link href={'/prices'}>
						<a>Цены</a>
					</Link>
				</li>
				<li>
					<Link href={'/akcii'}>
						<a>Акции</a>
					</Link>
				</li>
				<li>
					<Link href={'/specialisti'}>
						<a>Специалтсты</a>
					</Link>
				</li>
				<li>
					<Link href={'/spravochnik'}>
						<a>Справочник</a>
					</Link>
				</li>
			</ul>
			<ul>
				<li>
					<Button variant={'button__primary'} text={'Личный кабинет'} icon={<UserSvg />} />
				</li>
				<li>
					<Button variant={'button__primary'} text={'Личный кабинет'} icon={<UserSvg />} />
				</li>
			</ul>
		</nav>
	)
}

export default Nav