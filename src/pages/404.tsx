import { ReactElement } from 'react';

import ErrorPage from '@/components/pages/ErrorPage/ErrorPage';
import Layout, { RootLayout } from '@/layout';

const NotFoundPage = () => {
	return (
		<ErrorPage
			code='404'
			title='Page Not Found'
			description='The page you are looking for does not exist.'
		/>
	);
};

NotFoundPage.getLayout = (page: ReactElement) => (
	<Layout>
		<RootLayout
			meta={{
				title: 'Not Found',
			}}
		>
			{page}
		</RootLayout>
	</Layout>
);

export default NotFoundPage;
