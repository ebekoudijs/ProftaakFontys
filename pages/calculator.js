import dynamic from 'next/dynamic'
import Layout, {filler} from '../components/layout'
const pageTitle = "Calculator"

const Philipcalc = dynamic(() => import('../components/philipcalc'), {
    ssr: false
})


export default function Calculator() {
    return (

          <Layout title={pageTitle}>
            <Philipcalc />
            </Layout> 
  )
}
//<button onClick={vleesSelect() }>bereken</button>