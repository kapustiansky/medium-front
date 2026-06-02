import cl from './ErrorText.module.css';

interface IErrorTextProps {
	text: string;
	position?: 'center' | 'left';
}

const ErrorText = ({ text, position = 'center' }: IErrorTextProps) => {
	return <span className={`${cl.error} ${cl[position]}`}>{text}</span>;
};

export default ErrorText;
