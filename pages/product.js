import Link from 'next/link'
import Head from 'next/head'
import Layout, {filler} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
const pageTitle = "Het product"


export default function FirstPost() {
  return (
    <>
      <Layout title={pageTitle}>
              <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YjDmFDipWTw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Layout> 
    </>
  )
}