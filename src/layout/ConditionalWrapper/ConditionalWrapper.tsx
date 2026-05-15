import Link from 'next/link';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';

interface IConditionalWrapperProps {
	href: string;
	children: ReactNode;
	activeClassName?: string;
	inactiveClassName?: string;
}

const ConditionalWrapper = ({
	href,
	children,
	activeClassName,
	inactiveClassName,
}: IConditionalWrapperProps) => {
	const router = useRouter();
	const isActive =
		href === '/' ? router.pathname === '/' : router.pathname.startsWith(href);
	const className = isActive
		? (activeClassName ?? inactiveClassName)
		: inactiveClassName;

	if (isActive) return <span className={className}>{children}</span>;

	return (
		<Link href={href} className={className}>
			{children}
		</Link>
	);
};

export default ConditionalWrapper;
