import React from 'react';
import { Link } from 'react-router-dom';
import mainImage from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components/index';

const LandingPage = () => {
	return (
		<Wrapper>
			<nav>
				<Logo />
			</nav>
			<div className='container page'>
				{/* info */}
				<div className='info'>
					<h1>
						job <span className=''>tracking</span> app
					</h1>
					<p>
						I'm baby blue bottle tilde kale chips photo booth offal
						taiyaki narwhal. Shoreditch etsy flexitarian, cliche
						umami chicharrones literally Brooklyn man braid beard
						hashtag pok pok hot chicken poutine direct trade.{' '}
					</p>
					<Link to='/register' class='btn btn-hero'>
						Login/Register
					</Link>
				</div>
				{/* end info */}
				{/* image */}
				<img src={mainImage} alt='job hunt' className='img main-img' />
				{/* end image */}
			</div>
		</Wrapper>
	);
};

export default LandingPage;
