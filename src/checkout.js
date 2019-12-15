import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default class Checkout extends React.Component {
  onToken = token => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token)
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  };

  // ...

  render() {
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_UEtlVFtmDH1SIsFR5HMOR6tD"
        id="checkout-button-sku_GJaCbyLyFKVcuL"
        amount="500"
        billingAddress
        description="Awesome Product"
        image="https://yourdomain.tld/images/logo.svg"
        locale="auto"
        name="freelancefish.com"
        href="#0"
      />
    );
  }
}
