import { Mailchimp } from './Mailchimp';
import React from 'react';
import peeps from '../images/teamwork_white_2.png';

export function Hero() {
<<<<<<< HEAD
  return (
    <section>
      <div className="w-100 w-50-ns pa4 db dib-ns">
        <img
          src={peeps}
          className="dib w-100 h-auto pt4"
          alt="peeps working together"
        />
      </div>
      <div className="w-100 w-50-ns white db dib-ns">
        <div id="slantLeft" className="bg-blue pa3 pv6">
          <div className="measure center tl pl4-ns">
            <h1 className="f2 lh-title fw9 ">
              Find your next project as a professional freelancer in 1 month.
            </h1>
            <h2 className="f4 fw6  lh-title ">
              A free 4 week programme designed to help people set up a
              professional freelancing practice and build their own list of
              clients from scratch.
            </h2>
=======
	return (
		<section>
			<div className='w-100 w-50-ns pa4 db dib-ns'>
				<img src={peeps} className='dib w-100 h-auto pt4' alt='peeps working together' />
			</div>
			<div className='w-100 w-50-ns white db dib-ns'>
				<div id='slantLeft' className='bg-blue pa3 pv6'>
					<div className='measure center tl pl4-ns'>
						<h1 className='f2 lh-title fw9 '>
							
							Find your next project as a professional freelancer in 1 Month.
						</h1>
						<h2 className='f4 fw6  lh-title '>
							A free 4 week programme designed to help people set up a professional freelancing
							practice and build their own list of clients from scratch.
						</h2>
>>>>>>> deb718dc0624a6f1cedf765437f01034680b3c70

            <Mailchimp />
            <p className="f4 fw6   lh-title ">
              Next Course begins on Jan. 13th, 2020.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
