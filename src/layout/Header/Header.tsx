import Image from 'next/image';

import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper';
import cl from './Header.module.css';

const Header = () => {
	return (
		<header className={cl.header}>
			<div className={`${cl.container} container-1280`}>
				<ConditionalWrapper href='/' inactiveClassName={cl.logo}>
					<Image
						src='/assets/icons/logo.svg'
						alt='Logo'
						width={96}
						height={27}
					/>
				</ConditionalWrapper>
				<nav className={cl.nav}>
					<ul>
						<li>
							<ConditionalWrapper
								href='/'
								activeClassName={cl.active}
								inactiveClassName={cl.inactive}
							>
								Home
							</ConditionalWrapper>
						</li>
						<li>
							<ConditionalWrapper
								href='/login'
								activeClassName={cl.active}
								inactiveClassName={cl.inactive}
							>
								Sign in
							</ConditionalWrapper>
						</li>
						<li>
							<ConditionalWrapper
								href='/registration'
								activeClassName={cl.active}
								inactiveClassName={cl.inactive}
							>
								Sign up
							</ConditionalWrapper>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
