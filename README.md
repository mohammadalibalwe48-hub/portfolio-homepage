# volt

A demo electronics store built with plain HTML, CSS and JavaScript. No build step, no backend.

## Pages

- `index.html` Home with best sellers, deals and recently viewed
- `shop.html` Search, category, price filter and sort
- `product.html?id=aura-x` Product detail, reviews, delivery estimate
- `wishlist.html` Saved items
- `cart.html` Cart with free-shipping progress and promo code `VOLT10`
- `checkout.html` Demo checkout, no payment taken

## Product photos

Each product shows a drawn illustration by default. To use a real photo, put the file in an `images/` folder and add `img:'images/aura-x.jpg'` to that product at the top of `app.js`. Square photos on a plain background look best.

## Edit it

Products and illustrations live in `app.js`. Colors and fonts live in `style.css` and `extra.css`. The cart, saved items and recently viewed are stored in the browser with localStorage.

## Going live for real

This is a front end only. To take real orders you need a payment provider such as Stripe Checkout and a backend or a hosted store platform.
