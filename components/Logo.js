import Link from "next/link";
import {LogoSvg} from './svg/Svg'

const Logo = () =>
	<Link href={'/'}>
	<a className={'logo'}>
		<LogoSvg/>
	</a>
	</Link>
export default Logo
