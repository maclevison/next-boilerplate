import Document, {
    DocumentContext,
    Html,
    Head,
    Main,
    NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />)
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html lang="pt-BR">
                <Head>
                    <link rel="shortcut icon" href="/images/favicon.ico" />
                    <link rel="apple-touch-icon" href="/images/favicon.ico" />
                    <meta name="theme-color" content="#06092b" />
                    <meta
                        name="description"
                        content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
                    />
                    <title>Next Boilerplate</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
