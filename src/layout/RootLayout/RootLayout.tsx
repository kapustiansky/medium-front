import Head from 'next/head';

import Header from '../Header/Header';

interface IRootLayoutProps {
	children: React.ReactNode;
	meta: {
		title: string;
		description?: string;
		keywords?: string;
	};
}

const RootLayout = ({ children, meta }: IRootLayoutProps) => {
	return (
		<>
			<Head>
				<title>{meta.title}</title>
				{meta.description && (
					<meta name='description' content={meta.description} />
				)}
				{meta.keywords && <meta name='keywords' content={meta.keywords} />}
			</Head>

			<Header />
			<main>{children}</main>
			{/* <Footer /> */}
		</>
	);
};

export default RootLayout;
