import '../styles/globals.scss'
import Layout from "../components/layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BreadcrumbItem from "../components/Breadcrumb/BreadcrumbItem";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

function MyApp({ Component, pageProps }) {

  return  (
      <Layout pageProps={pageProps}>

        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
