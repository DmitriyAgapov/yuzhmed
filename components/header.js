import Logo from './Logo'
import Contacts from './Contacts'
import Search from './Search'

const Header = () => {
	return (
		<header className={'header'}>
			<Logo/>
			<Search/>
			<Contacts/>
		</header>
	)
}
export default Header