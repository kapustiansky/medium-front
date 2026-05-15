import { ReactElement } from 'react';

import Home from '@/components/pages/Home/Home';
import Layout, { RootLayout } from '@/layout';

const HomePage = () => {
	return <Home />;
};

HomePage.getLayout = (page: ReactElement) => (
	<Layout>
		<RootLayout
			meta={{
				title: 'Home',
			}}
		>
			{page}
		</RootLayout>
	</Layout>
);

export default HomePage;
