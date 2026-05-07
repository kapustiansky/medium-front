import '@/styles/globals.css';
import '@/styles/variables.css';

import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import { NextPage } from 'next/types';
import type { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

const Inter = localFont({
	src: '../../public/assets/fonts/Inter-Variable.woff2',
	display: 'swap',
});

const App = ({
	Component,
	pageProps,
}: AppProps & { Component: NextPageWithLayout }) => {
	const getLayout = Component.getLayout ?? ((page) => page);

	return (
		<>
			<style jsx global>{`
				html {
					--font-inter: ${Inter.style.fontFamily};
				}
			`}</style>
			{getLayout(<Component {...pageProps} />)}
		</>
	);
};

export default App;
