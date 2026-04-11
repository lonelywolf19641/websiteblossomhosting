# Blossom Hosting - Order System

This is the order system for **Blossom Hosting**, built to let users choose a hosting plan, submit their order, and view a confirmation page after submitting.

## Pages

### `index.html`
Main landing page for Blossom Hosting.  
Shows:
- Features
- Pricing
- Team
- Contact
- Uptime / Status
- Links to the panel and plans

### `order.html`
The order page where users can place an order.  
This page is used to:
- Select a hosting plan
- Enter order details
- Submit their request

### `submitted.html`
Confirmation page shown after an order is submitted successfully.

## Files

### HTML
- `index.html` — Homepage
- `order.html` — Order form
- `submitted.html` — Order submitted page

### CSS
- `index.css` — Styles for homepage
- `order.css` — Styles for order page
- `submitted.css` — Styles for submitted page

### JavaScript
- `index.js` — Homepage interactions
- `order.js` — Handles order form logic
- `submitted.js` — Handles submitted page actions
- `main.js` — Shared/global scripts

### Other
- `images/` — Logos and image assets
- `package.json` — Project configuration
- `package-lock.json` — Dependency lock file

## How the Order System Works

1. The user opens the website.
2. They go to the pricing/order section.
3. They choose a hosting plan.
4. They fill in their information on `order.html`.
5. The order is submitted.
6. They are redirected to `submitted.html`.

## Order Information

The order system is intended to collect details such as:
- Customer name
- Contact information
- Selected hosting plan
- Duration
- Extra notes or requirements

You can expand this depending on how your form is built.

## Current Plans

### Starter
- R$200 / month
- 512MB RAM
- 1GB Storage
- CPU 50%
- Unlimited Traffic

### Blossom Pro
- R$500 / month
- 1GB RAM
- 2GB Storage
- CPU 75%
- Unlimited Traffic

### Ultimate
- R$700 / month
- 2GB RAM
- 5GB Storage
- CPU 100%
- Unlimited Traffic

## Purpose

The goal of this order system is to make it easy for customers to:
- View plans
- Choose a duration
- Submit an order quickly
- Get a confirmation after ordering

## Notes

This project is for **Blossom Hosting**, a hosting service focused on:
- Discord bot hosting
- Website hosting
- Instant deployment
- Simple panel management
- Reliable uptime

## Future Improvements

Possible upgrades:
- Save orders to a database
- Send orders to Discord webhooks
- Email confirmation system
- Payment integration
- Client dashboard order tracking

## Credits

Created for **Blossom Hosting**  
© 2026 Blossom Hosting. All rights reserved.
