import { ReactElement } from 'react';

import Login from '@/components/pages/Login/Login';
import Layout, { RootLayout } from '@/layout';

const LoginPage = () => {
	return <Login />;
};

LoginPage.getLayout = (page: ReactElement) => (
	<Layout>
		<RootLayout
			meta={{
				title: 'Login',
			}}
		>
			{page}
		</RootLayout>
	</Layout>
);

export default LoginPage;
