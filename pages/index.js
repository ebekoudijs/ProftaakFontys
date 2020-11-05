import Layout, { siteTitle, filler } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
const pageTitle = "Home page"

export default function Home() {
  return (
    <Layout nohome title={pageTitle}>
      <section className={utilStyles.headingMd}>
        <p>{filler}</p>
        <p>{filler}</p>
      </section>
    </Layout>
  )
}