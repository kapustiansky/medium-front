import { ReactElement } from 'react';

import ErrorPage from '@/components/pages/ErrorPage/ErrorPage';
import Layout, { RootLayout } from '@/layout';

const InternalServerErrorPage = () => {
	return (
		<ErrorPage
			code='500'
			title='Internal Server Error'
			description='An unexpected error has occurred.'
		/>
	);
};

InternalServerErrorPage.getLayout = (page: ReactElement) => (
	<Layout>
		<RootLayout
			meta={{
				title: 'Internal Server Error',
			}}
		>
			{page}
		</RootLayout>
	</Layout>
);

export default InternalServerErrorPage;
