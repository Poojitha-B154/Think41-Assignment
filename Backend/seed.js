const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const Department = require('./models/Department');

dotenv.config();

const seed = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  await Department.deleteMany();
  await Product.deleteMany();

  const departments = await Department.insertMany([
    { name: 'Electronics' },
    { name: 'Clothing' },
    { name: 'Books' },
    { name: 'Home' },
  ]);

  await Product.insertMany([
    // Electronics
    { name: 'Smartphone X100', description: 'Flagship 5G Android phone', price: 29999, department: 'Electronics' },
    { name: 'Wireless Earbuds', description: 'Noise cancelling with long battery', price: 3999, department: 'Electronics' },
    { name: 'Gaming Laptop', description: 'High performance laptop with RTX graphics', price: 85999, department: 'Electronics' },
    { name: 'Smartwatch', description: 'Fitness and call tracking enabled', price: 6999, department: 'Electronics' },
    { name: '4K TV', description: '55 inch Ultra HD Smart TV', price: 49999, department: 'Electronics' },
    { name: 'Tablet', description: '10 inch tablet with stylus support', price: 17999, department: 'Electronics' },
    { name: 'Bluetooth Speaker', description: 'Waterproof party speaker', price: 2299, department: 'Electronics' },
    { name: 'Power Bank', description: '20000mAh fast charging', price: 1299, department: 'Electronics' },
    { name: 'Wireless Mouse', description: 'Ergonomic and responsive', price: 799, department: 'Electronics' },
    { name: 'Portable SSD', description: '1TB USB-C SSD', price: 6999, department: 'Electronics' },

    // Clothing
    { name: 'Casual Shirt', description: 'Slim fit, multiple colors', price: 799, department: 'Clothing' },
    { name: 'Joggers', description: 'Comfortable cotton blend', price: 999, department: 'Clothing' },
    { name: 'Hoodie', description: 'Warm fleece hoodie', price: 1299, department: 'Clothing' },
    { name: 'Sneakers', description: 'Unisex white sneakers', price: 1999, department: 'Clothing' },
    { name: 'Denim Jacket', description: 'Classic look with modern fit', price: 2499, department: 'Clothing' },
    { name: 'Ethnic Kurta', description: 'Traditional festive wear', price: 1099, department: 'Clothing' },
    { name: 'Cap', description: 'Baseball cap with logo', price: 399, department: 'Clothing' },
    { name: 'Scarf', description: 'Woolen winter scarf', price: 599, department: 'Clothing' },
    { name: 'Formal Trousers', description: 'Office wear with crease finish', price: 1199, department: 'Clothing' },
    { name: 'Sports T-shirt', description: 'Dry-fit material for gym', price: 699, department: 'Clothing' },

    // Books
    { name: 'Science Fiction Novel', description: 'Bestselling futuristic story', price: 499, department: 'Books' },
    { name: 'History of India', description: 'Ancient to modern era explained', price: 399, department: 'Books' },
    { name: 'Self Help Book', description: 'Improve your habits and life', price: 349, department: 'Books' },
    { name: 'Programming in Python', description: 'Complete guide to Python', price: 599, department: 'Books' },
    { name: 'Kids Story Book', description: 'Illustrated fairy tales', price: 199, department: 'Books' },
    { name: 'Cookbook Deluxe', description: 'International recipes made simple', price: 699, department: 'Books' },
    { name: 'Romantic Novel', description: 'Heartwarming modern romance', price: 299, department: 'Books' },
    { name: 'Startup Guide', description: 'How to build a startup', price: 499, department: 'Books' },
    { name: 'Comic Collection', description: 'Superhero series collection', price: 999, department: 'Books' },
    { name: 'Biology Textbook', description: 'For academic students', price: 899, department: 'Books' },

    // Home
    { name: 'Dining Table Set', description: 'Wooden table with 4 chairs', price: 15999, department: 'Home' },
    { name: 'Queen Bed', description: '6x6 ft wooden bed frame', price: 18999, department: 'Home' },
    { name: 'Bookshelf', description: '5-tier bookshelf for living room', price: 3499, department: 'Home' },
    { name: 'Curtains', description: 'Set of 2 blackout curtains', price: 899, department: 'Home' },
    { name: 'Mattress', description: 'Memory foam queen size', price: 11999, department: 'Home' },
    { name: 'Wall Clock', description: 'Minimalist design', price: 599, department: 'Home' },
    { name: 'Lamp', description: 'Bedside table lamp', price: 799, department: 'Home' },
    { name: 'Cushion Covers', description: 'Set of 5 printed covers', price: 399, department: 'Home' },
    { name: 'Sofa Set', description: 'Modern L-shaped 5-seater', price: 24999, department: 'Home' },
    { name: 'Carpet', description: '6x8 ft soft textured carpet', price: 2999, department: 'Home' },
  ]);

  console.log('Seed data inserted');
  process.exit();
};

seed();