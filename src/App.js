import React from 'react';
import fish from './images/freelance-fish-logo.png';
import peeps from './images/teamwork_white_2.png';
import peeps4 from './images/teamwork_white_4.png';
import peeps5 from './images/teamwork_white_5.png';

import clientTree from './images/clientTree.png';
function App() {
	return (
		<main>
			<nav className='db dt-l w-100 border-box pa3 ph5-l shadow-1'>
				<p className='db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l' title='Home'>
					<img src={fish} className='dib w3 h-auto mr3' alt='Freelance Fish' />
				</p>
				<div className='db dtc-l v-mid w-100 w-75-l tc tr-l'>
					<p className='link dim dark-gray f6 f5-l dib mr3 mr4-l pointer' href='#' title='Blog'>
						Pricing
					</p>
					<p className='link dim dark-gray f6 f5-l dib mr3 mr4-l pointer' href='#' title='Blog'>
						Blog
					</p>
					<p className='link dim dark-gray f6 f5-l dib mr3 mr4-l pointer' href='#' title='Blog'>
						Contact
					</p>
					<p className='link dim dark-gray f6 f5-l dib b pointer' href='#' title='Contact'>
						Sign In
					</p>
				</div>
			</nav>

			<section>
				<div className='w-100 w-50-ns pa4 db dib-ns'>
					<img src={peeps} className='dib w-100 h-auto pt4' alt='peeps working together' />
				</div>
				<div className='w-100 w-50-ns white db dib-ns'>
					<div id='slantLeft' className='bg-blue pa3 pv4'>
						<div className='measure center tl pl4-ns'>
							<h1 className='f2  lh-title fw9 '>Finding Clients doesn't have to be so hard.</h1>

							<h2 className='f4 fw6  lh-title '>
								The RescueTime Productivity Challenge is the ultimate productivity training system for
								anyone who wants to transform their days from overwhelming and busy to under control and
								truly productive in just 1 month.
							</h2>

							<a className=' link dim br-pill ph4 pv3 mb2 dib white bg-red b tracked  mt4' href='#0'>
								Join the challenge for $99
							</a>

							<p className='f4 fw6   lh-title '>Registration is now open.</p>
							<p className='f4 fw6   lh-title '>Course starts Jan. 13th, 2020.</p>
						</div>
					</div>
				</div>
			</section>

			<section class='blue pa4'>
				<blockquote class='ph0 f4 f1-ns measure-narrow center'>
					<p class='fw9 lh-copy lh-title-ns'>
						The punches of Claude Garamond, cut around 1530 in Paris, are simply unsurpassed in their
						clarity, readability and beauty.
					</p>
				</blockquote>
				<p class='f6 f4-ns lh-copy measure center'>
					Apart from that, the roman minuscule has been our way of writing for hundreds of years. What
					followed were merely fashionable variations, here and there even deformations, of the noble basic
					form, but no improvement whatever. The punches of Claude Garamond, cut around 1530 in Paris, are
					simply unsurpassed in their clarity, readability and beauty. Garamond appeared on the scene at a
					time when the occidental book, as an object, cast off its medieval ponderousness and took up the
					form which today is still the best: the slender and upright rectangular body, comprising folded
					sheets stitched or sewn at the back, in a cover whose protruding edges protect the trimmed pages.
				</p>
			</section>

			<section class='measure-wide db center f5 f4-ns lh-copy tc'>
				<img class='db w-100 mt4' src={clientTree} alt='Client Tree Platform' />
				<a className=' tc link dim br-pill ph4 pv3 mb2 dib white bg-red b mt5' href='#0'>
					Sign up for the challenge Today!
				</a>
			</section>

			<section class='mw8 center ph3 ph5-ns tc br2 pv5 bg-yellow blue mv5 '>
				<h3 class='fw6 f3 f2-ns lh-title mt0 mb4'>Over the next 4 weeks, you’ll learn how to:</h3>
				<ul className='tl'>
					<li class='fw2 f4 lh-copy mt0 mb3'>
						<b>Put together a service offering that specialises on what you do best</b>
					</li>
					<li class='fw2 f4 lh-copy mt0 mb3'>
						<b>Reach out to potential clients and find leads that will benefit from what you do.</b>
					</li>
					<li class='fw2 f4 lh-copy mt0 mb3'>
						<b>
							Learn how to take people who are interested in working with you and turn them into paying
							clients.
						</b>
					</li>
					<li class='fw2 f4 lh-copy mt0 mb3'>
						<b>
							Get great testimonials and learn from your mistakes to continuously become a better
							freelancer.
						</b>
					</li>
				</ul>
			</section>

			<section>
				<blockquote class='ph0 f4 f1-ns measure-narrow center'>
					<p class='fw9 lh-copy lh-title-ns tc'>The punches of Claude Garamond, cut around 1530 in Paris.</p>
				</blockquote>
				<div className='w-100 w-50-ns pa4 db dib-ns'>
					<img src={peeps4} className='dib w-100 h-auto pt4' alt='peeps working together' />
				</div>
				<div className='w-100 w-50-ns blue db dib-ns'>
					<div className='measure center tl pl4-ns'>
						<p className='fw4 f4 lh-copy mt0 mb3'>
							If you want to lose weight you track your eating. If you want to save money you track your
							spending. If you want to be more productive you track your time.
						</p>
						<p className='fw4 f4 lh-copy mt0 mb3'>
							If you want to lose weight you track your eating. If you want to save money you track your
							spending. If you want to be more productive you track your time.
						</p>
						<p className='fw4 f4 lh-copy mt0 mb3 '>
							If you want to lose weight you track your eating. If you want to save money you track your
							spending. If you want to be more productive you track your time.
						</p>
					</div>
				</div>
			</section>

			<section class='mw8 center ph3 ph5-ns tc br2 pv5 bg-blue white mv5 '>
				<h3 class='fw6 f3 f2-ns lh-title mt0 mb4'>In one month, you'll walk away with:</h3>
				<ul className='tl'>
					<li class='fw2 f4 lh-copy mt0 mb3'>
						<b>Put together a service offering that specialises on what you do best</b>
					</li>
					<li class='fw2 f4 lh-copy mt0 mb3'>
						<b>Reach out to potential clients and find leads that will benefit from what you do.</b>
					</li>
					<li class='fw2 f4 lh-copy mt0 mb3'>
						<b>
							Learn how to take people who are interested in working with you and turn them into paying
							clients.
						</b>
					</li>
					<li class='fw2 f4 lh-copy mt0 mb3'>
						<b>
							Get great testimonials and learn from your mistakes to continuously become a better
							freelancer.
						</b>
					</li>
				</ul>
				<a className=' tc link dim br-pill ph4 pv3 mb2 dib white bg-red b mt5' href='#0'>
					Sign up for the challenge Today!
				</a>
			</section>

			<section>
				<div className='w-100 w-50-ns pa4 db dib-ns'>
					<img src={peeps5} className='dib w-100 h-auto pt4' alt='peeps working together' />
				</div>
				<div className='w-100 w-50-ns blue db dib-ns'>
					<div className='measure center tl pl4-ns'>
						<p className='fw4 f4 lh-copy mt0 mb3'>
							If you want to lose weight you track your eating. If you want to save money you track your
							spending. If you want to be more productive you track your time.
						</p>
						<p className='fw4 f4 lh-copy mt0 mb3'>
							If you want to lose weight you track your eating. If you want to save money you track your
							spending. If you want to be more productive you track your time.
						</p>
						<p className='fw4 f4 lh-copy mt0 mb3 '>
							If you want to lose weight you track your eating. If you want to save money you track your
							spending. If you want to be more productive you track your time.
						</p>
					</div>
				</div>
			</section>

			<section class='mw8 center ph3 ph5-ns tc br2 pv5 bg-yellow blue mv5 '>
				<h3 class='fw6 f3 f2-ns lh-title mt0 mb4'>The course includes:</h3>
				<ul className='tl'>
					<li class='fw2 f4 lh-copy mt0 mb3'>
						<b>16 high-quality video lessons, broken up into 4 tightly focused weekly themes. </b>Our
						easy-to-follow formula takes you from chaotic days to feeling confident and under control.
					</li>
					<li class='fw2 f4 lh-copy mt0 mb3'>
						<b>16 high-quality video lessons, broken up into 4 tightly focused weekly themes. </b>Our
						easy-to-follow formula takes you from chaotic days to feeling confident and under control.
					</li>
					<li class='fw2 f4 lh-copy mt0 mb3'>
						<b>16 high-quality video lessons, broken up into 4 tightly focused weekly themes. </b>Our
						easy-to-follow formula takes you from chaotic days to feeling confident and under control.
					</li>
					<li class='fw2 f4 lh-copy mt0 mb3'>
						<b>16 high-quality video lessons, broken up into 4 tightly focused weekly themes. </b>Our
						easy-to-follow formula takes you from chaotic days to feeling confident and under control.
					</li>
					<li class='fw2 f4 lh-copy mt0 mb3'>
						<b>16 high-quality video lessons, broken up into 4 tightly focused weekly themes. </b>Our
						easy-to-follow formula takes you from chaotic days to feeling confident and under control.
					</li>
					<li class='fw2 f4 lh-copy mt0 mb3'>
						<b>16 high-quality video lessons, broken up into 4 tightly focused weekly themes. </b>Our
						easy-to-follow formula takes you from chaotic days to feeling confident and under control.
					</li>
				</ul>
			</section>

			<section class='bg-washed-green'>
				<div class='mw9 center pa4 pt5-ns ph7-l'>
					<h3 class='f2 f1-m f-headline-l measure-narrow lh-title mv0'>
						<h1 className='f2  lh-title fw9 '>Take a peek inside The Productivity Challenge</h1>
					</h3>
					<h4 class='f3 fw1 georgia i mb5'>
						The course is structured on a weekly basis to allow time to gather data and insights for later
						lessons. However, once a lesson is live you have access to it forever and can complete it at
						your own pace.
					</h4>
					<article>
						<div class='flex flex-column flex-row-ns mb5'>
							<div class='pr3-ns mb4 mb0-ns w-100 w-40-ns'>
								<img src={peeps} class='db' alt='freelance stuff' />
							</div>
							<div class='w-100 w-60-ns pl3-ns'>
								<h1 class='f3 b  mt0 lh-title'>Knowledge</h1>
								<p class='f6 f5-l lh-copy'>
									The tech giant says it is ready to begin planning a quantum computer, a powerful cpu
									machine that relies on subatomic particles instead of transistors.
								</p>
							</div>
						</div>

						<div class='flex flex-column flex-row-ns mb5'>
							<div class='w-100 w-60-ns pl3-ns'>
								<h1 class='f3 b  mt0 lh-title'>Tools</h1>
								<p class='f6 f5-l lh-copy'>
									The tech giant says it is ready to begin planning a quantum computer, a powerful cpu
									machine that relies on subatomic particles instead of transistors.
								</p>
							</div>
							<div class='pr3-ns mb4 mb0-ns w-100 w-40-ns'>
								<img src={peeps4} class='db' alt='freelance stuff' />
							</div>
						</div>

						<div class='flex flex-column flex-row-ns'>
							<div class='pr3-ns mb4 mb0-ns w-100 w-40-ns'>
								<img src={peeps5} class='db' alt='freelance stuff' />
							</div>
							<div class='w-100 w-60-ns pl3-ns'>
								<h1 class='f3 b  mt0 lh-title'>Community</h1>
								<p class='f6 f5-l lh-copy'>
									The tech giant says it is ready to begin planning a quantum computer, a powerful cpu
									machine that relies on subatomic particles instead of transistors.
								</p>
							</div>
						</div>
					</article>
				</div>
			</section>

			<section className='w-100'>
				<blockquote class='ph0 f4 f1-ns measure-narrow center'>
					<p class='fw9 lh-copy lh-title-ns tc'>Pricing</p>
				</blockquote>

				<h4 class='f3 fw1 georgia i mb5 measure-wide center'>
					The course is structured on a weekly basis to allow time to gather data and insights for later
					lessons. However, once a lesson is live you have access to it forever and can complete it at your
					own pace.
				</h4>

				<div className='w-100 w-50-ns  db dib-ns'>
					<article class='mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10'>
						<div class='tc pb3'>
							<dl class='db dib-l w-auto-l lh-title'>
								
								<dd class='f2 f-subheadline-l fw6 ml0'>$99</dd>
                {/* <dd class='f6 fw4 ml0'>Something something</dd> */}
							</dl>
							<h1 class='f4'>Email Course</h1>
							<hr class='mw3 bb bw1 b--black-10' />
						</div>
						<ul>
							<li class='lh-copy measure center f6 black-70'>All 4 in-depth learning modules</li>
							<li class='lh-copy measure center f6 black-70'>
								Lifetime access to the Double Your Freelancing Community live chat
							</li>

							<li class='lh-copy measure center f6 black-70'>60-Day Accountability Follow-up Course </li>
							<li class='lh-copy measure center f6 black-70'>21 Case Study Interviews </li>

							<li class='lh-copy measure center f6 black-70'>
								Ready-To-Go Templates and Documents (Valued at $3,000){' '}
							</li>
							<li class='lh-copy measure center f6 black-70'>
								Swipe Copy For Each Part Of The Sales Process{' '}
							</li>

							<li class='lh-copy measure center f6 black-70'>Lifetime updates </li>
							<li class='lh-copy measure center f6 black-70'>
								1-on-1 Coaching Session with Brennan Dunn{' '}
							</li>
						</ul>
            <div className="w-100 tc">
            <a className='link dim br-pill ph4 pv3 mb2 dib white bg-red b mt5' href='#0'>
							Get Access
						</a>
            </div>
					
					</article>
				</div>
				<div className='w-100 w-50-ns blue db dib-ns'>
					<article class='mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10'>
						<div class='tc'>
							<dl class='db dib-l w-auto-l lh-title'>
								<dd class='f2 f-subheadline-l fw6 ml0 strike'>$350</dd>
								<dd class='f6 fw4 ml0'>$250 till Jan 12th 2020</dd>
							</dl>
							<h1 class='f4'>Email Course + Weekly Coaching</h1>
							<hr class='mw3 bb bw1 b--black-10' />
						</div>
						<ul>
							<li class='lh-copy measure center f6 black-70'>All 4 in-depth learning modules</li>
							<li class='lh-copy measure center f6 black-70'>
								Lifetime access to the Double Your Freelancing Community live chat
							</li>

							<li class='lh-copy measure center f6 black-70'>60-Day Money back guarantee </li>
							<li class='lh-copy measure center f6 black-70'>21 Case Study Interviews </li>

							<li class='lh-copy measure center f6 black-70'>
								Ready-To-Go Templates and Documents
							</li>
							<li class='lh-copy measure center f6 black-70'>
								Swipe Copy For Each Part Of The Sales Process{' '}
							</li>

							<li class='lh-copy measure center f6 black-70'>Lifetime updates </li>
							<li class='lh-copy measure center f6 black-70'>
								Weekly 1-on-1 Coaching Session
							</li>
						</ul>
						<div className="w-100 tc">
            <a className='link dim br-pill ph4 pv3 mb2 dib white bg-red b mt5' href='#0'>
							Get Access
						</a>
            </div>
					</article>
				</div>
			</section>

			<section>
				<article className='w-100 bg-blue mv4'>
					<div className='w-75-ns tc white pa5-ns pa3 center'>
						<blockquote class='athelas ml0 mt0 pl4 black-90 bw2 white '>
							<p class='f5 f4-m f3-l lh-copy measure mt0'>
								Discipline in typography is a prime virtue. Individuality must be secured by means that
								are rational. Distinction needs to be won by simplicity and restraint. It is equally
								true that these qualities need to be infused wiht a certain spirit and vitality, or they
								degenerate into dullness and mediocrity.
							</p>
							<cite class='f6 ttu tracked fs-normal'>―Stanley Morison</cite>
						</blockquote>
					</div>
				</article>
			</section>
			<footer class='pv4 ph3 ph5-m ph6-l mid-gray'>
				<small class='f6 db tc'>
					© 2019 <b class='ttu'>Freelance Fish</b>, All Rights Reserved
				</small>
				<div class='tc mt3'>
					<a href='/language/' title='Language' class='f6 dib ph2 link mid-gray dim'>
						Blog
					</a>
					<a href='/terms/' title='Terms' class='f6 dib ph2 link mid-gray dim'>
						Contact
					</a>
					<a href='/privacy/' title='Privacy' class='f6 dib ph2 link mid-gray dim'>
						Privacy
					</a>
				</div>
			</footer>
		</main>
	);
}

export default App;
