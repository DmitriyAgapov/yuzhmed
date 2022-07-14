import Logo from './Logo'
import Contacts from './Contacts'
import Search from './Search'
import {useWindowSize} from "../utils/utils";
import {Burger} from "./ui/Button";
import {useEffect, useState} from "react";
import {CallSvg, UserSvg} from "./svg/Svg";
import Nav from "./Nav/Nav";
import {useRef} from "react";

const MobileIcons = () => {
	return (
		<div className={'header__mobile-icons'}>
			<UserSvg/>
			<CallSvg/>
		</div>
	)
}
const Header = () => {
	const [state, setState] = useState(false);
	const {viewPort, windowSize} = useWindowSize();
	// console.log(viewPort, windowSize)

	const handleBurger = () => {
		viewPort.tablet || viewPort.mobile ? setState(true) : setState(false);
	};

	useEffect(handleBurger, [viewPort]);
	const [openDrawer, setOpenDrawer] = useState(false);
	const drawerRef = useRef(null);

	let toggleDraw = () => {
		setOpenDrawer(!openDrawer)
	}

	useEffect(() => {
		/* Close the drawer when the user clicks outside of it */
		const closeDrawer = event => {
			if (drawerRef.current && drawerRef.current.contains(event.target)) {
				return;
			}

			// setOpenDrawer(false);
		};

		document.addEventListener("mousedown", closeDrawer);
		return () => document.removeEventListener("mousedown", closeDrawer);
	}, []);

	return (
		<>
			<header className={`header ${openDrawer ? 'draweropen' : ''}`}>
				{state ? <Burger state={openDrawer} action={toggleDraw}/> : null}
				<Logo/>
				{!state ? <Search/> : null}
				{!state ? <Contacts/> : null}
				{state ? <MobileIcons/> : null}
			</header>
			<Nav action={toggleDraw} state={openDrawer}/>
		</>
	)
}
export default Header