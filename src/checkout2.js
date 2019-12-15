import React from 'react';

const Checkout2 = class extends React.Component {
  // Initialise Stripe.js with your publishable key.
  // You can find your key in the Dashboard:
  // https://dashboard.stripe.com/account/apikeys
  componentDidMount() {
    this.stripe = window.Stripe('pk_live_yoxjI0MwxfMCzQEcp4ZRbtzF');
  }

  async redirectToCheckout(event, sku) {
    event.preventDefault();
    const { error } = await this.stripe.redirectToCheckout({
      items: [{ sku: 'sku_GMbfHnWWfMGfEj', quantity: 1 }],
      successUrl: `https://freelancefieldguide.com/success`,
      cancelUrl: `https://freelancefieldguide.com`
    });

    if (error) {
      console.warn('Error:', error);
    }
  }

  render() {
    return (
      <button
        className="link dim br-pill ph4 pv3 mb2 dib white bg-red b mt5"
        onClick={event => this.redirectToCheckout(event)}
      >
        Get Access
      </button>
    );
  }
};

export default Checkout2;
