import Link from 'next/link'

const Button = (
	{
		variant = null,
		text = null, icon = null, link = "#"
	}) => {
	console.log(link)
	return (
		<Link href={link}>
			<a className={`button ${variant}`}>{icon}{text}</a>
		</Link>
	)
}
export default Button