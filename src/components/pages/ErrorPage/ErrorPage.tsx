import cl from './ErrorPage.module.css';

interface IErrorPageProps {
	code: string;
	title: string;
	description: string;
}

const ErrorPage = ({ code, title, description }: IErrorPageProps) => {
	return (
		<div className={`${cl.container} container-1280`}>
			<h1 className={cl.title}>{code}</h1>

			<h2 className={cl.subtitle}>{title}</h2>

			<p className={cl.description}>{description}</p>
		</div>
	);
};

export default ErrorPage;
