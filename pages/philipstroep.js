import Link from 'next/link'
import dynamic from 'next/dynamic'
import Layout, {filler} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
const pageTitle = "De troep van Philip:"

const Philipcalc = dynamic(() => import('../components/philipcalc'), {
    ssr: false
})


export default function FirstPost() {
    return (

          <Layout title={pageTitle}>
            <Philipcalc />
            </Layout> 
  )
}
//<button onClick={vleesSelect() }>bereken</button>