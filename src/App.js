import React from 'react';
import fish from './images/freelance-fish-logo.png';
import peeps from './images/teamwork_white_2.png';
import peeps4 from './images/teamwork_white_4.png';
import peeps5 from './images/teamwork_white_5.png';
import Form, { handleSubmit } from './Form';
import clientTree from './images/clientTree.png';

function App() {
  return (
    <main>
      <script src="https://js.stripe.com/v3"></script>
      <nav className="db dt-l w-100 border-box pa3 ph5-l shadow-1">
        <p
          className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l"
          title="Home"
        >
          <img src={fish} className="dib w3 h-auto mr3" alt="Client Tree" />
        </p>
        <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
          <p
            className="link dim dark-gray f6 f5-l dib mr3 mr4-l pointer"
            href="#"
            title="Blog"
          >
            Pricing
          </p>
          <p
            className="link dim dark-gray f6 f5-l dib mr3 mr4-l pointer"
            href="#"
            title="Blog"
          >
            Blog
          </p>
          <p
            className="link dim dark-gray f6 f5-l dib mr3 mr4-l pointer"
            href="#"
            title="Blog"
          >
            Contact
          </p>
          <p
            className="link dim dark-gray f6 f5-l dib b pointer"
            href="#"
            title="Contact"
          >
            Sign In
          </p>
        </div>
      </nav>

      <section>
        <div className="w-100 w-50-ns pa4 db dib-ns">
          <img
            src={peeps}
            className="dib w-100 h-auto pt4"
            alt="peeps working together"
          />
        </div>
        <div className="w-100 w-50-ns white db dib-ns">
          <div id="slantLeft" className="bg-blue pa3 pv4">
            <div className="measure center tl pl4-ns">
              <h1 className="f2  lh-title fw9 ">
                Get your freelance business started by finding clients that pay
                well in 30 days.
              </h1>

              <h2 className="f4 fw6  lh-title ">
                We help people who want to start freelancing with a 4 week
                program that is designed to help them take action. I addition to
                that, we have weekly 1 on 1's and we've built a custom app to
                aid with progress
              </h2>

              <a
                className=" link dim br-pill ph4 pv3 mb2 dib white bg-red b tracked  mt4"
                href="#0"
              >
                Join the challenge for $249
              </a>

              <p className="f4 fw6   lh-title ">Registration is now open.</p>
              <p className="f4 fw6   lh-title ">
                Course starts Jan. 13th, 2020.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="blue pa4">
        <blockquote class="ph1 f6 f2-ns measure center">
          <p class="fw4 lh-copy lh-title-ns measure center">
            The Client Tree Program is for anyone who's been struggling with
            starting as a freelancer. We'll help you build and maintain your own
            list of well-paying clients and take control of your professional
            freelancing career in just 1 month.
          </p>
        </blockquote>
        <p class="f6 f4-ns lh-copy measure center">
          Have you been tryting to shift from a full time role to freelancing
          for a while ? Have you bought multiple books but none have helped in
          getting the ball rolling
          <p class="f6 f4-ns lh-copy measure center">
            Keeping the known unknowns aside, there's a lot of things you don't
            know you'll face, like drafting how to draft killer proposals,
            onboarding and offboarding of clients, getting testimonials,
            marketing your services, and the list goes on.
          </p>
          <p class="f6 f4-ns lh-copy measure center">
            {' '}
            Without the understanding these nuances, you're mostly going to
            suffer whenever you try
          </p>
          <p class="f6 f4-ns lh-copy measure center">
            {' '}
            Our program is thoughtfully designed so that you don't make the same
            mistakes as others and you avoid the common mistakes most
            freelancers make
          </p>
          <p class="f6 f4-ns lh-copy measure center">
            To make the experience as seamless as possible, we've built a
            software that'll help you track progress and keep you accountable.
          </p>
        </p>
      </section>

      <section class="measure-wide db center f5 f4-ns lh-copy tc">
        <a
          className=" tc link dim br-pill ph4 pv3 mb2 dib white bg-red b mt5"
          href="#0"
        >
          Sign up for the program today!
        </a>
      </section>

      <section class="mw8 center ph3 ph5-ns tc br2 pv5 bg-yellow blue mv5 ">
        <h3 class="fw6 f3 f2-ns lh-title mt0 mb4">
          Over the next 4 weeks, you’ll learn how to:
        </h3>
        <ul className="tl">
          <li class="fw2 f4 lh-copy mt0 mb3">
            <b>
              Put together a service offering that explains what you do best for
              your target clientele
            </b>
          </li>
          <li class="fw2 f4 lh-copy mt0 mb3">
            <b></b>
          </li>
          <li class="fw2 f4 lh-copy mt0 mb3">
            <b>
              Reach out to professional network and potential clients, help them
              in a meaningful way, and dfind leads that will benefit from what
              you do.
            </b>
          </li>
          <li class="fw2 f4 lh-copy mt0 mb3">
            <b>
              Learn how to take people who are interested in working with you
              and turn them into paying clients.
            </b>
          </li>
          <li class="fw2 f4 lh-copy mt0 mb3">
            <b>
              Get great testimonials and learn from your mistakes to
              continuously become a better freelancer.
            </b>
          </li>
        </ul>
      </section>

      <section>
        <blockquote class="ph0 f4 f1-ns measure-narrow center">
          <p class="fw6 lh-copy lh-title-ns tc">
            This program is more than just another high-level, content-only
            course.
          </p>
          <p class="fw6 lh-copy lh-title-ns tc">
            It’s a personalised program where you get one on one mentorship,
            with high quality content and custom built app to track and aid your
            progress.
          </p>
        </blockquote>
        <div className="w-100 w-50-ns pa4 db dib-ns">
          <img
            class="db w-100 mt4"
            src={clientTree}
            alt="Client Tree Platform"
          />
        </div>
        <div className="w-100 w-50-ns blue db dib-ns">
          <div className="measure center tl pl4-ns">
            <p className="fw4 f4 lh-copy mt0 mb3">
              We created this program specifically to take advantage of
              clienttree. An app that helps freelancers get set up and run their
              businesses.
            </p>
            <p className="fw4 f4 lh-copy mt0 mb3">
              The software helps you through the learning experience seamlessly.
              It will not only help you stay on top of things but also help you
              get a services page setup. We’ll make sure you stay accountable by
              having weekly checkins and making sure there’s real progress
              towards landing your first client.
            </p>
          </div>
        </div>
      </section>

      <section class="mw8 center ph3 ph5-ns tc br2 pv5 bg-blue white mv5 ">
        <h3 class="fw6 f3 f2-ns lh-title mt0 mb4">
          In one month, you'll walk away with:
        </h3>
        <ul className="tl">
          <li class="fw2 f4 lh-copy mt0 mb3">
            <b>A service offering that specialises on what you do best and</b>
          </li>
          <li class="fw2 f4 lh-copy mt0 mb3">
            <b>
              Have a professional network that you can reach out to frequently
            </b>
          </li>
          <li class="fw2 f4 lh-copy mt0 mb3">
            <b>Convert a lead into a client</b>
          </li>
          <li class="fw2 f4 lh-copy mt0 mb3">
            <b>
              Get great testimonials and learn from your mistakes to
              continuously become a better freelancer.
            </b>
          </li>
        </ul>
        <a
          className=" tc link dim br-pill ph4 pv3 mb2 dib white bg-red b mt5"
          href="#0"
        >
          Sign up for the program today!
        </a>
      </section>
      <section class="bg-washed-green">
        <div class="mw9 center pa4 pt5-ns ph7-l">
          <h3 class="f2 f1-m f-headline-l measure-narrow lh-title mv0">
            <h1 className="f2  lh-title fw9 ">
              Take a peek inside The Freelance Program
            </h1>
          </h3>
          <h4 class="f3 fw1 georgia i mb5">
            The program is structured on a weekly basis to allow time for the
            freelancer to understand the content and then take action on it.
            However, once a lesson is live you have access to it forever and can
            complete it at your own pace.
          </h4>
          <article>
            <div class="flex flex-column flex-row-ns mb5">
              <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                <img src={peeps} class="db" alt="freelance stuff" />
              </div>
              <div class="w-100 w-60-ns pl3-ns">
                <h1 class="f3 b  mt0 lh-title">
                  Put together a service offering
                </h1>
                <p class="f6 f5-l lh-copy">
                  When a potential client lands on your page, he cares about how
                  you can help him. First we'll help you get more clarity on how
                  to specialise with the domain knowledge you currently have and
                  then we'll help you stitch together a services page that helps
                  a potential client understand how you can help them.
                </p>
              </div>
            </div>

            <div class="flex flex-column flex-row-ns mb5">
              <div class="w-100 w-60-ns pl3-ns">
                <h1 class="f3 b  mt0 lh-title">
                  Reach out to potential clietns
                </h1>
                <p class="f6 f5-l lh-copy">
                  Most people already have a professional network that they can
                  tap onto. Most of your old colleagues, friends who work in
                  similar industries and acquantainces form your professional
                  network. The idea is to not directly ask people for work like
                  but be as a resourceful and helpful to everyone on this
                  network. This will help you understand how to turn your
                  professional network into referral generating machine. Our app
                  will help you take of outreach and track how you can help
                  everyone on the network.
                </p>
              </div>
              <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                <img src={peeps4} class="db" alt="freelance stuff" />
              </div>
            </div>

            <div class="flex flex-column flex-row-ns">
              <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                <img src={peeps5} class="db" alt="freelance stuff" />
              </div>
              <div class="w-100 w-60-ns pl3-ns">
                <h1 class="f3 b  mt0 lh-title">Turn a lead into a client</h1>
                <p class="f6 f5-l lh-copy">
                  A common rookie mistake is that freelancers think the client
                  knows what the solution is. People generally just end up
                  building what the client asks them to build without
                  understanding the root problem. This leads to a fickle client
                  and a bad experience for both parties. First understand their
                  problem and then pitch a solution to their problem.
                </p>
              </div>
            </div>

            {/* <div class="flex flex-column flex-row-ns mb5">
              <div class="w-100 w-60-ns pl3-ns">
                <h1 class="f3 b  mt0 lh-title">Get testimonials</h1>
                <p class="f6 f5-l lh-copy">
                  To make sure you're on the right path, we'll have weekly 1 on
                  1's where we'll give you personalised advice based on your
                  path. We stongly beleive that just reading a book won't get
                  you there, having a sounding board helps you get clarity
                  faster and makes sure you don't make common mistakes.
                </p>
              </div>
              <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                <img src={peeps4} class="db" alt="freelance stuff" />
              </div>
            </div> */}
          </article>
        </div>
      </section>
      <section>
        <blockquote class="ph0 f4 f1-ns measure-narrow center fw9 lh-copy lh-title-ns tc">
          Who is The Freelance Challenge for ?
        </blockquote>
        <div className="w-100 w-50-ns pa4 db dib-ns">
          <img
            src={peeps5}
            className="dib w-100 h-auto pt4"
            alt="peeps working together"
          />
        </div>

        <div className="w-100 w-50-ns blue db dib-ns">
          <div className="tl pl4-ns">
            <p className="fw4 f4 lh-copy mt0 mb3">
              There’s no one-size-fits-all solution for being a freelancer.
            </p>
            <p className="fw4 f4 lh-copy mt0 mb3">
              This program is for you if you:
            </p>
            <ul className="fw4 f4 lh-copy mt0 mb3">
              <li>
                Have just started freelancing, realise that there is a lot that
                you have to learn and want to get the ball rolling quicker
              </li>
              <li>
                A designer/developer with a lot of experience who wants more
                freedom who has been on the fence for a while but has no clue on
                how to get started with professional freelancing
              </li>
              <li>
                Have tried freelancing as a side gig and want help finding your
                first client and making the transition to professional
                freelancing full-time.
              </li>
              <li>You're a freelancer and needs more accountability</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="mw8 center ph3 ph5-ns tc br2 pv5 bg-yellow blue mv5 ">
        <h3 class="fw6 f3 f2-ns lh-title mt0 mb4">The program includes:</h3>
        <ul className="tl">
          <li class="fw2 f4 lh-copy mt0 mb3">
            <b>4 focused weekly modules </b>
            Our easy-to-follow email course takes you from the understanding the
            basic concepts to actually taking action
          </li>

          <li class="fw2 f4 lh-copy mt0 mb3">
            <b>
              Access to a custom software platform for keeping track of your
              progress for the duration of the program
            </b>
            Keep track of every conversation with all of your freelance clients
            and leads, along with next steps on each conversation
          </li>
          <li class="fw2 f4 lh-copy mt0 mb3">
            <b>
              Practical exercises, worksheets, and step-by-step instructions
            </b>
            Bonus materials give you everything you need to hit your goals.
          </li>
          <li class="fw2 f4 lh-copy mt0 mb3">
            <b>Custom reports based on your actual data and progress.</b>
            You’ll finish the program with a customized report showing you
            exactly how your freelancing business has improved
          </li>
          <li class="fw2 f4 lh-copy mt0 mb3">
            <b>Unlimited access to all course materials (forever).</b>
            Have access to our everexpanding knowledgebase
          </li>
        </ul>
      </section>

      <section className="w-100">
        <blockquote class="ph0 f4 f1-ns measure-narrow center">
          <p class="fw9 lh-copy lh-title-ns tc">Pricing</p>
        </blockquote>

        <h4 class="f3 fw1 georgia i mb5 measure-wide center"></h4>

        <div className="w-100 w-50-ns  db dib-ns">
          <article class="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
            <div class="tc pb3">
              <dl class="db dib-l w-auto-l lh-title">
                <dd class="f2 f-subheadline-l fw6 ml0">$99</dd>
                {/* <dd class='f6 fw4 ml0'>Something something</dd> */}
              </dl>
              <h1 class="f4">Email Course</h1>
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
                99$ for 1 on 1's on demand{' '}
              </li>

              <li class="lh-copy measure center f6 black-70">
                Ready-To-Go Templates and Documents
              </li>
            </ul>
            <div className="w-100 tc">
              <a
                className="link dim br-pill ph4 pv3 mb2 dib white bg-red b mt5"
                href="#0"
              >
                Get Access
              </a>
            </div>
          </article>
        </div>
        <div className="w-100 w-50-ns blue db dib-ns">
          <article class="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
            <div class="tc">
              <dl class="db dib-l w-auto-l lh-title">
                <dd class="f2 f-subheadline-l fw6 ml0 strike">$350</dd>
                <dd class="f6 fw4 ml0">$250 till Jan 12th 2020</dd>
              </dl>
              <h1 class="f4">Email Course + Weekly Coaching</h1>
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
                Free access to clienttree app for 3 months (Valued at 150$)
              </li>
              <li class="lh-copy measure center f6 black-70">
                Weekly 1 on 1's (Valued at 400$)
              </li>

              <li class="lh-copy measure center f6 black-70">
                Ready-To-Go Templates and Documents{' '}
              </li>

              <li class="lh-copy measure center f6 black-70">
                Lifetime access to knowledgebase{' '}
              </li>
            </ul>
            <div className="w-100 tc">
              <a
                className="link dim br-pill ph4 pv3 mb2 dib white bg-red b mt5"
                href="#0"
              >
                Get Access
              </a>
            </div>
          </article>
        </div>
      </section>

      <section>
        <article className="w-100 bg-blue mv4">
          <div className="w-75-ns tc white pa5-ns pa3 center">
            <blockquote class="athelas ml0 mt0 pl4 black-90 bw2 white ">
              <p class="f5 f4-m f3-l lh-copy measure mt0">
                If you don’t land a new client within 30 days of the course
                ending, we will give you 100% of your money back.
              </p>
              <div>
                <Form />
              </div>
              <cite class="f6 ttu tracked fs-normal"></cite>
            </blockquote>
          </div>
        </article>
      </section>
      <footer class="pv4 ph3 ph5-m ph6-l mid-gray">
        <small class="f6 db tc">
          © 2019 <b class="ttu">Client tree</b>, All Rights Reserved
        </small>
        <div class="tc mt3">
          <a
            href="/language/"
            title="Language"
            class="f6 dib ph2 link mid-gray dim"
          >
            Blog
          </a>
          <a href="/terms/" title="Terms" class="f6 dib ph2 link mid-gray dim">
            Contact
          </a>
          <a
            href="/privacy/"
            title="Privacy"
            class="f6 dib ph2 link mid-gray dim"
          >
            Privacy
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
