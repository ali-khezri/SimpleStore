# SimpleStore

A full-stack product management application built with the MERN stack.

The application allows users to create, view, update, and delete products through a responsive interface.

## Live Demo

Try the live application:

**[Live Demo](https://simplestore-93qx.onrender.com/)**

## Features

- View all products
- Create new products
- Update existing products
- Delete products
- Product cards with name, price, and image
- Responsive layout
- Light and dark mode
- Toast notifications for actions
- RESTful API
- MongoDB database

## Tech Stack

### Frontend

- React
- React Router
- Chakra UI
- Zustand
- React Icons

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Nodemon


## API

The backend provides a RESTful API for managing products.

Main endpoint:

`/api/products`

Supported operations:

- `GET /api/products` — Get all products
- `POST /api/products` — Create a product
- `PUT /api/products/:id` — Update a product
- `DELETE /api/products/:id` — Delete a product

## Environment Variables

Create a `.env` file in the project root and add your MongoDB connection string and port:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
cd <project-folder>
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application uses MongoDB for data persistence.

## Deployment

The application was deployed using Render and connected to a MongoDB database.

## Project Structure

```text
project/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── store/
│
└── package.json
```

## Author

**Ali Khezri** — [Github](https://github.com/ali-khezri) | [LinkedIn](https://www.linkedin.com/in/ali-khezri)