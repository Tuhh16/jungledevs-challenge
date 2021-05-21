import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {

    render() {
        return(
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <meta property="og:title" content="Hapu" key="Hapu" />
                    <meta property="og:description" content="Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare." />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="http://localhost:3000/" />
                    <meta property="og:image" content="/screenshot/podcastr-home-preview.jpg" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}