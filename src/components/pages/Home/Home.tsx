import Image from 'next/image';

import cl from './Home.module.css';

const Home = () => {
	return (
		<>
			<section>
				<div className={cl.hero}>
					<Image
						src='/assets/images/hero.png'
						alt='Hero Image'
						fill
						sizes='100vw'
						priority
					/>

					<div className={cl.heroContent}>
						<h1 className={cl.heroTitle}>conduit</h1>
						<p className={cl.heroSubtitle}>A place to share your knowledge.</p>
					</div>
				</div>
			</section>
			<section className='container-1280'>section</section>
		</>
	);
};

export default Home;
