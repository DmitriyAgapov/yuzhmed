import Link from "next/link";
import {LogoSvg} from './svg/Svg'

const Logo = () =>
	<div className={'logo'}>
		<Link href={'#'}>
			<LogoSvg/>
		</Link>
	</div>

export default Logo
