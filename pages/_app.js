import "@/styles/globals.css";
import { Layout } from "@/components";
import React from 'react'

function App({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
