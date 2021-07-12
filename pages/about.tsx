import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About - {siteTitle}</title>
      </Head>

      <section>
        <h1 className={utilStyles.headingXl}>About</h1>
        <p>This is static page.</p>
      </section>
    </Layout>
  );
}
