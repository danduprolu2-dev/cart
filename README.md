# EBay Store - Basic Ecommerce App

A basic ecommerce application built with React featuring product listing and shopping cart functionality.

## Features

- ✅ Display products from JSON file (using fetch)
- ✅ Add products to cart
- ✅ Cart counter that updates in real-time
- ✅ View all cart items on a dedicated cart page
- ✅ Remove items from cart
- ✅ Calculate cart total
- ✅ Quantity tracking for duplicate items
- ✅ Responsive design

## Technologies

- React 18
- Vite
- CSS3

## Project Structure

```
src/
├── components/
│   ├── ProductList.jsx    # Display products
│   └── Cart.jsx           # Cart page
├── App.jsx                # Main component with state management
├── App.css                # Component styling
├── index.css              # Global styling
└── main.jsx               # Entry point
public/
└── products.json          # Product data
```

## Installation & Running

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open your browser to `http://localhost:3000`

## How to Use

1. **View Products**: See all available products on the main page
2. **Add to Cart**: Click "Add to Cart" button on any product
3. **View Cart**: Click the cart button (🛒) in the header to see cart items
4. **Remove Items**: Remove items from cart using the "Remove" button
5. **Continue Shopping**: Go back to products with "Continue Shopping" button

## Adding More Products

Edit `public/products.json` to add more products. Each product needs:

- `id`: unique number
- `name`: product name
- `price`: product price (number)
- `description`: product description

## Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.
