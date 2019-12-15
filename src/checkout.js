import React from 'react';

const Checkout = class extends React.Component {
  // Initialise Stripe.js with your publishable key.
  // You can find your key in the Dashboard:
  // https://dashboard.stripe.com/account/apikeys
  componentDidMount() {
    this.stripe = window.Stripe('pk_test_UEtlVFtmDH1SIsFR5HMOR6tD');
  }

  async redirectToCheckout(event, sku) {
    event.preventDefault();
    const { error } = await this.stripe.redirectToCheckout({
      items: [{ sku: 'sku_GJaCbyLyFKVcuL', quantity: 1 }],
      successUrl: `http://localhost:8000/page-2/`,
      cancelUrl: `http://localhost:8000/`
    });

    if (error) {
      console.warn('Error:', error);
    }
  }

  render() {
    return (
      <button onClick={event => this.redirectToCheckout(event)}>
        Get Access
      </button>
    );
  }
};

export default Checkout;
