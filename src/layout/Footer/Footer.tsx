import cl from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={cl.footer}>
			<div className={`${cl.container} container-1280`}>
				<span>conduit&emsp;</span>
				An interactive learning project from{' '}
				<a href='https://webdew.me' target='_blank'>
					WebdeW
				</a>
				. Code & design licensed under MIT.
			</div>
		</footer>
	);
};

export default Footer;
