import { ReactElement } from 'react';

import ErrorPage from '@/components/pages/ErrorPage/ErrorPage';
import Layout, { RootLayout } from '@/layout';

const UnauthorizedPage = () => {
	return (
		<ErrorPage
			code='401'
			title='Unauthorized'
			description='You are not authorized to view this page.'
		/>
	);
};

UnauthorizedPage.getLayout = (page: ReactElement) => (
	<Layout>
		<RootLayout
			meta={{
				title: 'Unauthorized',
			}}
		>
			{page}
		</RootLayout>
	</Layout>
);

export default UnauthorizedPage;
