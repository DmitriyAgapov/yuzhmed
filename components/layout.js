import Header from './header'
import Footer from './footer'
import Nav from './Nav/Nav'
import NewHead from "./head";
import {useRouter} from "next/router";
import {useEffect, useRef, useState} from "react";
import BreadcrumbItem from "./Breadcrumb/BreadcrumbItem";
import Breadcrumb from "./Breadcrumb/Breadcrumb";
const BreadCr = ({router, breadcrumbs}) => {
	return (
		<Breadcrumb>
			<BreadcrumbItem isCurrent={router.pathname === "/"} href="/">
				Главная
			</BreadcrumbItem>
			{breadcrumbs &&
				breadcrumbs.map((breadcrumb) => (
					<BreadcrumbItem
						key={breadcrumb.href}
						href={breadcrumb.href}
						isCurrent={breadcrumb.isCurrent}
					>
						{breadcrumb.label}
					</BreadcrumbItem>
				))}
		</Breadcrumb>
	)
}
export default function Layout({ children, pageProps }) {
	const router = useRouter();
	const [breadcrumbs, setBreadcrumbs] = useState();

	useEffect(() => {
		const pathWithoutQuery = router.asPath.split("?")[0];
		let pathArray = pathWithoutQuery.split("/");
		pathArray.shift();

		pathArray = pathArray.filter((path) => path !== "");

		const breadcrumbs = pathArray.map((path, index) => {
			const href = "/" + pathArray.slice(0, index + 1).join("/");
			return {
				href,
				// label: pageProps.data.meta.title,
				label: path.charAt(0).toUpperCase() + path.slice(1),
				isCurrent: index === pathArray.length - 1,
			};
		});

		setBreadcrumbs(breadcrumbs);
	}, [router.asPath]);

	const meta = pageProps.data.meta

	return (
		<>
			<NewHead {...meta}/>
			<Header />
			{router.pathname !== '/' ? <BreadCr router={router} breadcrumbs={breadcrumbs} /> : null}
			{children}
			<Footer />
		</>
	)
}