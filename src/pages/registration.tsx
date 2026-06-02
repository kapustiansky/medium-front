import { ReactElement } from 'react';

import Registration from '@/components/pages/Registration/Registration';
import Layout, { RootLayout } from '@/layout';

const RegistrationPage = () => {
	return <Registration />;
};

RegistrationPage.getLayout = (page: ReactElement) => (
	<Layout>
		<RootLayout
			meta={{
				title: 'Registration',
			}}
		>
			{page}
		</RootLayout>
	</Layout>
);

export default RegistrationPage;
