import { SlideData } from './types';

export const slides: SlideData[] = [
  // --- OPENING (Slides 1-5) ---
  {
    id: 1,
    layout: 'title',
    title: "Full Stack Web Development & Big Data Integration",
    subtitle: "Mastering the MERN Stack and Handling Large-Scale Data",
    notes: "Welcome everyone. Today isn't just about learning syntax; it's about architecture. We are going to bridge the gap between building a simple 'todo app' and building a system that handles millions of records. My goal is that by the end of these 5 hours, you will see the full picture of modern web development.",
    takeaway: "By the end of this workshop, you won't just write code — you'll architect systems.",
    duration: 3,
    visualDesc: "Day 1 & Day 2 | 5 Hours"
  },
  {
    id: 3,
    layout: 'two-column',
    title: "Who Is This For?",
    columns: {
      left: {
        title: "Prerequisites",
        content: [
          "• Basic JavaScript (ES6+)",
          "• HTML/CSS Fundamentals",
          "• Terminal/CLI Basics",
          "• Curiosity about how things work"
        ],
        color: "text-green-400"
      },
      right: {
        title: "What We'll Cover",
        content: [
          "• Server-side Logic",
          "• Database Schema Design",
          "• API Security",
          "• Frontend State Management",
          "• Data Streaming & Aggregation"
        ],
        color: "text-cyan-400"
      }
    },
    notes: "If you know variables, loops, and functions, you are ready. If you've never touched a server before, don't worry—we explain from first principles.",
    takeaway: "You don't need to be an expert to start, but you need to pay attention.",
    duration: 2
  },
  {
    id: 4,
    layout: 'content',
    title: "The Goal: A Production-Grade System",
    subtitle: "What we are conceptually building",
    content: [
      "We aren't just building a toy app.",
      "We are designing a system that can:",
      "1. Securely authenticate users via JWT",
      "2. Ingest millions of records via Streams",
      "3. Analyze data inside the Database",
      "4. Visualize results in a React Dashboard"
    ],
    notes: "Keep this goal in mind. Every line of code we discuss contributes to this system.",
    takeaway: "We build for scale, security, and performance.",
    duration: 2
  },
  {
    id: 5,
    layout: 'section',
    title: "Section 1",
    subtitle: "MERN Stack Architecture",
    sectionTitle: "Understanding the Ecosystem",
    notes: "Let's start with the big picture.",
    takeaway: "Foundation Layer",
    duration: 0
  },

  // --- MERN CONCEPTS (Slides 6-10) ---
  {
    id: 6,
    layout: 'diagram',
    title: "The MERN Acronym",
    content: [
      "M - MongoDB (Database)",
      "E - Express.js (Backend Framework)",
      "R - React.js (Frontend Library)",
      "N - Node.js (Runtime Environment)"
    ],
    notes: "It's not just four technologies; it's a unified JavaScript stack that lets you use the SAME language end-to-end. MongoDB stores JSON-like documents, Express runs on top of Node to expose HTTP APIs, and React lives in the browser to render UI. When a user clicks a button in React, it talks (via HTTP) to Express/Node, which reads/writes data in MongoDB and sends JSON back. The big mental model: think in JavaScript for data, APIs, and UI instead of switching between SQL, PHP, and a separate frontend language.",
    takeaway: "One language (JS) rules the entire stack.",
    duration: 3
  },
  {
    id: 8,
    layout: 'diagram',
    title: "The Request-Response Cycle",
    content: [
      "1. Client (Browser) sends HTTP Request",
      "2. Node/Express Server receives request",
      "3. Server queries MongoDB",
      "4. MongoDB returns Data",
      "5. Server processes and sends HTTP Response",
      "6. Client renders Data"
    ],
    notes: "This loop is the heartbeat of the web. Every time you click a link, submit a form, or load a page, this happens.",
    takeaway: "Master this cycle, and you master the web.",
    duration: 5
  },
  {
    id: 9,
    layout: 'content',
    title: "Why JSON Won",
    subtitle: "JavaScript Object Notation",
    content: [
      "JSON is the lingua franca of the modern web.",
      "It is human readable.",
      "It is machine parseable.",
      "It is lightweight.",
      "It is natively supported by JavaScript."
    ],
    code: `// A User Object
{
  "id": 1,
  "name": "Alice",
  "roles": ["admin", "editor"],
  "meta": {
    "login_count": 42
  }
}`,
    notes: "XML used to be the standard. It was heavy and hard to read. JSON took over because it maps 1:1 to objects in code.",
    takeaway: "JSON is the universal data format.",
    duration: 3
  },
  {
    id: 10,
    layout: 'section',
    title: "Section 2",
    subtitle: "Node.js Internals",
    sectionTitle: "It's not just a server. It's an engine.",
    notes: "Now we dive into the backend.",
    takeaway: "Runtime Environment",
    duration: 0
  },

  // --- NODE.JS DEEP DIVE (Slides 11-18) ---
  {
    id: 11,
    layout: 'two-column',
    title: "What is Node.js?",
    columns: {
      left: {
        title: "It IS...",
        content: [
          "• A JavaScript Runtime — runs JS outside the browser (on the server)",
          "• Built on Chrome's V8 Engine — fast, optimized Just-In-Time compilation",
          "• Asynchronous — uses callbacks/promises instead of waiting for I/O to finish",
          "• Event-Driven — reacts to incoming events (requests, timers, messages)",
          "• Single-threaded for your JS code, backed by an efficient event loop",
          "• Ideal for I/O-heavy workloads like APIs, streaming and real-time apps"
        ],
        color: "text-green-400"
      },
      right: {
        title: "It is NOT...",
        content: [
          "• A Framework — Express, NestJS etc. are built *on top* of Node.js",
          "• A Programming Language — it's JavaScript running inside a host environment",
          "• Multi-threaded (by default) — heavy CPU work can block the event loop",
          "• Designed for CPU‑intensive tasks like video encoding or ML training",
          "• The best choice when raw number‑crunching performance is your main goal"
        ],
        color: "text-red-400"
      }
    },
    notes: "Node takes JS out of the browser. It gives JS access to the file system, network, and OS.",
    takeaway: "Node.js is the environment where your backend code lives.",
    duration: 4
  },
  {
    id: 12,
    layout: 'diagram',
    title: "The V8 Engine",
    content: [
      "V8 is the engine inside Chrome.",
      "It compiles JS to Machine Code.",
      "Node.js wraps V8 with C++ bindings (libuv).",
      "This allows JS to do 'C++ things' like reading files."
    ],
    notes: "Without V8, Node is nothing. Ryan Dahl (creator) essentially ripped the engine out of Chrome and put it in a server. Under the hood, libuv provides an event loop: your JS runs on a single thread, hands off slow I/O (files, network, timers) to the OS, and the event loop pulls completed work back into the call stack. This is why Node feels 'fast'—it never blocks on I/O, it just keeps looping through events.",
    takeaway: "Node.js = V8 + C++ APIs.",
    duration: 4
  },
  {
    id: 14,
    layout: 'code',
    title: "The Event Loop in Code",
    subtitle: "Visualizing Asynchronous behavior",
    code: `console.log('1. Start');

setTimeout(() => {
  console.log('2. Timeout');
}, 0);

console.log('3. End');

// Output:
// 1. Start
// 3. End
// 2. Timeout`,
    notes: "Even with 0ms timeout, the callback goes to the task queue. The main stack must empty before the queue is processed.",
    takeaway: "The Event Loop handles the order of execution.",
    duration: 4
  },
  {
    id: 15,
    layout: 'two-column',
    title: "Global Objects in Node",
    columns: {
      left: {
        title: "Browser Globals",
        content: ["window", "document", "navigator", "localStorage"],
        color: "text-gray-400"
      },
      right: {
        title: "Node Globals",
        content: ["global", "process", "__dirname", "module.exports"],
        color: "text-cyan-400"
      }
    },
    notes: "You can't access 'window' in Node. It doesn't exist. You have 'process' instead to talk to the OS.",
    takeaway: "Know your environment context.",
    duration: 3
  },
  {
    id: 16,
    layout: 'code',
    title: "Modules: CommonJS vs ES6",
    subtitle: "Importing and Exporting code",
    code: `// CommonJS (Old Node default)
const express = require('express');
module.exports = app;

// ES6 Modules (Modern)
import express from 'express';
export default app;`,
    notes: "Node traditionally used CommonJS (require). Modern Node supports ES Modules (import), aligning with React.",
    takeaway: "We will use ES Modules syntax where possible.",
    duration: 3
  },
  {
    id: 17,
    layout: 'code',
    title: "NPM: Node Package Manager",
    subtitle: "The world's largest software registry",
    content: ["We don't reinvent the wheel. We install it."],
    code: `$ npm init -y
$ npm install express mongoose react
$ npm install --save-dev nodemon`,
    notes: "package.json is the manifest. node_modules is the heavy folder where code lives.",
    takeaway: "NPM is your toolbox.",
    duration: 3
  },
  {
    id: 18,
    layout: 'content',
    title: "Key Node.js Built-in Modules",
    content: [
      "fs - File System (read/write files)",
      "http - Create servers (low level)",
      "path - Handle file paths",
      "os - Operating system info",
      "events - Event emitters"
    ],
    notes: "You don't need to install these. They come with Node.",
    takeaway: "Master the built-ins before reaching for libraries.",
    duration: 3
  },

  // --- EXPRESS & API (Slides 19-28) ---
  {
    id: 19,
    layout: 'section',
    title: "Section 3",
    subtitle: "Express.js",
    sectionTitle: "Routing the Web",
    notes: "Node is raw. Express is the framework.",
    takeaway: "Server Framework",
    duration: 0
  },
  {
    id: 20,
    layout: 'content',
    title: "Why Express?",
    content: [
      "Node's native 'http' module is verbose.",
      "Express provides:",
      "• Simple routing",
      "• Middleware support",
      "• Template engine support",
      "• Error handling utilities"
    ],
    notes: "Express is the standard server framework for Node. It's minimalist and unopinionated.",
    takeaway: "Express simplifies server creation.",
    duration: 3
  },
  {
    id: 21,
    layout: 'code',
    title: "Hello World in Express",
    code: `import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`,
    notes: "Just a few lines to start a server. app.get defines a route handler.",
    takeaway: "Server setup is trivial in Express.",
    duration: 3
  },
  {
    id: 22,
    layout: 'diagram',
    title: "REST API Principles",
    content: [
      "REpresentational State Transfer.",
      "1. Client-Server architecture",
      "2. Stateless (No server-side session)",
      "3. Cacheable",
      "4. Uniform Interface (Standard HTTP verbs)"
    ],
    notes: "REST is an architectural style, not a protocol. It uses HTTP.",
    takeaway: "REST is the standard for web APIs.",
    duration: 4
  },
  {
    id: 23,
    layout: 'two-column',
    title: "HTTP Verbs",
    columns: {
      left: {
        title: "The Actions",
        content: [
          "GET - Retrieve data",
          "POST - Create data",
          "PUT - Update (Replace)",
          "PATCH - Update (Partial)",
          "DELETE - Remove data"
        ],
        color: "text-cyan-400"
      },
      right: {
        title: "The Meaning",
        content: [
          "GET /users",
          "POST /users",
          "PUT /users/1",
          "PATCH /users/1",
          "DELETE /users/1"
        ],
        color: "text-white"
      }
    },
    notes: "Use verbs correctly. Don't use GET to delete something.",
    takeaway: "Semantics matter.",
    duration: 4
  },
  {
    id: 24,
    layout: 'content',
    title: "HTTP Status Codes",
    content: [
      "2xx - Success (200 OK, 201 Created)",
      "3xx - Redirect (304 Not Modified)",
      "4xx - Client Error (400 Bad Request, 401 Unauthorized, 404 Not Found)",
      "5xx - Server Error (500 Internal Server Error)"
    ],
    notes: "The server communicates via status codes. A 200 means good. A 500 means you broke code.",
    takeaway: "Learn the codes.",
    duration: 3
  },
  {
    id: 25,
    layout: 'code',
    title: "The Request Object (req)",
    subtitle: "How to get data from the client",
    code: `// URL: /users/123?active=true
app.get('/users/:id', (req, res) => {
  
  const id = req.params.id; // "123"
  const active = req.query.active; // "true"
  
  const body = req.body; // POST data (needs middleware)
  
  const headers = req.headers; // Auth tokens, etc.
});`,
    notes: "req.params for URL parts. req.query for ?search=foo. req.body for JSON payloads.",
    takeaway: "req holds all input.",
    duration: 5
  },
  {
    id: 26,
    layout: 'code',
    title: "The Response Object (res)",
    subtitle: "How to send data back",
    code: `app.get('/', (req, res) => {
  // Send text
  // res.send('Hello');
  
  // Send JSON (Most common)
  res.json({ message: 'Success', data: [] });
  
  // Send Status + JSON
  res.status(404).json({ error: 'Not Found' });
  
  // Redirect
  // res.redirect('/login');
});`,
    notes: "Always end the request. If you don't call res.something(), the browser hangs.",
    takeaway: "res controls the output.",
    duration: 4
  },
  {
    id: 27,
    layout: 'diagram',
    title: "Middleware Explained",
    content: [
      "Middleware are functions that run BETWEEN the request coming in and the response going out.",
      "Req -> [Middleware 1] -> [Middleware 2] -> [Route Handler] -> Res",
      "Examples: Logging, Parsing JSON, Auth checks."
    ],
    notes: "Express IS middleware. It's a chain of functions.",
    takeaway: "Middleware is the assembly line.",
    duration: 4
  },
  {
    id: 28,
    layout: 'code',
    title: "Writing Custom Middleware",
    code: `const logger = (req, res, next) => {
  console.log(req.method, req.url);
  next(); // Pass to next middleware
};

app.use(logger); // Apply globally

// Auth Middleware
const checkAuth = (req, res, next) => {
  if (!req.headers.token) {
    return res.status(401).send('Unauthorized');
  }
  next();
};

app.get('/protected', checkAuth, (req, res) => {
  res.send('Secret Info');
});`,
    notes: "Crucial concept: 'next()'. If you don't call next or send a response, the server hangs.",
    takeaway: "Middleware powers security and logic flow.",
    duration: 5
  },

  // --- MONGODB (Slides 29-40) ---
  {
    id: 29,
    layout: 'section',
    title: "Section 4",
    subtitle: "MongoDB & Mongoose",
    sectionTitle: "Schemaless but Structured",
    notes: "Data persistence layer.",
    takeaway: "Database Layer",
    duration: 0
  },
  {
    id: 30,
    layout: 'two-column',
    title: "SQL vs NoSQL: Structure",
    columns: {
      left: {
        title: "SQL (Relational)",
        content: [
          "• Tables",
          "• Rows",
          "• Columns",
          "• Fixed Schema"
        ],
        color: "text-gray-400"
      },
      right: {
        title: "NoSQL (Document)",
        content: [
          "• Collections",
          "• Documents",
          "• Fields",
          "• Dynamic Schema"
        ],
        color: "text-green-400"
      }
    },
    notes: "MongoDB is NoSQL. It stores data in BSON (Binary JSON).",
    takeaway: "Flexible data models.",
    duration: 4
  },
  {
    id: 31,
    layout: 'code',
    title: "The Document Model",
    subtitle: "It looks like JS Objects",
    code: `{
  "_id": "507f1f77bcf86cd799439011",
  "name": "John Doe",
  "age": 25,
  "address": {
    "street": "123 Main St",
    "city": "New York"
  },
  "hobbies": ["coding", "gaming"]
}`,
    notes: "Notice the nesting. In SQL, address might be a separate table. In Mongo, it's embedded.",
    takeaway: "Data that is accessed together, is stored together.",
    duration: 3
  },
  {
    id: 32,
    layout: 'content',
    title: "Why Mongoose?",
    content: [
      "MongoDB is schema-less.",
      "But our Application needs structure.",
      "Mongoose is an ODM (Object Data Modeling) library.",
      "It enforces schemas at the application level."
    ],
    notes: "Without Mongoose, you could save a user with no name. Mongoose prevents that.",
    takeaway: "Mongoose brings discipline to NoSQL.",
    duration: 3
  },
  {
    id: 33,
    layout: 'code',
    title: "Defining a Schema",
    code: `import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    unique: true 
  },
  age: Number,
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

const User = mongoose.model('User', UserSchema);`,
    notes: "We define types, required fields, defaults. 'User' becomes the model we interact with.",
    takeaway: "Schemas define your data contract.",
    duration: 5
  },
  {
    id: 34,
    layout: 'code',
    title: "CRUD: Create",
    code: `// Create a new user
const newUser = new User({
  name: 'Alice',
  email: 'alice@example.com',
  age: 30
});

await newUser.save();

// Or shorthand
await User.create({ name: 'Bob', email: 'bob@example.com' });`,
    notes: "Always use async/await. Database operations are asynchronous.",
    takeaway: "Easy insertion.",
    duration: 3
  },
  {
    id: 35,
    layout: 'code',
    title: "CRUD: Read",
    code: `// Find all
const allUsers = await User.find();

// Find by condition
const adults = await User.find({ age: { $gte: 18 } });

// Find one by ID
const user = await User.findById('607f1f77bcf86cd799439011');

// Find one by specific field
const alice = await User.findOne({ email: 'alice@example.com' });`,
    notes: "Mongoose queries are powerful. $gte means 'greater than or equal'.",
    takeaway: "Flexible querying.",
    duration: 4
  },
  {
    id: 36,
    layout: 'code',
    title: "CRUD: Update",
    code: `// Update one
await User.updateOne(
  { email: 'alice@example.com' }, // Filter
  { $set: { age: 31 } }           // Update
);

// Find and return the new document
const updatedUser = await User.findByIdAndUpdate(
  id,
  { name: 'Alice Smith' },
  { new: true } // Return the modified doc
);`,
    notes: "Be careful. updateOne doesn't return the doc. findByIdAndUpdate does.",
    takeaway: "Atomic updates.",
    duration: 3
  },
  {
    id: 37,
    layout: 'code',
    title: "CRUD: Delete",
    code: `// Delete one
await User.deleteOne({ email: 'bob@example.com' });

// Find by ID and delete
await User.findByIdAndDelete(id);`,
    notes: "Deletion is permanent. In production, we often use 'soft delete' (setting a deletedAt flag).",
    takeaway: "Handle deletion with care.",
    duration: 3
  },
  {
    id: 38,
    layout: 'content',
    title: "Relationships in Mongo",
    content: [
      "Two approaches:",
      "1. Embedding: Store child data inside parent doc. (Fast read, duplicate data).",
      "2. Referencing: Store ID of child doc. (Normalized, requires 2 queries or $lookup)."
    ],
    notes: "Use embedding for 'Has Many (small)' like addresses. Use referencing for 'Has Many (large)' like posts.",
    takeaway: "Design for how you query, not how you write.",
    duration: 4
  },
  {
    id: 39,
    layout: 'code',
    title: "Mongoose Population (Joins)",
    code: `// Schema with Reference
const PostSchema = new mongoose.Schema({
  title: String,
  author: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  }
});

// Query with populate
const posts = await Post.find().populate('author');
// Now post.author is the full User object, not just an ID`,
    notes: "Populate simulates a SQL JOIN. It does a second query behind the scenes.",
    takeaway: "Relational data is possible in NoSQL.",
    duration: 4
  },
  {
    id: 40,
    layout: 'content',
    title: "Mongo Atlas (Cloud)",
    content: [
      "We don't run Mongo locally in production.",
      "We use MongoDB Atlas (DBaaS).",
      "• Auto-scaling",
      "• Backups",
      "• Monitoring",
      "• Security whitelist"
    ],
    notes: "Atlas free tier is great for learning. AWS/GCP run underneath.",
    takeaway: "Cloud database management.",
    duration: 3
  },

  // --- SECURITY (Slides 41-52) ---
  {
    id: 41,
    layout: 'section',
    title: "Section 5",
    subtitle: "Security & Authentication",
    sectionTitle: "Trust No One",
    notes: "The internet is a dangerous place. We need to secure our API.",
    takeaway: "Security Layer",
    duration: 0
  },
  {
    id: 42,
    layout: 'two-column',
    title: "Auth vs Auth",
    columns: {
      left: {
        title: "Authentication (AuthN)",
        content: ["Who are you?", "Login", "Identity"],
        color: "text-cyan-400"
      },
      right: {
        title: "Authorization (AuthZ)",
        content: ["What can you do?", "Permissions", "Access Control"],
        color: "text-green-400"
      }
    },
    notes: "You can be authenticated (logged in) but not authorized (admin access).",
    takeaway: "Identity vs Permission.",
    duration: 3
  },
  {
    id: 43,
    layout: 'content',
    title: "Never Store Plain Passwords",
    content: [
      "If you store 'password123' in the DB, you are liable.",
      "When a DB leaks (and it will), hackers get user passwords.",
      "Solution: Hashing."
    ],
    notes: "Hashing is one-way. You can't turn a hash back into a password.",
    takeaway: "Hash it or crash it.",
    duration: 3
  },
  {
    id: 44,
    layout: 'code',
    title: "Hashing with Bcrypt",
    code: `import bcrypt from 'bcryptjs';

// Registration
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash('password123', salt);
// Store hashedPassword in DB

// Login
const isMatch = await bcrypt.compare(
  'password123', 
  user.password // The hash from DB
);
if (isMatch) { /* Log in */ }`,
    notes: "Bcrypt adds a 'salt' so identical passwords have different hashes. It's also slow by design to thwart brute force.",
    takeaway: "Bcrypt is the industry standard.",
    duration: 5
  },
  {
    id: 45,
    layout: 'diagram',
    title: "JWT (JSON Web Tokens)",
    content: [
      "A stateless way to handle sessions.",
      "Structure: Header . Payload . Signature",
      "1. User logs in.",
      "2. Server creates signed JWT.",
      "3. Client stores JWT.",
      "4. Client sends JWT in header for every request."
    ],
    notes: "Server doesn't remember the user. It just verifies the token signature.",
    takeaway: "Stateless Authentication.",
    duration: 5
  },
  {
    id: 46,
    layout: 'code',
    title: "Creating a JWT",
    code: `import jwt from 'jsonwebtoken';

const payload = { 
  user: { 
    id: user.id,
    role: user.role 
  } 
};

const token = jwt.sign(
  payload, 
  process.env.JWT_SECRET, 
  { expiresIn: '1h' }
);

res.json({ token });`,
    notes: "The payload is visible (base64). Don't put passwords in it! The signature makes it tamper-proof.",
    takeaway: "Sign tokens with a secret.",
    duration: 4
  },
  {
    id: 47,
    layout: 'code',
    title: "Auth Middleware (The Guard)",
    code: `const auth = (req, res, next) => {
  const token = req.header('x-auth-token');
  
  if (!token) return res.status(401).json({ msg: 'No token' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user; // Attach user to request
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};`,
    notes: "This middleware protects routes. If token is bad, request stops here.",
    takeaway: "Protect your private routes.",
    duration: 5
  },
  {
    id: 48,
    layout: 'code',
    title: "Environment Variables",
    code: `// .env file
PORT=5000
MONGO_URI=mongodb+srv://...
JWT_SECRET=supersecretkey

// config.js
import dotenv from 'dotenv';
dotenv.config();

console.log(process.env.PORT);`,
    notes: "NEVER commit .env to GitHub. Add it to .gitignore.",
    takeaway: "Keep secrets secret.",
    duration: 3
  },
  {
    id: 49,
    layout: 'content',
    title: "Common Security Vulnerabilities",
    content: [
      "1. Injection (SQL/NoSQL) - Use Mongoose to prevent this.",
      "2. XSS (Cross Site Scripting) - React escapes HTML by default.",
      "3. CSRF (Cross Site Request Forgery) - Use tokens.",
      "4. DDOS - Rate limiting."
    ],
    notes: "Security is a layered onion.",
    takeaway: "OWASP Top 10.",
    duration: 4
  },
  {
    id: 50,
    layout: 'code',
    title: "Input Validation",
    subtitle: "Trust but Verify",
    code: `import { body, validationResult } from 'express-validator';

app.post('/user', [
  body('email').isEmail(),
  body('password').isLength({ min: 5 })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // Proceed...
});`,
    notes: "Never trust user input. Validate at the API gate.",
    takeaway: "express-validator is your friend.",
    duration: 4
  },
  {
    id: 51,
    layout: 'content',
    title: "CORS (Cross-Origin Resource Sharing)",
    content: [
      "Browser security feature.",
      "Prevents site A from calling API B.",
      "You must explicitly allow your frontend to call your backend.",
      "npm install cors"
    ],
    code: `import cors from 'cors';
app.use(cors()); // Allow all`,
    notes: "If you see a red CORS error in console, it's a backend config issue.",
    takeaway: "Configure CORS for your frontend domain.",
    duration: 3
  },
  {
    id: 52,
    layout: 'content',
    title: "Security Checklist",
    content: [
      "✅ HTTPS only",
      "✅ Secure Headers (Helmet.js)",
      "✅ Rate Limiting",
      "✅ Data Sanitization",
      "✅ Logging/Monitoring"
    ],
    notes: "Don't ship without these.",
    takeaway: "Production readiness.",
    duration: 3
  },

  // --- DAY BREAK (Slides 53-54) ---
  {
    id: 53,
    layout: 'section',
    title: "End of Day 1",
    subtitle: "Backend & Database Mastery",
    sectionTitle: "Rest up. Tomorrow we visualize.",
    notes: "We have covered the invisible foundation: Node, Express, Mongo, and Security. Tomorrow, we build the visible palace on top of this foundation.",
    takeaway: "Foundation Complete.",
    duration: 5
  },
  {
    id: 54,
    layout: 'section',
    title: "Day 2",
    subtitle: "Frontend & Scale",
    sectionTitle: "Welcome Back.",
    notes: "Today is about React, Big Data integration, and deployment. We connect the backend we built yesterday to a user interface.",
    takeaway: "Let's build the UI.",
    duration: 5
  },

  // --- REACT (Slides 55-74) ---
  {
    id: 55,
    layout: 'section',
    title: "Section 6",
    subtitle: "React.js Deep Dive",
    sectionTitle: "Thinking in Components",
    notes: "Day 2 begins. The Frontend.",
    takeaway: "Frontend Layer",
    duration: 0
  },
  {
    id: 56,
    layout: 'two-column',
    title: "SPA vs MPA",
    columns: {
      left: {
        title: "Multi-Page (Traditional)",
        content: [
          "• Server renders HTML",
          "• Every click = Page Reload",
          "• Slow user experience"
        ],
        color: "text-gray-400"
      },
      right: {
        title: "Single-Page (React)",
        content: [
          "• One HTML file (index.html)",
          "• JS manages DOM",
          "• Fast, app-like feel"
        ],
        color: "text-cyan-400"
      }
    },
    notes: "React takes over the browser window. It tricks the user into thinking pages are changing.",
    takeaway: "SPAs are the modern standard.",
    duration: 3
  },
  {
    id: 57,
    layout: 'diagram',
    title: "The Virtual DOM",
    content: [
      "Direct DOM manipulation is slow.",
      "React keeps a lightweight copy of DOM in memory (Virtual DOM).",
      "When state changes: Update Virtual DOM -> Diff with Real DOM -> Update ONLY changes.",
      "This is called Reconciliation."
    ],
    notes: "This is why React is fast.",
    takeaway: "React minimizes DOM repaints.",
    duration: 4
  },
  {
    id: 58,
    layout: 'code',
    title: "JSX: JavaScript XML",
    subtitle: "HTML in JS?",
    code: `const name = 'World';
const element = <h1>Hello, {name}</h1>;

// It compiles to:
// React.createElement('h1', null, 'Hello, ', name);`,
    notes: "JSX is syntactic sugar. You can use full JS power inside { }.",
    takeaway: "UI and Logic live together.",
    duration: 3
  },
  {
    id: 59,
    layout: 'code',
    title: "Functional Components",
    code: `function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Usage
<Welcome name="Alice" />`,
    notes: "Components are just functions that return UI. Props are arguments.",
    takeaway: "Components are reusable blocks.",
    duration: 3
  },
  {
    id: 60,
    layout: 'code',
    title: "State: The Heart of React",
    subtitle: "useState Hook",
    code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`,
    notes: "When state changes, React re-renders the component automatically. Never modify state directly (count++).",
    takeaway: "State drives the UI.",
    duration: 4
  },
  {
    id: 61,
    layout: 'code',
    title: "Effects: Side Effects",
    subtitle: "useEffect Hook",
    code: `import { useEffect } from 'react';

function UserList() {
  useEffect(() => {
    // Run this code on mount
    fetchUsers();
    
    // Cleanup on unmount
    return () => console.log('Cleanup');
  }, []); // [] = Run once
}`,
    notes: "Used for API calls, subscriptions, timers. The dependency array controls when it runs.",
    takeaway: "Lifecycle management.",
    duration: 5
  },
  {
    id: 62,
    layout: 'code',
    title: "useEffect Dependencies",
    code: `useEffect(() => {
  console.log('Count changed');
}, [count]); // Run when 'count' changes

useEffect(() => {
  console.log('Every render');
}); // No array = Every render`,
    notes: "Missing dependencies is a common bug source. Ensure variables used inside are listed.",
    takeaway: "Control your effects.",
    duration: 3
  },
  {
    id: 63,
    layout: 'code',
    title: "useRef Hook",
    subtitle: "Accessing the DOM directly",
    code: `import { useRef } from 'react';

function TextInput() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    // strict mode requires .current
    inputEl.current.focus(); 
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus</button>
    </>
  );
}`,
    notes: "Refs are for when you need to break out of the React model. Focus, animations, 3rd party libs.",
    takeaway: "Refs bypass Virtual DOM.",
    duration: 3
  },
  {
    id: 64,
    layout: 'code',
    title: "Custom Hooks",
    subtitle: "Sharing Logic",
    code: `function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url).then(res => res.json()).then(setData);
  }, [url]);

  return data;
}

// Usage
const users = useFetch('/api/users');`,
    notes: "Extract reusable logic into 'useSomething'.",
    takeaway: "DRY (Don't Repeat Yourself) for Logic.",
    duration: 4
  },
  {
    id: 65,
    layout: 'code',
    title: "Handling Forms",
    code: `const [text, setText] = useState('');

const handleSubmit = (e) => {
  e.preventDefault(); // Prevent page reload
  submitData(text);
};

<form onSubmit={handleSubmit}>
  <input 
    value={text} 
    onChange={(e) => setText(e.target.value)} 
  />
  <button>Submit</button>
</form>`,
    notes: "Controlled components: React controls the input value via State.",
    takeaway: "Controlled inputs.",
    duration: 4
  },
  {
    id: 66,
    layout: 'code',
    title: "React Router",
    subtitle: "Client-side Routing",
    code: `import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

<BrowserRouter>
  <nav>
    <Link to="/">Home</Link>
  </nav>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>`,
    notes: "Don't use <a> tags for internal links (causes reload). Use <Link>.",
    takeaway: "Navigation without reloading.",
    duration: 4
  },
  {
    id: 67,
    layout: 'code',
    title: "Axios vs Fetch",
    code: `// Fetch
fetch('/api/users')
  .then(res => res.json())
  .then(data => console.log(data));

// Axios
import axios from 'axios';
const res = await axios.get('/api/users');
console.log(res.data);`,
    notes: "Axios automatically parses JSON and handles errors better. It's preferred in MERN.",
    takeaway: "Axios for HTTP requests.",
    duration: 3
  },
  {
    id: 68,
    layout: 'diagram',
    title: "Prop Drilling vs Context",
    content: [
      "Prop Drilling: Passing data Parent -> Child -> Grandchild -> GreatGrandchild.",
      "Context API: Teleporting data from Parent -> GreatGrandchild directly.",
      "Use Context for global state (Theme, User, Lang)."
    ],
    notes: "Don't overuse Context. It makes components harder to reuse.",
    takeaway: "Global State Management.",
    duration: 4
  },
  {
    id: 69,
    layout: 'code',
    title: "Context API Example",
    code: `const ThemeContext = React.createContext();

// Provider
<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>

// Consumer (Hook)
const theme = useContext(ThemeContext);`,
    notes: "Wrap your app in Providers.",
    takeaway: "Avoid prop drilling hell.",
    duration: 3
  },
  {
    id: 70,
    layout: 'two-column',
    title: "State Managers",
    columns: {
      left: {
        title: "Built-in",
        content: ["useState", "useReducer", "Context API"],
        color: "text-green-400"
      },
      right: {
        title: "External Libraries",
        content: ["Redux (Complex)", "Zustand (Simple)", "Recoil (Atomic)"],
        color: "text-cyan-400"
      }
    },
    notes: "Start with Context. Move to Zustand/Redux only when needed.",
    takeaway: "Scale state management with app complexity.",
    duration: 3
  },
  {
    id: 71,
    layout: 'code',
    title: "useReducer Hook",
    subtitle: "Complex State Logic",
    code: `const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: throw new Error();
  }
}

// In component:
const [state, dispatch] = useReducer(reducer, initialState);
// dispatch({ type: 'increment' })`,
    notes: "If your useState logic is getting messy, switch to useReducer. It separates logic from the component.",
    takeaway: "Redux-lite built into React.",
    duration: 4
  },
  {
    id: 72,
    layout: 'code',
    title: "Auth in React",
    subtitle: "Storing the Token",
    code: `const login = async (creds) => {
  const res = await axios.post('/login', creds);
  const token = res.data.token;
  
  localStorage.setItem('token', token);
  axios.defaults.headers.common['x-auth-token'] = token;
};`,
    notes: "Store JWT in localStorage. Send it with every subsequent request.",
    takeaway: "Frontend Auth Flow.",
    duration: 4
  },
  {
    id: 73,
    layout: 'code',
    title: "Protected Routes",
    code: `const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

<Route path="/dashboard" element={
  <PrivateRoute>
    <Dashboard />
  </PrivateRoute>
} />`,
    notes: "Redirect unauthenticated users away from protected pages.",
    takeaway: "Guard your UI routes.",
    duration: 4
  },
  {
    id: 74,
    layout: 'content',
    title: "Performance Optimization",
    content: [
      "• React.memo (Prevent re-renders)",
      "• useMemo / useCallback (Cache values/functions)",
      "• Code Splitting (Lazy load routes)",
      "• Virtualization (Rendering long lists)"
    ],
    notes: "Premature optimization is the root of all evil. Fix it when it's slow.",
    takeaway: "Keep React fast.",
    duration: 4
  },

  // --- BIG DATA (Slides 75-90) ---
  {
    id: 75,
    layout: 'section',
    title: "Section 7",
    subtitle: "Big Data Strategies",
    sectionTitle: "Handling Millions, Not Hundreds",
    notes: "This is where we separate junior from senior. Performance at scale.",
    takeaway: "Scaling Layer",
    duration: 0
  },
  {
    id: 76,
    layout: 'content',
    title: "The Problem of Scale",
    content: [
      "100 users: Everything works.",
      "100,000 users: Queries get slow.",
      "1,000,000 users: Server crashes (Out of Memory).",
      "We need streaming and efficient DB ops."
    ],
    notes: "Node has a memory limit (approx 1.5GB). You cannot load a 10GB file into a variable.",
    takeaway: "Memory is finite.",
    duration: 3
  },
  {
    id: 77,
    layout: 'diagram',
    title: "Streams in Node.js",
    content: [
      "A stream is data flowing over time.",
      "Types: Readable, Writable, Duplex, Transform.",
      "We don't wait for the whole file. We process chunks.",
      "Source -> Pipe -> Transform -> Pipe -> Destination"
    ],
    notes: "Like Netflix. You don't download the whole movie before watching. You stream it.",
    takeaway: "Stream, don't buffer.",
    duration: 4
  },
  {
    id: 78,
    layout: 'code',
    title: "Reading a Massive File",
    code: `import fs from 'fs';
import csv from 'csv-parser';

fs.createReadStream('huge-data.csv')
  .pipe(csv())
  .on('data', (row) => {
    // Process ONE row at a time.
    // RAM usage stays low (~50MB).
    processRow(row);
  })
  .on('end', () => {
    console.log('Done');
  });`,
    notes: "This code can process a 100GB file on a 1GB RAM server. Standard readFileSync would crash instantly.",
    takeaway: "Streams enable infinite processing.",
    duration: 5
  },
  {
    id: 79,
    layout: 'code',
    title: "Backpressure",
    subtitle: "When the hose is too big",
    code: `const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');

readStream.on('data', (chunk) => {
  const canWrite = writeStream.write(chunk);
  if (!canWrite) {
    // Writer is full, pause reader
    readStream.pause(); 
    writeStream.once('drain', () => readStream.resume());
  }
});`,
    notes: "If you read faster than you write, memory fills up. Backpressure handles flow control.",
    takeaway: "Respect the limits of the destination.",
    duration: 4
  },
  {
    id: 80,
    layout: 'code',
    title: "MongoDB Bulk Operations",
    code: `const bulkOps = [];

// Instead of saving 1 by 1...
rows.forEach(row => {
  bulkOps.push({
    insertOne: { document: row }
  });
});

// Send 1000 ops in 1 request
await User.bulkWrite(bulkOps);`,
    notes: "Network latency kills performance. Bulk operations reduce round trips.",
    takeaway: "Batch your DB writes.",
    duration: 4
  },
  {
    id: 81,
    layout: 'diagram',
    title: "Indexing Strategies",
    content: [
      "An index is a sorted data structure (B-Tree).",
      "Without Index: Collection Scan (O(n)) - Checks every doc.",
      "With Index: B-Tree Scan (O(log n)) - Jumps to data.",
      "Index fields used in Filter, Sort, and Join."
    ],
    notes: "Indexing is the single biggest performance gain for reads. But it slows down writes.",
    takeaway: "Index your query fields.",
    duration: 4
  },
  {
    id: 82,
    layout: 'code',
    title: "Compound Indexes",
    code: `// Index on multiple fields
UserSchema.index({ age: 1, country: 1 });

// Supports:
// find({ age: 20 })
// find({ age: 20, country: 'US' })

// Does NOT support:
// find({ country: 'US' }) (Prefix rule)`,
    notes: "Order matters in compound indexes. Think of a phone book (Last Name, First Name).",
    takeaway: "Design indexes for your queries.",
    duration: 4
  },
  {
    id: 83,
    layout: 'content',
    title: "Aggregation Framework",
    content: [
      "Pipeline of operations.",
      "Match -> Group -> Sort -> Project",
      "Process data ON THE DB SERVER.",
      "Don't fetch 1M rows to Node just to count them."
    ],
    notes: "Moving computation to the data is faster than moving data to computation.",
    takeaway: "Let the DB do the math.",
    duration: 4
  },
  {
    id: 84,
    layout: 'code',
    title: "Aggregation Example",
    code: `await Order.aggregate([
  // 1. Filter completed orders
  { $match: { status: 'completed' } },
  
  // 2. Group by Product and Sum Total
  { $group: {
      _id: '$product',
      totalRevenue: { $sum: '$amount' }
  }},
  
  // 3. Sort by Revenue desc
  { $sort: { totalRevenue: -1 } }
]);`,
    notes: "This transforms raw data into insights. It returns a small array of results.",
    takeaway: "Powerful analytics pipeline.",
    duration: 5
  },
  {
    id: 85,
    layout: 'code',
    title: "Pagination",
    subtitle: "Don't send all data",
    code: `const page = parseInt(req.query.page) || 1;
const limit = 20;
const skip = (page - 1) * limit;

const users = await User.find()
  .skip(skip)
  .limit(limit);

const total = await User.countDocuments();`,
    notes: "Essential for any list view. 'skip' can be slow on massive offsets, look into cursor-based pagination for millions of rows.",
    takeaway: "Paginate everything.",
    duration: 3
  },
  {
    id: 86,
    layout: 'content',
    title: "Caching with Redis",
    content: [
      "Database queries are slow (Disk/Network).",
      "Redis is fast (RAM).",
      "Cache frequent read queries.",
      "Check Cache -> If Miss -> Check DB -> Write Cache -> Return."
    ],
    notes: "Redis is an in-memory key-value store. Sub-millisecond response times.",
    takeaway: "Cache heavy queries.",
    duration: 3
  },
  {
    id: 87,
    layout: 'content',
    title: "Database Normalization?",
    content: [
      "SQL: Normalize (Reduce duplication).",
      "NoSQL: Denormalize (Duplicate for read speed).",
      "Example: Storing 'authorName' in the Post document to avoid looking up the User.",
      "Trade-off: Updates are harder (must update all copies)."
    ],
    notes: "In Big Data read-heavy systems, duplication is often acceptable for speed.",
    takeaway: "Optimize for Reads.",
    duration: 4
  },
  {
    id: 88,
    layout: 'diagram',
    title: "Sharding",
    content: [
      "When one server isn't enough.",
      "Split data across multiple servers (Shards).",
      "Based on a Shard Key (e.g., Region, UserID).",
      "Mongo handles routing queries to the right shard."
    ],
    notes: "Horizontal scaling. Infinite scale theoretical.",
    takeaway: "Scale out, not up.",
    duration: 3
  },
  {
    id: 89,
    layout: 'content',
    title: "Event-Driven Architecture",
    content: [
      "Decouple services.",
      "Instead of Srv A calling Srv B...",
      "Srv A emits Event 'UserCreated'.",
      "Srv B listens and acts.",
      "Tools: RabbitMQ, Kafka, BullMQ."
    ],
    notes: "Async communication makes systems resilient.",
    takeaway: "Events > Direct Calls.",
    duration: 4
  },
  {
    id: 90,
    layout: 'code',
    title: "Job Queues (BullMQ)",
    subtitle: "Background Processing",
    code: `import { Queue, Worker } from 'bullmq';

// Producer (API)
const myQueue = new Queue('emails');
await myQueue.add('welcome-email', { email: 'user@example.com' });

// Consumer (Worker Server)
const worker = new Worker('emails', async job => {
  await sendEmail(job.data.email);
});`,
    notes: "Never send emails or process videos in the main request loop. Offload to a queue.",
    takeaway: "Keep your API fast.",
    duration: 5
  },

  // --- DASHBOARD & DEPLOY (Slides 91-105) ---
  {
    id: 91,
    layout: 'section',
    title: "Section 8",
    subtitle: "Dashboard & Deployment",
    sectionTitle: "Going Live",
    notes: "Bringing it all together.",
    takeaway: "Presentation Layer",
    duration: 0
  },
  {
    id: 92,
    layout: 'content',
    title: "Data Visualization Libs",
    content: [
      "1. Recharts (React Native feel, easy)",
      "2. Chart.js (Canvas based, standard)",
      "3. D3.js (Hard, infinite control)",
      "We will use Recharts for MERN."
    ],
    notes: "Don't build charts from scratch.",
    takeaway: "Visualize your data.",
    duration: 3
  },
  {
    id: 93,
    layout: 'code',
    title: "Recharts Example",
    code: `<LineChart width={600} height={300} data={data}>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid stroke="#eee" />
  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  <Tooltip />
</LineChart>`,
    notes: "Declarative charts. Fits React model perfectly.",
    takeaway: "Simple charting.",
    duration: 3
  },
  {
    id: 94,
    layout: 'content',
    title: "Deployment Architecture",
    content: [
      "Frontend: Vercel / Netlify (Static CDN)",
      "Backend: Railway / Heroku / AWS (Node Process)",
      "Database: Mongo Atlas (Managed Cluster)"
    ],
    notes: "Separation of concerns. Frontend on CDN is fast.",
    takeaway: "Modern Hosting Stack.",
    duration: 3
  },
  {
    id: 95,
    layout: 'content',
    title: "CI/CD Pipelines",
    content: [
      "Continuous Integration / Continuous Deployment.",
      "GitHub Actions.",
      "1. Push Code",
      "2. Run Tests",
      "3. Build",
      "4. Deploy to Staging/Prod"
    ],
    notes: "Automate your deployment. Don't FTP files.",
    takeaway: "Automate everything.",
    duration: 3
  },
  {
    id: 96,
    layout: 'content',
    title: "Production Checklist",
    content: [
      "1. Remove console.logs",
      "2. Set NODE_ENV='production'",
      "3. Use PM2 (Process Manager) to keep Node alive",
      "4. Enable Compression (Gzip)",
      "5. Set up Monitoring (Sentry/New Relic)"
    ],
    notes: "Performance and stability tuning.",
    takeaway: "Production is different from Dev.",
    duration: 3
  },
  {
    id: 97,
    layout: 'code',
    title: "PM2 Essentials",
    code: `# Start app
pm2 start server.js -i max

# Monitor
pm2 monit

# Logs
pm2 logs`,
    notes: "-i max uses all CPU cores. Node is single threaded, but clustering allows multi-core usage.",
    takeaway: "Process Management.",
    duration: 3
  },
  {
    id: 98,
    layout: 'content',
    title: "Testing Strategy",
    content: [
      "Unit Tests (Jest) - Test functions in isolation.",
      "Integration Tests (Supertest) - Test API endpoints.",
      "E2E Tests (Cypress/Playwright) - Test full user flow in browser."
    ],
    notes: "Test pyramid: Many unit tests, fewer integration, few E2E.",
    takeaway: "Sleep better with tests.",
    duration: 4
  },
  {
    id: 99,
    layout: 'code',
    title: "Jest Unit Test",
    code: `test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});`,
    notes: "Simple, readable assertions.",
    takeaway: "Verify your logic.",
    duration: 2
  },
  {
    id: 100,
    layout: 'content',
    title: "The Career Path",
    content: [
      "Junior: Can build features with guidance.",
      "Mid-Level: Can design features, mentors juniors.",
      "Senior: Architects systems, understands scale/tradeoffs.",
      "Staff/Principal: Organizational impact, technical direction."
    ],
    notes: "Focus on problem solving, not just syntax.",
    takeaway: "Growth mindset.",
    duration: 3
  },
  {
    id: 101,
    layout: 'content',
    title: "Full Stack + Data",
    content: [
      "The 'Unicorn' skillset.",
      "Most devs know React OR Backend.",
      "Few know Data Engineering.",
      "Combining all three makes you invaluable."
    ],
    notes: "You can build the UI, the API, AND handle the data load.",
    takeaway: "Be the full package.",
    duration: 3
  },
  {
    id: 102,
    layout: 'two-column',
    title: "Next Steps",
    columns: {
      left: {
        title: "Build This",
        content: [
          "• E-commerce Store",
          "• Real-time Chat (Socket.io)",
          "• Data Dashboard"
        ],
        color: "text-green-400"
      },
      right: {
        title: "Learn This",
        content: [
          "• TypeScript (Must have)",
          "• Docker",
          "• AWS Fundamentals"
        ],
        color: "text-cyan-400"
      }
    },
    notes: "Don't just watch tutorials. Build things that break.",
    takeaway: "Keep building.",
    duration: 3
  },
  {
    id: 103,
    layout: 'content',
    title: "Resources",
    content: [
      "• MDN Web Docs (Bible of Web)",
      "• React.dev (New Docs)",
      "• Nodejs.org Docs",
      "• MongoDB University (Free courses)",
      "• Designing Data-Intensive Applications (Book)"
    ],
    notes: "The book by Martin Kleppmann is the bible of backend engineering.",
    takeaway: "Read the docs.",
    duration: 2
  },
  {
    id: 104,
    layout: 'section',
    title: "Q & A",
    subtitle: "Ask me anything",
    sectionTitle: "Open Floor",
    notes: "Any questions about stack, career, or specific code?",
    takeaway: "Stay curious.",
    duration: 10
  },
  {
    id: 105,
    layout: 'title',
    title: "Thank You",
    subtitle: "A Workshop by Technotery Business Solutions",
    notes: "Thanks for sticking through 5 hours of dense technical content. You are now equipped to build scalable systems.",
    takeaway: "You are a Full Stack Engineer.",
    duration: 1,
    visualDesc: "technotery.com | Workshop Complete"
  }
];