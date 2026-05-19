import { ReactElement } from 'react';

import ErrorPage from '@/components/pages/ErrorPage/ErrorPage';
import Layout, { RootLayout } from '@/layout';

const ForbiddenPage = () => {
	return (
		<ErrorPage
			code='403'
			title='Forbidden'
			description='You do not have permission to access this page.'
		/>
	);
};

ForbiddenPage.getLayout = (page: ReactElement) => (
	<Layout>
		<RootLayout
			meta={{
				title: 'Forbidden',
			}}
		>
			{page}
		</RootLayout>
	</Layout>
);

export default ForbiddenPage;
