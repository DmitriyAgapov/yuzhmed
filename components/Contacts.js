import {PlaceSvg, PhoneSvg, ClockSvg} from "./svg/Svg";

const Contacts = () => {
	return (
		<ul className={'contacts'}>
			<li>
				<PlaceSvg className={'icon'}/> г. Южноуральск ул. Мира, д. 51, пом. 13
			</li>
			<li>
				<ClockSvg className={'icon'}/> 7:00 - 19:00, без выходных
			</li>
			<li>
				<PhoneSvg className={'icon'}/> <a href="tel:+73513456077">8 (35134) 5 60 77</a>
			</li>
		</ul>
	)
}

export default Contacts