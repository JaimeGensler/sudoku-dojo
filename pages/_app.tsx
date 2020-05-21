import { AppProps } from 'next/app';
import Head from 'next/head';
import 'antd/dist/antd.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
