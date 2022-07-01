import Link from 'next/link'

const Button = (
	variant = null,
	text, icon, href) => {
	return (
		<Link href={href}>
			<a className={`button ${variant}`}>{text}</a>
		</Link>
	)
}
export default Button