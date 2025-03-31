// This is your test secret API key.
const stripe = Stripe("pk_test_51NeuPiE4cFIBviJ54qSxgX1haXcPTDhJ9NeGNIcDXWk3OZxaomPWZd5FqmF87mmkiOaqymGcYWjtD78wO6qWZTpY001Fg5qBe7");

initialize();

// Create a Checkout Session
async function initialize() {
  const fetchClientSecret = async () => {
    const response = await fetch("/create-checkout-session", {
      method: "POST",
    });
    const { clientSecret } = await response.json();
    return clientSecret;
  };

  const checkout = await stripe.initEmbeddedCheckout({
    fetchClientSecret,
  });

  // Mount Checkout
  checkout.mount('#checkout');
}