import { AppProps } from 'next/app'
import { Head } from 'next/document'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Next Boilerplate</title>
            </Head>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    )
}

export default App
