# 1Fi SDE – Full Stack Developer Internship Assignment

A dynamic EMI product marketplace built with React, Express, MongoDB and CSS.

## Features

- Dynamic product data loaded from MongoDB through REST APIs
- 3 products with 2+ variants each
- Unique product URLs: `/products/:slug`
- Product details: name, variant, MRP, price and image
- Multiple EMI plans with monthly payment, tenure, interest and cashback
- Select an EMI plan and proceed with the selected plan
- Responsive product detail UI
- Seed script with sample database data
- Health-check endpoint
- CORS enabled for frontend deployment

## Tech Stack

### Frontend
- React
- Vite
- React Router
- Plain CSS

### Backend
- Node.js
- Express
- Mongoose

### Database
- MongoDB / MongoDB Atlas

## Project Structure

```text
1fi-sde-fullstack-assignment/
├── backend/
│   ├── src/
│   │   ├── config/db.js
│   │   ├── controllers/productController.js
│   │   ├── models/Product.js
│   │   ├── routes/productRoutes.js
│   │   ├── seed.js
│   │   └── server.js
│   ├── .env.example
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   ├── .env.example
│   └── package.json
└── README.md
```

## 1. Backend setup

```bash
cd backend
npm install
```

Create `.env` from `.env.example`:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/onefi_assignment
CLIENT_URL=http://localhost:5173
```

For MongoDB Atlas, replace `MONGODB_URI` with your Atlas connection string.

Seed the database:

```bash
npm run seed
```

Start the backend:

```bash
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

## 2. Frontend setup

Open a second terminal:

```bash
cd frontend
npm install
```

Create `.env` from `.env.example`:

```env
VITE_API_URL=http://localhost:5000/api
```

Start frontend:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

## API Endpoints

### GET `/api/health`

Example response:

```json
{
  "success": true,
  "message": "1Fi API is running"
}
```

### GET `/api/products`

Returns all products.

### GET `/api/products/:slug`

Returns one product and all of its EMI plans.

Example:

```json
{
  "success": true,
  "data": {
    "name": "Apple iPhone 17 Pro",
    "slug": "iphone-17-pro",
    "variants": [
      {
        "name": "Silver",
        "storage": "256 GB",
        "mrp": 134900,
        "price": 124900,
        "image": "https://..."
      }
    ],
    "emiPlans": [
      {
        "tenure": 6,
        "interestRate": 0,
        "monthlyPayment": 20817,
        "cashback": 3000
      }
    ]
  }
}
```

## Database Schema

### Product

- `name`: String
- `slug`: String, unique
- `description`: String
- `brand`: String
- `variants`: Array
  - `name`: String
  - `storage`: String
  - `mrp`: Number
  - `price`: Number
  - `image`: String
- `emiPlans`: Array
  - `tenure`: Number
  - `interestRate`: Number
  - `monthlyPayment`: Number
  - `cashback`: Number

## Deployment

### Backend – Render

1. Push this repository to GitHub.
2. Create a Render Web Service.
3. Set root directory to `backend`.
4. Build command: `npm install`
5. Start command: `npm start`
6. Add:
   - `MONGODB_URI`
   - `CLIENT_URL`

### Frontend – Vercel

1. Import the GitHub repository.
2. Set root directory to `frontend`.
3. Build command: `npm run build`
4. Add:
   - `VITE_API_URL=https://YOUR-RENDER-SERVICE.onrender.com/api`

Update `CLIENT_URL` on Render with the Vercel URL.

## Demo flow for the assignment video

1. Open the home page.
2. Show that products are loaded from the backend.
3. Open a product URL.
4. Change the product variant.
5. Select different EMI plans.
6. Click "Proceed with selected plan".
7. Show the browser network/API response.
8. Show MongoDB collections/data.
9. Show the GitHub repository and README.