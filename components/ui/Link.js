import Link from 'next/link'

const Lnk = ({href, text}) => {
	return (
		<Link href={href}>
			<a>{text}</a>
		</Link>
	)
}
export default Lnk