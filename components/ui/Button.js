import Link from 'next/link'
import {useEffect, useState} from "react";

export const Burger = ({props, action, state}) => {
	const [open, setOpen] = useState(false)
	const handleChange = action.bind(this)

	return (
	<div className={`burger ${state ? 'open' : 'close'}`} onClick={() => handleChange()}>
		<span className={'line'} />
		<span className={'line'} />
		<span className={'line'} />
	</div>
	)
}

const Button = (
	{
		variant = null,
		text = null, icon = null, link = "#"
	}) => {

	return (
		<Link href={link}>
			<a className={`button ${variant}`}>{icon}{text}</a>
		</Link>
	)
}
export default Button