import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const url = '//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn';

export function Mailchimp() {

		return <MailchimpSubscribe
			url={url}
			render={({ subscribe, status, message }) => (
				<form class='measure center' onSubmit={(formData) => subscribe(formData)}>
					<fieldset id='sign_up' class='ba b--transparent ph0 mh0'>
						<legend class='f4 fw6 ph0 mh0 dn'>Sign In</legend>

						<label class='fw6 lh-copy f6 dn' for='email-address'>
							Email
						</label>
						<input
							class='pa3 br3 br--left-ns input-reset ba bg-white hover-bg-black hover-white w-75-ns w-100 dib'
							type='email'
							name='email-address'
							id='email-address'
							placeholder='Your email address...'
						/>

						<input
							className=' br--right-ns br3 link bn ph4 pv3 mb2 dib white bg-red b tracked w-100 w-25-ns'
							type='submit'
							value='Join'
						/>

						{status === 'sending' && <small className='pa0 ma0 lh-copy pointer blue'>sending...</small>}
						{status === 'error' && (
							<div
								style={{
									color: 'red'
								}}
								dangerouslySetInnerHTML={{
									__html: message
								}}
							/>
						)}
						{status === 'success' && <small className='pa0 ma0 lh-copy pointer green'>Subscribed !</small>}
					</fieldset>
				</form>
			)}
		/>

}


// // drip email capture
// import React from 'react';
// import { dripFormField } from 'react-drip-form';

// const Input = ({ input, meta: { error, dirty, touched }, ...props }) => (
//   <div>
//     <input {...props} {...input} />
//     {error && dirty && touched && <span style={{ color: 'red' }}>{error}</span>}
//   </div>
// );

// export default dripFormField()(Input);



// import React from 'react';
// import { dripForm } from 'react-drip-form';
// import Input from './Input';

// const Form = ({ handlers, meta: { invalid, pristine } }) => (
//   <form onSubmit={handlers.onSubmit}>
//     <div>
//       <label htmlFor="email">Email-Address</label>
//       <Input
//         id="email"
//         type="email"
//         name="email"
//         label="Email-Address"
//         placeholder="Enter your Email-Address"
//       />
//     </div>

//     <button
//       type="submit"
//       disabled={invalid || pristine}
//       onClick={handlers.onSubmit}
//     >
//       Submit
//     </button>
//   </form>
// );

// export default dripForm({
//   validations: {
//     email: {
//       required: true,
//       email: true
//     }
//   }
// })(Form);

