import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import React from 'react';
import peeps5 from './images/teamwork_white_5.png';
import { Mailchimp } from './components/Mailchimp';
import clientTree from './images/clientTree.png';
import { Header } from './components/Header';
import peeps7 from './images/teamwork_white_7.png';
import peeps12 from './images/teamwork_white_12.png';
import peeps15 from './images/teamwork_white_15.png';
import peeps14 from './images/teamwork_white_14.png';
import Checkout1 from './checkout1.js';
import Checkout2 from './checkout2.js';

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <section class="blue pa4">
        <blockquote class="ph1 f6 f2-ns b measure center">
          The Freelance Field Guide is for anyone who wants help setting up a
          professional freelance practice. We show you how to take control of
          your freelancing career and start building your own list of
          well-paying clients in 30 days.
        </blockquote>
        <p class="f6 f4-ns lh-copy measure center mt5-ns">
          Have you been meaning to start your freelancing business for a while
          now? Bought a bunch of books and courses but none have helped actually
          get things off the ground ?
          <p class="f6 f4-ns lh-copy measure center">
            If you are still uncertain about how to position yourself, put your
            website together, find clients, draft proposals, sell your services,
            onboarding new clients, establish clear milestones and deadline, get
            testimonials, and handle all the accounting stuff, then you should
            think about signing up to our course.
          </p>
          <p class="f6 f4-ns lh-copy measure center">
            Freelancing is about more than just being good at what you do.You
            have to run a business while you do what you do. Without an
            understanding of some basic principles, you're going to make a lot
            of easily avoidable to mistakes.
          </p>
          <p class="f6 f4-ns lh-copy measure center">
            Our program is thoughtfully designed to help you avoid all the
            common mistakes most freelancers make when they start out.
          </p>
        </p>
      </section>

      <section class="mw8 center ph3 ph5-ns tc br2 pv5 bg-yellow blue mv5 ">
        <h3 class="fw6 f3 f2-ns lh-title mt0 mb4">
          Over the next 4 weeks, you’ll learn how to:
        </h3>
        <ul className="tl">
          <li class="fw4 f4 lh-copy mt0 mb3">
            <b>Position yourself</b> with a clear service offering that explains
            what you do best and who your target clientele are
          </li>

          <li class="fw4 f4 lh-copy mt0 mb3">
            <b>Build a list of potential clients</b> and start reaching out to
            them about what you do and how it can help them.
          </li>
          <li class="fw4 f4 lh-copy mt0 mb3">
            <b>Sell your services </b> by learning how to take people who are
            interested in working with you and turning them into paying clients.
          </li>
          <li class="fw4 f4 lh-copy mt0 mb3">
            <b>Collect amazing testimonials</b>, write case studies of your
            projects and put a system in place to learn from your mistakes and
            continuously become a better freelancer.
          </li>
        </ul>
      </section>

      <section>
        <blockquote class="ph0 f4 f1-ns measure-narrow center fw9 lh-copy lh-title-ns tc">
          We even built our own custom platform to help you track your progress.
        </blockquote>
        <div className="w-100 w-50-ns pa4 db dib-ns">
          <img
            src={clientTree}
            className="dib w-100 h-auto pt4"
            alt="custom software platform"
          />
        </div>

        <div className="w-100 w-50-ns blue db dib-ns">
          <div className="tl pl4-ns pa3 measure">
            <p className="fw4 f4 lh-copy mt0 mb3 ">
              The platform is designed to help you complete each week's
              exercises. At the same time it acts management portal and helps
              you:
            </p>
            <ul className="tl">
              <li class="fw4 f4 lh-copy mt0 mb3">
                <b>Build a simple website</b>
              </li>

              <li class="fw4 f4 lh-copy mt0 mb3">
                <b>Track your outreach efforts</b>
              </li>
              <li class="fw4 f4 lh-copy mt0 mb3">
                <b>See what stage each client is at</b>
              </li>
            </ul>
            <p className="fw4 f4 lh-copy mt0 mb3 ">
              It will help you stay on top of things and stay accountable to the
              process.{' '}
            </p>
          </div>
        </div>
      </section>

      <section class="mw8 center ph3 ph5-ns tc br2 pv5 bg-blue white mv5 ">
        <h3 class="fw6 f3 f2-ns lh-title mt0 mb4">
          In one month, you'll walk away with:
        </h3>
        <ul className="tl">
          <li class="fw4 f4 lh-copy mt0 mb3">
            <b>A simple website</b> that showcases what you do, how you do it
            and who you do it for.
          </li>
          <li class="fw4 f4 lh-copy mt0 mb3">
            <b>A professional network</b> that you stay in touch with at regular
            intervals for word-of-mouth referrals.
          </li>
          <li class="fw4 f4 lh-copy mt0 mb3">
            <b>A sales funnel</b> to help you convert a lead into a client.
          </li>
          <li class="fw4 f4 lh-copy mt0 mb3">
            <b>A framework </b> to continuously improve as you grow your
            freelancing business.
          </li>
        </ul>
        <h3 class="fw6 f3 mt0 mt4">Sign up for the Field Guide today!</h3>

        <Mailchimp />
      </section>
      <section class="bg-washed-green">
        <div class="mw9 center pa4 pt5-ns ph7-l">
          <h3 class="f2 f1-m f-headline-l measure-narrow lh-title mv0">
            <h1 className="f2  lh-title fw9 ">
              Take a peek inside the field guide
            </h1>
          </h3>
          <h4 class="f3 fw1 georgia i mb5">
            The program is structured into four modules. Each week focuses on a
            different module and gets you thinking about important aspects of
            your freelance business. There is a clear goal for the end of each
            week and exercises and worksheets to help you get there.
          </h4>
          <article>
            <div class="flex flex-column flex-row-ns mb5">
              <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                <img src={peeps7} class="db" alt="freelance stuff" />
              </div>
              <div class="w-100 w-60-ns pl3-ns">
                <h1 class="f3 b  mt0 lh-title">Week 1: What you offer</h1>
                <p class="f6 f5-l lh-copy">
                  We help you think clearly on how to specialise with the domain
                  knowledge you currently have and then we'll help you put a
                  website together to help potential clients understand how you
                  can help them.
                </p>
              </div>
            </div>

            <div class="flex flex-column flex-row-ns mb5">
              <div class="w-100 w-60-ns pl3-ns">
                <h1 class="f3 b  mt0 lh-title">Week 2: Who you serve</h1>
                <p class="f6 f5-l lh-copy">
                  Once you know what you offer and who it will benefit, the next
                  step is to start outreach to people who will benefit from your
                  service. This combines reaching out to people directly as well
                  as following up with your existing professional network. Most
                  people already have a professional network that they can tap
                  onto: your old colleagues, friends who work in similar
                  industries, acquantainces that you;ve never followed up with.
                  This week is about understanding how to turn your professional
                  network into referral generating machine.
                </p>
              </div>
              <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                <img src={peeps5} class="db" alt="freelance stuff" />
              </div>
            </div>

            <div class="flex flex-column flex-row-ns mb5">
              <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                <img src={peeps14} class="db" alt="freelance stuff" />
              </div>
              <div class="w-100 w-60-ns pl3-ns">
                <h1 class="f3 b  mt0 lh-title">Week 3: How you Sell</h1>
                <p class="f6 f5-l lh-copy">
                  A common mistake freelancers make is to think that people will
                  automatically become paid clients once they've express an
                  intest in working with you. Going from potential client to
                  paid client is a delicate process. From understanding what
                  their problem, demonstrating that you can help them, to
                  pitching your solution, you need to demonstrate your value and
                  worth at each stage of this process to make people want to
                  work with you.
                </p>
              </div>
            </div>

            <div class="flex flex-column flex-row-ns mb5">
              <div class="w-100 w-60-ns pl3-ns">
                <h1 class="f3 b  mt0 lh-title">Week 4: Delivery & Feedback</h1>
                <p class="f6 f5-l lh-copy">
                  Getting your first client is just the beginning, that's when
                  the real work start. It's important to understand how to wqork
                  with client by establishing clear expectations, boundaries,
                  milestones and deadline. Once you project is ocmplete you also
                  need a system in place for collecting feedback and staying in
                  touch with your client to develop a long term relationship.
                </p>
              </div>
              <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                <img src={peeps12} class="db" alt="freelance stuff" />
              </div>
            </div>
          </article>
        </div>
      </section>
      <section>
        <blockquote class="ph0 f4 f1-ns measure-narrow center fw9 lh-copy lh-title-ns tc blue">
          Who is The Field Guide for ?
        </blockquote>
        <div className="w-100 w-50-ns pa4 db dib-ns">
          <img
            src={peeps15}
            className="dib w-100 h-auto pt4"
            alt="peeps working together"
          />
        </div>

        <div className="w-100 w-50-ns blue db dib-ns">
          <div className="tl pl4-ns">
            <p className="fw4 f3 lh-copy mt0 mb3">
              This programme is for you if:
            </p>
            <ul className="fw4 f3 lh-copy mt0 mb3 measure-narrow">
              <li>
                You have just started freelancing, but now realise that there is
                a lot more to it than just the skill of your craft.
              </li>
              <li>
                You have been on the freelance fence for a while but have no
                clue how to get started freelancing.
              </li>
              <li>
                Have tried freelancing as a side gig but want help making the
                transition to a full-time professional freelancer.
              </li>
              <li>
                You've been a freelancer for a while but you've been meaning to
                get your business in shape and need some help you get there.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="mw8 center ph3 ph5-ns tc br2 pv5 bg-yellow blue mv5 ">
        <h3 class="fw6 f3 f2-ns lh-title mt0 mb4">The program includes:</h3>
        <ul className="tl">
          <li class="fw4 f4 lh-copy mt0 mb3">
            <b>4 focused weekly modules </b>
            Our easy-to-follow email course takes you from the understanding the
            basic concepts to taking action.
          </li>

          <li class="fw4 f4 lh-copy mt0 mb3">
            <b>
              Access to a custom software platform to keep track of your
              progress for the duration of the program.
            </b>
          </li>
          <li class="fw4 f4 lh-copy mt0 mb3">
            <b>
              Practical exercises, worksheets, and step-by-step instructions
            </b>
            As well as bonus materials to give you everything you need to hit
            your goals.
          </li>
          <li class="fw4 f4 lh-copy mt0 mb3">
            <b>Custom reports based on your progress through each module.</b>
            You’ll finish the program with a report showing you exactly where
            you stand and how your freelancing business can continue to improve.
          </li>
          <li class="fw4 f4 lh-copy mt0 mb3">
            <b>
              Unlimited access to all course materials (as well as updates)
              forever.
            </b>
          </li>
        </ul>
      </section>

      <section className="w-100">
        <blockquote class="ph0 f4 f1-ns measure-narrow center">
          <p class="fw9 lh-copy lh-title-ns tc">Pricing</p>
        </blockquote>

        <h4 class="f3 fw1 georgia i mb5 measure center tc">
          The email course is free.
        </h4>
        <Mailchimp />
        <h4 class="f3 fw1 georgia i mb5 measure center">
          If you would like access to our progress platform along with exercise
          worksheets, or if you would like one-on-one coaching each week there
          are two pricing options below.
        </h4>
        <div className="w-100 w-50-ns  db dib-ns">
          <article class="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
            <div class="tc pb5">
              <dl class="db dib-l w-auto-l lh-title">
                <dd class="f2 f-subheadline-l fw6 ml0">$99</dd>
                {/* <dd class='f6 fw4 ml0 '></dd> */}
              </dl>
              <h1 class="f4">Platform & Worksheets</h1>
              <hr class="mw3 bb bw1 b--black-10" />
            </div>
            <ul>
              <li class="lh-copy measure center f6 black-70">
                All 4 in-depth learning modules
              </li>
              <li class="lh-copy measure center f6 black-70">
                Lifetime access to the private slack community
              </li>

              <li class="lh-copy measure center f6 black-70">
                $100 for 1 on 1's on demand{' '}
              </li>

              <li class="lh-copy measure center f6 black-70">
                Ready-To-Go Templates and Documents
              </li>
            </ul>
            <div className="w-100 tc">
              <Checkout1>Get Access</Checkout1>
            </div>
          </article>
        </div>
        <div className="w-100 w-50-ns blue db dib-ns">
          <article class="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
            <div class="tc">
              <dl class="db dib-l w-auto-l lh-title">
                <dd class="f2 f-subheadline-l fw6 ml0">$250</dd>
                <dd class="f6 fw4 ml0">Only 12 spots left.</dd>
              </dl>
              <h1 class="f4">Platform, Worksheets & Weekly Coaching</h1>
              <hr class="mw3 bb bw1 b--black-10" />
            </div>
            <ul>
              <li class="lh-copy measure center f6 black-70">
                All 4 in-depth learning modules
              </li>
              <li class="lh-copy measure center f6 black-70">
                Lifetime access to the clienttree private community on slack
              </li>

              <li class="lh-copy measure center f6 black-70">
                Free access to clienttree app for 3 months (Valued at $150)
              </li>
              <li class="lh-copy measure center f6 black-70">
                Weekly 1 on 1's (Valued at $400)
              </li>

              <li class="lh-copy measure center f6 black-70">
                Ready-To-Go Templates and Documents{' '}
              </li>

              <li class="lh-copy measure center f6 black-70">
                Lifetime access to knowledgebase{' '}
              </li>
            </ul>
            <div className="w-100 tc">
              <Checkout2>Get Access</Checkout2>
            </div>
          </article>
        </div>
      </section>

      <section>
        <article className="w-100 bg-blue mv4">
          <div className="w-75-ns tc white pa5-ns pa3 center">
            <blockquote class="ph0 f4 f1-ns measure-narrow center fw9 lh-copy lh-title-ns tc white">
              100% Money-back guarantee
            </blockquote>

            <blockquote class="athelas ml0 mt0 pl4 black-90 bw2 white ">
              <p class="f5 f4-m f3-l lh-copy measure mt0 center georgia">
                If you don’t land a new client within 30 days of the course
                ending, we will give you 100% of your money back. You must
                complete all the exercises and spend a minimum of 5 hours a week
                following teh programme. If you do this and you don't get at
                least one client booked after a month of completing the
                programme then we will give you 100% of your money back.
              </p>
              <div></div>
              <cite class="f6 ttu tracked fs-normal"></cite>
            </blockquote>
          </div>
        </article>
      </section>
      <Footer />
    </main>
  );
}

export default App;
