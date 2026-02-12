import { SlideData } from './types';

export const slides: SlideData[] = [
  // --- MODULE 1: INTRODUCTION (Slides 1-5) ---
  {
    id: 1,
    layout: 'title',
    title: "Full Stack Web Development Masterclass",
    subtitle: "From JavaScript Basics to Big Data Architecture",
    notes: "Welcome everyone. Today isn't just about learning syntax; it's about architecture and thinking like a systems engineer. We are going to bridge the gap between building a simple 'todo app' and building a system that handles data at scale, like real MERN applications in production. We will cover the entire MERN stack, but more importantly, we will understand *how* the pieces fit together under the hood and when to use each tool. Set the expectation that this will be fast-paced and hands-on: we'll constantly connect concepts to the ScaleMetrics backend we build live. By the end of these 5 hours, you should see the full picture of modern web development and feel confident recreating it on your own.",
    takeaway: "Today you transition from Coder to Engineer.",
    duration: 3,
    visualDesc: "Technotery Workshop | 5 Hours"
  },
  {
    id: 2,
    layout: 'two-column',
    title: "The Workshop Roadmap",
    columns: {
      left: {
        title: "Part 1: The Foundation",
        content: [
          "1. Modern JavaScript (ES6+)",
          "2. Asynchronous Programming",
          "3. Node.js Internals",
          "4. Express.js Architecture"
        ],
        color: "text-green-400"
      },
      right: {
        title: "Part 2: The Application",
        content: [
          "5. MongoDB & Database Design",
          "6. API Security & Testing",
          "7. React Frontend Integration",
          "8. Handling Scale & Big Data"
        ],
        color: "text-cyan-400"
      }
    },
    notes: "Walk participants through the roadmap slowly so they see the narrative of the day. Many students try to jump straight into React, but that is like trying to build a roof without walls; you cannot build a robust frontend (the skyscraper) without a solid backend foundation (Node/DB). Emphasize that Part 1 is about mastering the engine and wiring (JavaScript, Node, Express), then Part 2 is about building a polished dashboard on top (React + data at scale). Ask learners to quickly share where they feel weakest so you can pace those sections accordingly.",
    takeaway: "We build from the ground up.",
    duration: 3
  },
  {
    id: 3,
    layout: 'diagram',
    title: "The MERN Stack Ecosystem",
    content: [
      "M - MongoDB: The Database (NoSQL)",
      "E - Express: The Server Framework",
      "R - React: The UI Library",
      "N - Node.js: The Runtime Environment"
    ],
    notes: "Explain that MERN is still one of the most common full-stack combinations in industry because of its consistency. MERN allows for a 'JavaScript everywhere' approach: JSON moves from MongoDB, through Express/Node, and into React without needing conversion into another format, which lowers the barrier to entry and speeds teams up. Briefly mention that while modern meta-frameworks like Next.js exist, understanding the raw MERN pieces first gives a much deeper mental model. Use this slide to anchor vocabulary: whenever you say 'backend' or 'frontend' later, point back to these four boxes.",
    takeaway: "One language. Full Stack.",
    duration: 3
  },
  {
    id: 4,
    layout: 'content',
    title: "Client-Server Architecture",
    content: [
      "The Web is a conversation.",
      "1. Client (Browser) asks for data (Request).",
      "2. Server (Node) processes logic.",
      "3. Database (Mongo) retrieves data.",
      "4. Server sends data back (Response)."
    ],
    notes: "Everything we do today revolves around this loop; the request–response cycle is the heartbeat of the web. The client 'requests' a resource (like a webpage or user data), and the server 'responds' after doing work and usually talking to a database. Ask students to give real-life examples (opening Instagram, checking bank balance) and map each one to this four-step flow so they can internalize that every feature they build is just a variant of this conversation.",
    takeaway: "Request -> Process -> Response.",
    duration: 3
  },
  {
    id: 5,
    layout: 'section',
    title: "Module 1",
    subtitle: "Modern JavaScript",
    sectionTitle: "The Language of the Web",
    notes: "Before we touch a server or a database, we must master the tool we are using. Node.js IS JavaScript, just running outside the browser, so if your JS fundamentals are weak, your backend code will be weak as well. Set the expectation that this module will feel like a rapid ES6+ refresher: we will modernize your syntax so the later Node/Express and React code feels natural instead of confusing.",
    takeaway: "JS Fundamentals",
    duration: 0
  },

  // --- MODULE 2: JS FUNDAMENTALS & ASYNC (Slides 6-15) ---
  {
    id: 6,
    layout: 'code',
    title: "ES6: let & const",
    subtitle: "Stop using 'var'",
    code: `// --- THE OLD WAY (Avoid this) ---
// 'var' is function-scoped. It leaks out of blocks.
var name = "John";

// --- THE MODERN WAY (Use this) ---
// 'let' is block-scoped. Use it only if variables change.
let age = 25; 
age = 26; // This is allowed

// 'const' is block-scoped and immutable.
// This is your default choice for 99% of variables.
const PI = 3.14; 
// PI = 3.15; // ❌ ERROR: Assignment to constant variable`,
    notes: "In modern development, 'var' is considered a bad practice because of hoisting and function scoping, which make it behave unpredictably in large files. 99% of the time, you should use 'const' so your variables cannot be accidentally reassigned, which prevents subtle bugs in production. Only use 'let' when you know for a fact the value needs to change (like in a loop or a counter), and challenge students to refactor any old code they see using 'var' in their own projects after the workshop.",
    takeaway: "Default to const.",
    duration: 3
  },
  {
    id: 7,
    layout: 'code',
    title: "Arrow Functions",
    subtitle: "Cleaner Syntax",
    code: `// --- TRADITIONAL FUNCTION ---
function add(a, b) {
  return a + b;
}

// --- ARROW FUNCTION (ES6) ---
// Cleaner syntax. Implicit return if no brackets used.
const add = (a, b) => a + b;

// With a block body (requires explicit return)
const log = (msg) => {
  console.log("Log:", msg);
  return true;
};`,
    notes: "Arrow functions are not just syntactic sugar to save typing; they also handle the 'this' keyword differently, preserving the context of where they were defined. This becomes a lifesaver when we get to React components, event handlers, and callbacks. In this workshop, we will use arrow functions almost exclusively so that our examples match current best practices and what you see in modern tutorials and codebases.",
    takeaway: "Modernize your functions.",
    duration: 3
  },
  {
    id: 8,
    layout: 'code',
    title: "Destructuring",
    subtitle: "Unpacking Data",
    code: `const user = { 
  name: "Alice", 
  age: 30, 
  role: "Admin",
  location: "NY"
};

// --- WITHOUT DESTRUCTURING ---
// const name = user.name;
// const role = user.role;

// --- WITH DESTRUCTURING ---
// Extract specifically what you need in one line
const { name, role } = user;

console.log(name); // Output: "Alice"`,
    notes: "You will use destructuring constantly in Express and React. When a request comes in, it has a lot of data, but controllers usually only care about specific pieces (like `email` and `password` from `req.body`). Destructuring lets us extract exactly what we need in one readable line, keeping our code concise and reducing the chance of typos when repeatedly writing `object.property` everywhere.",
    takeaway: "Extract what you need.",
    duration: 3
  },
  {
    id: 9,
    layout: 'content',
    title: "Synchronous vs Asynchronous",
    content: [
      "Synchronous: Line 2 waits for Line 1 to finish. (Blocking)",
      "Asynchronous: Line 2 runs while Line 1 is still working. (Non-blocking)",
      "JavaScript is Single-Threaded. Blocking code freezes the entire server.",
      "We MUST use Async for: Database, File I/O, API calls."
    ],
    notes: "Use the restaurant waiter analogy to make this memorable. In a synchronous world, the waiter takes your order, gives it to the chef, and then just stands in the kitchen doing nothing until the food is ready—no one else gets served. In an asynchronous world, the waiter gives the order to the chef and immediately goes to serve other tables while the food cooks, maximizing throughput. Node.js is that efficient waiter: it delegates slow tasks (like database calls) and keeps serving other clients instead of blocking.",
    takeaway: "Don't block the thread.",
    duration: 4
  },
  {
    id: 10,
    layout: 'code',
    title: "The Old Way: Callbacks",
    subtitle: "Callback Hell",
    code: `// This is hard to read and debug
getData(function(a) {
  // We wait for 'a' to return...
  getMoreData(a, function(b) {
    // Then we wait for 'b'...
    getEvenMoreData(b, function(c) {
      // Then we wait for 'c'...
      console.log(c);
    });
  });
});`,
    notes: "This structure is affectionately known as 'callback hell' or the 'pyramid of doom'. It appears whenever you chain many asynchronous operations that depend on each other and nest anonymous functions too deeply. Point out how hard it would be to insert logging, handle errors in the middle, or reuse any of these inner blocks. This pain is exactly why Promises—and later async/await—were invented.",
    takeaway: "Avoid nesting hell.",
    duration: 3
  },
  {
    id: 11,
    layout: 'code',
    title: "The Better Way: Promises",
    subtitle: "Chaining .then()",
    code: `// Flattens the code using .then() chaining
getData()
  .then(a => {
    return getMoreData(a);
  })
  .then(b => {
    return getEvenMoreData(b);
  })
  .then(c => {
    console.log(c);
  })
  .catch(err => {
    // Handles errors for ANY of the steps above
    console.error(err);
  });`,
    notes: "A Promise is an object representing the eventual completion or failure of an asynchronous operation, and it moves through three states: pending, fulfilled (resolved), or rejected. The real win is how `.then()` and `.catch()` let us flatten our code into a clean top-to-bottom chain instead of a pyramid of nested callbacks. As you step through this example, have students trace where errors go so they see that a single `.catch()` can handle failures from any step in the chain.",
    takeaway: "Promises flatten the code.",
    duration: 4
  },
  {
    id: 12,
    layout: 'code',
    title: "The Best Way: Async / Await",
    subtitle: "Syntactic Sugar for Promises",
    code: `// 1. Mark function as 'async'
const processData = async () => {
  try {
    // 2. 'await' pauses execution here until getData() finishes
    const a = await getData();
    
    // 3. This line won't run until 'a' is ready
    const b = await getMoreData(a);
    
    console.log(b);
  } catch (error) {
    // 4. Catches errors from any step
    console.error("Something went wrong", error);
  }
};`,
    notes: "Async/await is the modern standard for writing asynchronous JavaScript and is built directly on top of Promises. It lets your code read top-to-bottom like synchronous logic, while still being non-blocking under the hood. Explain that `await` tells JavaScript: 'Pause this specific function here, go do other work, and resume when this Promise settles.' Emphasize the importance of wrapping awaits in `try/catch` blocks to prevent unhandled rejections from crashing your Node process.",
    takeaway: "Write async code that looks sync.",
    duration: 5
  },
  {
    id: 13,
    layout: 'content',
    title: "Rules of Async/Await",
    content: [
      "1. You can only use `await` inside a function marked `async`.",
      "2. `async` functions always return a Promise implicitly.",
      "3. Use `try/catch` blocks to handle errors (rejections).",
      "4. `await` halts the local function execution, not the whole program."
    ],
    notes: "Memorize these rules because almost every async bug in beginner code comes from breaking them. The most common error you will see is 'SyntaxError: await is only valid in async functions', which simply means you forgot to mark a function as `async`. Also, never forget the `try/catch` block around awaited database or network calls; otherwise a simple MongoDB outage could crash your entire application instead of returning a friendly error to the client.",
    takeaway: "Master Async/Await.",
    duration: 3
  },
  {
    id: 14,
    layout: 'code',
    title: "Handling Parallel Promises",
    code: `const fetchAll = async () => {
  // Triggers both requests immediately (in parallel)
  const userPromise = getUser(1);
  const postsPromise = getPosts(1);

  // 'Promise.all' waits for BOTH to finish
  const [user, posts] = await Promise.all([
    userPromise, 
    postsPromise
  ]);
  
  console.log(user, posts);
};`,
    notes: "A common performance mistake is awaiting independent operations sequentially when they do not depend on each other. If `getUser` takes 2 seconds and `getPosts` takes 2 seconds, awaiting them one by one takes roughly 4 seconds, which feels slow in a real API. Using `Promise.all` fires both requests at once and waits for both to finish, cutting total time in half; show this with a quick timing demo so the benefit is obvious.",
    takeaway: "Maximize concurrency.",
    duration: 4
  },
  {
    id: 15,
    layout: 'section',
    title: "Module 2",
    subtitle: "Node.js Internals",
    sectionTitle: "Understanding the Runtime",
    notes: "Now that we have modern JavaScript fundamentals refreshed, we can zoom out and look at the environment where our backend actually runs: Node.js. Frame this as moving from 'how to speak the language' to 'how the engine that runs the language works'. Understanding Node internals (event loop, modules, core APIs) will make later performance and debugging issues much easier to reason about.",
    takeaway: "Node.js Core",
    duration: 0
  },

  // --- MODULE 3: NODE.JS INTERNALS (Slides 16-25) ---
  {
    id: 16,
    layout: 'two-column',
    title: "What is Node.js really?",
    columns: {
      left: {
        title: "Components",
        content: [
          "• V8 Engine (JS -> Machine Code)",
          "• Libuv (C++ library for Event Loop)",
          "• Core Modules (fs, http, path)"
        ],
        color: "text-green-400"
      },
      right: {
        title: "Capabilities",
        content: [
          "• File System Access",
          "• Network Access",
          "• Operating System Access"
        ],
        color: "text-cyan-400"
      }
    },
    notes: "Clarify that Node.js is not a new language—it is a runtime environment for running JavaScript outside the browser. It bundles the V8 engine (the same one that powers Chrome) with C++ bindings via Libuv to talk to the operating system. That combination gives JavaScript superpowers it normally doesn't have in the browser, like reading from the file system, opening TCP ports, and running long-lived server processes.",
    takeaway: "Node = JS + Power.",
    duration: 3
  },
  {
    id: 17,
    layout: 'diagram',
    title: "The Event Loop",
    content: [
      "1. Call Stack (Executes JS)",
      "2. Web APIs / C++ Threads (Handles I/O)",
      "3. Callback Queue (Holds finished tasks)",
      "4. Event Loop (Checks Stack & Queue)"
    ],
    notes: "Introduce the event loop as the traffic controller of Node.js. Conceptually, it's a `while(true)` loop that keeps checking: 'Is the call stack empty?' and 'Is there any completed work waiting in the callback queue?'. When the stack is clear, it pulls the next callback from the queue and runs it. This simple but powerful mechanism, combined with non-blocking I/O, is what lets Node handle thousands of concurrent connections on a single thread.",
    takeaway: "Node is Event-Driven.",
    duration: 5
  },
  {
    id: 18,
    layout: 'code',
    title: "Modules: Import vs Require",
    subtitle: "CommonJS vs ES Modules",
    code: `// --- COMMONJS (Legacy Node) ---
// const fs = require('fs');
// module.exports = myFunction;

// --- ES MODULES (Modern MERN) ---
// To use this, add "type": "module" in package.json
import fs from 'fs';

export const myFunction = () => { ... };
export default myFunction;`,
    notes: "Historically, Node used CommonJS (`require` / `module.exports`) while frontend projects used ES Modules (`import` / `export`), which created a mental split for beginners. Modern tooling and Node versions let us use ES Modules everywhere, which keeps our backend and frontend code visually consistent. Mention that this also unlocks better tree-shaking and tooling support, which becomes important as projects grow.",
    takeaway: "Use modern syntax.",
    duration: 3
  },
  {
    id: 19,
    layout: 'content',
    title: "NPM (Node Package Manager)",
    content: [
      "The largest software registry in the world.",
      "• `npm init` - Creates package.json",
      "• `npm install [package]` - Downloads code to node_modules",
      "• `package.json` - Your project manifest",
      "• `node_modules` - The heavy folder (Never git commit this!)"
    ],
    notes: "Explain that modern web development is about assembling reliable building blocks, not hand-writing everything from scratch. If you need to hash a password or validate emails, you reach for an existing, battle-tested package from NPM instead of reinventing it. Use the metaphor that `package.json` is your project blueprint (declaring what tools you need) and `node_modules` is the physical warehouse of installed tools—one that should never be committed to Git.",
    takeaway: "NPM is your toolbox.",
    duration: 3
  },
  {
    id: 20,
    layout: 'code',
    title: "Core Module: FS (File System)",
    code: `import fs from 'fs/promises';

const readFileData = async () => {
  try {
    // Reads file content as UTF-8 string
    const data = await fs.readFile('data.txt', 'utf-8');
    console.log(data);
  } catch (err) {
    // Always handle file not found errors
    console.error("File error:", err);
  }
};`,
    notes: "Node ships with a rich set of 'core modules' so you can do useful work without installing anything. `fs` is the file system module, and by importing from `fs/promises` we get a Promise-based API that works cleanly with async/await instead of callback style. As you walk through this example, emphasize always wrapping file I/O in try/catch and handling 'file not found' errors gracefully instead of letting the process crash.",
    takeaway: "Node controls files.",
    duration: 3
  },
  {
    id: 21,
    layout: 'code',
    title: "Core Module: Path",
    subtitle: "Handling file paths cross-platform",
    code: `import path from 'path';

// BAD: Hardcoding slashes (breaks on Windows vs Linux)
// const badPath = "folder/subfolder/file.txt";

// GOOD: Uses correct separator for the OS
const fullPath = path.join('folder', 'subfolder', 'file.txt');

// Output on Windows: folder\subfolder\file.txt
// Output on Linux:   folder/subfolder/file.txt`,
    notes: "If you hardcode forward slashes or backslashes in file paths, your code might work on your laptop but break when deployed to a different operating system. The `path` module abstracts these differences by automatically using the correct separator and normalizing paths. Reinforce that even in small demos, it's worth forming the habit of using `path.join` so your code is portable from day one.",
    takeaway: "Write cross-platform code.",
    duration: 3
  },
  {
    id: 22,
    layout: 'code',
    title: "Core Module: HTTP",
    subtitle: "The raw server",
    code: `import http from 'http';

// Creating a raw server
const server = http.createServer((req, res) => {
  // We have to manually handle headers and status
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello World');
  res.end();
});

server.listen(5000);`,
    notes: "This example shows how to create a server using raw Node.js. It works, but you have to manually manage headers, status codes, and sometimes streaming data chunks, which gets verbose and error-prone very quickly. Use this slide to justify why frameworks like Express exist: they wrap this low-level HTTP API in a developer-friendly layer so you can focus on routes and business logic instead of boilerplate.",
    takeaway: "Know the raw way, use the easy way.",
    duration: 3
  },
  {
    id: 23,
    layout: 'content',
    title: "Environment Variables",
    content: [
      "Never hardcode secrets (API keys, DB Passwords) in code.",
      "Use `.env` files.",
      "Install `dotenv` package.",
      "Access via `process.env.VARIABLE_NAME`"
    ],
    notes: "Security rule #1: if you commit your AWS keys or database passwords to GitHub, assume they are already compromised—bots actively scan public repos for secrets. We use a `.env` file to store sensitive values on the server, and we make sure `.env` is listed in `.gitignore` so it never leaves our machine. Emphasize that in professional teams, secret management gets even more advanced (vaults, secret managers), but `.env` is the essential first step.",
    takeaway: "Security First.",
    duration: 3
  },
  {
    id: 24,
    layout: 'section',
    title: "Module 3",
    subtitle: "Express.js Framework",
    sectionTitle: "Building the Backend",
    notes: "Node is the low-level engine, but Express is the chassis that makes building APIs fast, organized, and pleasant. Use this module intro to reset expectations: from here on, almost every slide connects directly to files we would create in a real backend project. Let students know that the patterns they see—routes, controllers, middleware—match how production Express apps are structured.",
    takeaway: "Server Architecture",
    duration: 0
  },
  {
    id: 25,
    layout: 'content',
    title: "What is Express?",
    content: [
      "A fast, unopinionated, minimalist web framework for Node.js.",
      "It handles:",
      "1. Routing (URLs)",
      "2. Middleware (Logic pipeline)",
      "3. Requests & Responses"
    ],
    notes: "Express is the 'E' in MERN and the de facto standard framework for Node APIs. It organizes the chaos of raw Node by giving us a clear way to declare routes (URLs), plug in middleware for cross-cutting concerns (logging, auth, validation), and send structured responses. Mention that even many newer frameworks and meta-frameworks build on the same concepts Express popularized, so learning it pays off long term.",
    takeaway: "Express simplifies the web.",
    duration: 3
  },

  // --- MODULE 4: EXPRESS.JS (Slides 26-35) ---
  {
    id: 26,
    layout: 'code',
    title: "Basic Express Server",
    code: `import express from 'express';
const app = express();

// Define a route for GET /
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(\`Server running on port \${PORT}\`)
});`,
    notes: "Highlight how little code it takes with Express to spin up a working API. `app.get('/')` registers a handler for GET requests to the root URL, and `res.send` takes care of headers and status codes for simple responses. Run this live, hit it in the browser or with Postman, and show students the log output so they can connect the request in their tool to the code that's running.",
    takeaway: "Simple setup.",
    duration: 3
  },
  {
    id: 27,
    layout: 'diagram',
    title: "The Middleware Pattern",
    content: [
      "Request -> [Middleware 1] -> [Middleware 2] -> [Route Handler] -> Response",
      "Middleware functions have access to:",
      "1. Request Object (req)",
      "2. Response Object (res)",
      "3. Next Function (next)"
    ],
    notes: "Express is essentially a chain of functions called middleware that every request flows through. Use the airport security analogy: step 1 check ticket, step 2 X-ray bag, step 3 body scan, step 4 board plane (the final route handler). If any step fails, you never reach the plane. Encourage students to map real concerns onto this chain—auth, logging, validation, rate limiting—so they can picture how large APIs stay maintainable.",
    takeaway: "Express is a chain of functions.",
    duration: 4
  },
  {
    id: 28,
    layout: 'code',
    title: "Writing Middleware",
    code: `// A custom middleware function
const logger = (req, res, next) => {
  // Log the HTTP Method and URL
  console.log(\`\${req.method} \${req.url}\`);
  
  // CRITICAL: Call next() to move to the next middleware
  next(); 
};

// Apply this middleware to ALL routes
app.use(logger);`,
    notes: "`next()` is the most important part of writing middleware; it passes control to the next function in the chain. If you forget to call `next()` (or send a response), the request will hang indefinitely and eventually time out. Use the security-guard analogy: they check your ID but never open the gate, so the line just backs up forever. Have students intentionally omit `next()` once to see this behavior and then fix it.",
    takeaway: "Always call next().",
    duration: 3
  },
  {
    id: 29,
    layout: 'code',
    title: "Parsing JSON Body",
    code: `// Built-in middleware to parse incoming JSON
// Without this, req.body will be 'undefined'
app.use(express.json()); 

app.post('/user', (req, res) => {
  // Now we can access the data sent by the client
  console.log(req.body.name); 
  
  res.send('User Saved');
});`,
    notes: "By default, Express doesn't know how to read JSON data in the body of a request; it only sees a raw stream of bytes. `express.json()` is a built-in middleware that parses that stream into a JavaScript object and attaches it to `req.body`. Make sure students understand that if they forget this line, `req.body` will be `undefined` and their POST/PUT handlers will appear to \"randomly\" fail.",
    takeaway: "Parse your inputs.",
    duration: 3
  },
  {
    id: 30,
    layout: 'code',
    title: "Route Parameters",
    subtitle: "Dynamic URLs",
    code: `// 1. URL Params (e.g., /users/123)
app.get('/users/:id', (req, res) => {
  // Access the dynamic ':id' part
  const userId = req.params.id;
  res.send(\`Fetching user \${userId}\`);
});

// 2. Query Strings (e.g., /search?q=phone)
app.get('/search', (req, res) => {
  // Access data after the '?'
  const query = req.query.q;
  res.send(\`Searching for \${query}\`);
});`,
    notes: "We use URL params (like `:id`) when we are identifying a specific resource, such as `/users/123`, and query strings (like `?q=phone&page=2`) when we are filtering, searching, or paginating data. Express automatically puts params into `req.params` and query strings into `req.query`. Encourage students to think intentionally about which one to use for each endpoint they design so their APIs feel consistent and self-explanatory.",
    takeaway: "Capture dynamic data.",
    duration: 4
  },
  {
    id: 31,
    layout: 'diagram',
    title: "Project Structure",
    content: [
      "project-root/",
      "  node_modules/",
      "  config/ (db connection)",
      "  controllers/ (business logic)",
      "  models/ (database schemas)",
      "  routes/ (HTTP endpoints)",
      "  middleware/ (auth, errors)",
      "  server.js",
      "  .env"
    ],
    notes: "Drive home that 'everything in server.js' is fine for a 20-line demo but a disaster for real projects. We separate concerns: models define data shape and rules, controllers contain business logic, and routes just map HTTP verbs + URLs to controller functions. Show a messy single-file example first, then this structured layout, so students feel why this structure scales better as features grow.",
    takeaway: "Organize for scale.",
    duration: 4
  },
  
  {
    id: 32,
    layout: 'section',
    title: "Module 4",
    subtitle: "MongoDB & Mongoose",
    sectionTitle: "Data Persistence",
    notes: "The server is now running and can respond to requests, but it has amnesia—once you restart it, everything in memory is gone. To build real applications, we need a persistent data store so user accounts, products, and analytics survive restarts. Use this moment to transition from 'stateless logic' to 'stateful data' and introduce MongoDB as the permanent memory for the system.",
    takeaway: "Database Layer",
    duration: 0
  },

  // --- MODULE 5: MONGODB & MONGOOSE (Slides 36-45) ---
  {
    id: 33,
    layout: 'two-column',
    title: "SQL vs NoSQL",
    columns: {
      left: {
        title: "SQL (Relational)",
        content: [
          "• Tables & Rows",
          "• Fixed Schema",
          "• Good for complex relationships",
          "• Vertical Scaling (Bigger Server)"
        ],
        color: "text-gray-400"
      },
      right: {
        title: "NoSQL (MongoDB)",
        content: [
          "• Collections & Documents",
          "• Flexible Schema",
          "• Good for Big Data / Rapid Dev",
          "• Horizontal Scaling (More Servers)"
        ],
        color: "text-green-400"
      }
    },
    notes: "MongoDB is a NoSQL database: instead of tables and rows, it uses collections and JSON-like documents stored as BSON (Binary JSON). That means the data in your database looks almost exactly like the JavaScript objects you already work with in Node and React, reducing the 'impedance mismatch' between code and storage. Use this slide to contrast the stricter, schema-first world of SQL with the more flexible, iterative development style MongoDB enables for many modern web apps.",
    takeaway: "JSON in the Database.",
    duration: 3
  },
  {
    id: 34,
    layout: 'content',
    title: "MongoDB Atlas",
    content: [
      "We do not install MongoDB on our laptop.",
      "We use the Cloud.",
      "1. Create Account on MongoDB Atlas.",
      "2. Create a Cluster (Free Tier).",
      "3. Whitelist IP Address.",
      "4. Get Connection String (URI)."
    ],
    notes: "In 2024+ most teams avoid babysitting database servers on their laptops or VPSs if they can. MongoDB Atlas is a Database-as-a-Service that handles provisioning, backups, security patches, and scaling for you. Emphasize that from the app's perspective, it's just a connection string (URI), which makes it easy to point the same code at development, staging, and production clusters without rewriting anything.",
    takeaway: "Cloud Native DB.",
    duration: 3
  },
  {
    id: 35,
    layout: 'content',
    title: "MongoDB Building Blocks",
    content: [
      "Database: A logical container for collections (e.g., scalemetrics_dev).",
      "Collection: A group of related documents (e.g., users, products, specifications).",
      "Document: A single JSON-like object stored inside a collection.",
      "Every document automatically gets an `_id` field (usually an ObjectId)."
    ],
    notes: "Before diving into code, lock in the mental model. In SQL you have Databases → Tables → Rows. In MongoDB you have Databases → Collections → Documents. Use your ScaleMetrics backend as the running example: one database (e.g. `scalemetrics_dev`) with three main collections: `users`, `products`, and `specifications`. Mention that each document is just a JSON-like object that maps neatly to your JavaScript objects.",
    takeaway: "Think in Databases → Collections → Documents instead of Databases → Tables → Rows.",
    duration: 3
  },
  {
    id: 36,
    layout: 'code',
    title: "Documents & ObjectId",
    subtitle: "A Product document in MongoDB",
    code: `// Example document in the "products" collection
{
  _id: ObjectId("66f1c9b8e3a4d71234567890"),
  name: "Enterprise Analytics Suite",
  sku: "ENT-ANALYTICS-001",
  price: 4999,
  quantity: 10,
  description: "Flagship analytics product for large teams",
  createdAt: ISODate("2026-02-01T10:15:00Z"),
  updatedAt: ISODate("2026-02-01T10:15:00Z")
}`,
    notes: "Show how a real document in the `products` collection might look for ScaleMetrics. Point out the `_id` field (an `ObjectId`) which is automatically added by MongoDB, and the `createdAt`/`updatedAt` fields which come from the `timestamps: true` option in your Mongoose schema. Explain that this document shape is what your React frontend eventually receives from the API.",
    takeaway: "Every MongoDB document has an `_id` and looks like a JSON object that your JS code can use directly.",
    duration: 3
  },
  {
    id: 37,
    layout: 'two-column',
    title: "Collections in ScaleMetrics",
    columns: {
      left: {
        title: "users",
        content: [
          "Stores login credentials and basic identity.",
          "Backed by `models/User.js`.",
          "Fields: email, password (hashed), timestamps."
        ],
        color: "text-green-400"
      },
      right: {
        title: "products & specifications",
        content: [
          "`products`: core product info (name, sku, price, quantity, description).",
          "`specifications`: key/value analytics details linked by product ObjectId.",
          "Backed by `models/Product.js` and `models/Specification.js`."
        ],
        color: "text-cyan-400"
      }
    },
    notes: "Tie the abstract idea of 'collections' directly to your live project. Open MongoDB Atlas later and show students the `users`, `products`, and `specifications` collections that your ScaleMetrics backend creates. Emphasize how each collection aligns with a Mongoose model in your code so the mapping is always clear.",
    takeaway: "Each Mongoose model maps to a real MongoDB collection that you can see in Atlas.",
    duration: 4
  },
  {
    id: 38,
    layout: 'content',
    title: "Embedded vs Referenced Documents",
    content: [
      "Embedded: Store related data inside the same document (one big JSON).",
      "Referenced: Store related data in another collection and link with an id.",
      "Rule of thumb: \"Data that is read together can be stored together\".",
      "ScaleMetrics choice: Products and their Specifications use references."
    ],
    notes: "Use a story: for a blog, comments might be embedded inside a post document; for ScaleMetrics, product specifications can grow large and be reused in analytics, so we keep them in a separate `specifications` collection and reference the `product` via ObjectId. Explain that this design makes it easy to query all specs across products and to add new specs without rewriting the main product document.",
    takeaway: "Pick embedded vs referenced based on access patterns, not just personal preference.",
    duration: 4
  },
  {
    id: 39,
    layout: 'diagram',
    title: "MongoDB Relationships",
    content: [
      "One-to-One: user → profile (rare in ScaleMetrics demo).",
      "One-to-Many: product → many specifications (our main pattern).",
      "Many-to-Many: users ↔ teams, students ↔ courses (handled via references).",
      "In MongoDB, relationships are modeled with ObjectId fields and sometimes extra join collections."
    ],
    notes: "Connect back to the 'Relationships' theory slide and show how it applies in MongoDB. For ScaleMetrics, highlight the one-to-many relationship between a single Product and many Specification documents. Briefly mention that many-to-many is often done via additional collections that hold pairs of ObjectIds.",
    takeaway: "Use ObjectId fields to express one-to-one, one-to-many, and many-to-many relationships.",
    duration: 4
  },
  {
    id: 40,
    layout: 'content',
    title: "Indexes in MongoDB",
    content: [
      "Indexes speed up queries at the cost of extra write overhead.",
      "Mongoose lets you define indexes in schemas (e.g., `sku` unique, indexed).",
      "ScaleMetrics: `sku` on Product and `product` on Specification are indexed.",
      "Good rule: index fields you frequently filter or sort on."
    ],
    notes: "Keep this high-level. Show the `index: true` and `unique: true` flags in your `Product` and `Specification` schemas. Explain that indexes help MongoDB jump directly to matching documents instead of scanning the whole collection, which becomes critical as data grows.",
    takeaway: "Add indexes to fields you search on often, like SKUs or foreign key references.",
    duration: 3
  },
  {
    id: 41,
    layout: 'two-column',
    title: "Schema Validation Layers",
    columns: {
      left: {
        title: "MongoDB Validation",
        content: [
          "MongoDB supports JSON Schema validation at the collection level.",
          "Useful for enforcing structure even if multiple apps write to the DB."
        ],
        color: "text-gray-400"
      },
      right: {
        title: "Mongoose Validation",
        content: [
          "Our workshop uses Mongoose schemas for validation in the app layer.",
          "Rules like `required: true`, `minlength`, `min`, and `unique` live in code."
        ],
        color: "text-green-400"
      }
    },
    notes: "Clarify that although MongoDB is flexible, you still want guardrails. In ScaleMetrics you rely on Mongoose schemas to validate data before it ever hits the database. Mention that in larger systems, teams might combine this with MongoDB's own JSON Schema validation for an extra safety net.",
    takeaway: "Use Mongoose schemas to keep data clean, and optionally MongoDB validation for an extra safety layer.",
    duration: 3
  },
  {
    id: 42,
    layout: 'content',
    title: "Why We Use Mongoose",
    content: [
      "Gives structure (schemas) on top of flexible MongoDB collections.",
      "Provides helpers like `pre('save')`, instance methods, and query APIs.",
      "Maps JS objects ↔ MongoDB documents with minimal boilerplate.",
      "Perfect for teaching and for most Node.js backend projects."
    ],
    notes: "End the MongoDB concept block by justifying your tool choice. Explain that while you can use the native MongoDB driver directly, Mongoose makes the most common patterns (schemas, references, hooks, queries) much easier to teach and maintain. Tell students that everything in the ScaleMetrics backend uses Mongoose models so the patterns feel consistent.",
    takeaway: "Mongoose is our productivity layer on top of raw MongoDB.",
    duration: 3
  },
  {
    id: 43,
    layout: 'code',
    title: "Connecting Mongoose",
    subtitle: "config/db.js",
    code: `// config/db.js (ScaleMetrics)
import mongoose from "mongoose";

// Connect to MongoDB using the URI defined in environment variables.
export const connectDB = async () => {
  try {
    // Keep DB connection details in env variables so secrets stay out of code.
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Fail fast in workshop demos
  }
};`,
    notes: "This is the real `config/db.js` from your ScaleMetrics backend. Walk line by line: we import Mongoose, read `MONGO_URI` from `.env`, connect once at startup, and if it fails we crash loudly so students notice immediately. After explaining, have them create `config/db.js` in their project with this exact code and then import `connectDB` in `server.js`.",
    takeaway: "Use a dedicated `connectDB` helper to wire MongoDB via environment variables.",
    duration: 3
  },
  {
    id: 44,
    layout: 'code',
    title: "Defining a Schema",
    subtitle: "models/Product.js (ScaleMetrics)",
    code: `import mongoose from "mongoose";

// Schema defines the structure of a product in ScaleMetrics
const productSchema = new mongoose.Schema(
  {
    // Human-readable product name (used in tables and detail views).
    name: { type: String, required: true, trim: true, index: true },

    // SKU is the primary external identifier and must be unique.
    sku: { type: String, required: true, trim: true, unique: true, index: true },

    // Stored as a simple number for workshop purposes (no currency handling).
    price: { type: Number, required: true, min: 0 },

    // How many units are available; used in dashboard summaries.
    quantity: { type: Number, required: true, min: 0, default: 0 },

    // Optional free-text description for detail views.
    description: { type: String, trim: true, default: "" },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;`,
    notes: "This is the real `models/Product.js` file from the ScaleMetrics backend. Even though MongoDB is 'schema-less', our *application* uses a Mongoose schema to enforce rules like 'name and sku are required' and 'price cannot be negative'. As you explain each field, have students create `models/Product.js` in their project and type this exact schema so they feel how a real production model looks.",
    takeaway: "Use Mongoose schemas to give structure and rules to your data.",
    duration: 4
  },
  {
    id: 45,
    layout: 'code',
    title: "Relationships (References) – Specifications",
    code: `// models/Specification.js (ScaleMetrics)
import mongoose from "mongoose";

// Each specification belongs to exactly one Product
const specificationSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",  // Must match the model name 'Product'
      required: true,
      index: true,
    },
    key: { type: String, required: true, trim: true },
    value: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);`,
    notes: "Instead of a generic Order/User example, this is our real `models/Specification.js`. Relational databases use Foreign Keys; here we use a MongoDB reference. The `product` field stores the `ObjectId` of a `Product`, linking extra key/value analytics data back to the core product document. Have students create `models/Specification.js` now so they see a real reference in action.",
    takeaway: "Use ObjectId references to link related collections in MongoDB.",
    duration: 3
  },
  {
    id: 46,
    layout: 'code',
    title: "Joining Data: Products + Specifications",
    code: `// controllers/productController.js (excerpt) – getProducts
const products = await Product.find().sort({ createdAt: -1 }).lean();
const productIds = products.map((p) => p._id);

// Fetch all specs for these products in a single query
const specs = await Specification.find({ product: { $in: productIds } }).lean();

// Group specs by product id
const specsByProduct = specs.reduce((acc, spec) => {
  const key = String(spec.product);
  if (!acc[key]) acc[key] = [];
  acc[key].push({ key: spec.key, value: spec.value });
  return acc;
}, {});

// Attach specs to each product for the frontend
const productsWithSpecs = products.map((product) => ({
  ...product,
  specifications: specsByProduct[String(product._id)] || [],
}));`,
    notes: "This is how ScaleMetrics \"joins\" Products with their Specifications. Instead of SQL JOINs, we do one query for products, one query for specifications, then group them in memory. Explain the flow slowly, then ask students to implement this logic inside `getProducts` so they understand how to assemble rich API responses from multiple collections. Mention that Mongoose also has `.populate()`, but here we show the join logic explicitly for learning.",
    takeaway: "Combine related collections in code to return analytics-friendly API responses.",
    duration: 4
  },
  {
    id: 47,
    layout: 'section',
    title: "Module 5",
    subtitle: "API Testing & Security",
    sectionTitle: "Verification",
    notes: "We have built the API. Now, how do we prove it works? And how do we stop hackers from destroying it?",
    takeaway: "QA & SecOps",
    duration: 0
  },

  // --- MODULE 6: API & SECURITY (Slides 46-52) ---
  {
    id: 48,
    layout: 'content',
    title: "Postman: The Developer's Best Friend",
    content: [
      "A tool to simulate HTTP requests.",
      "1. Choose Method (GET, POST, PUT, DELETE).",
      "2. Enter URL (http://localhost:5000/api...).",
      "3. Set Headers (Content-Type: application/json).",
      "4. Set Body (Raw JSON).",
      "5. Click Send."
    ],
    notes: "You cannot develop a backend effectively using just a browser. A browser bar can only do GET requests. To verify your Login (POST) or Update (PUT) logic, you need a tool like Postman. It allows you to act as the 'Client' before you have built the React Frontend.",
    takeaway: "Test before frontend integration.",
    duration: 3
  },
  {
    id: 49,
    layout: 'content',
    title: "HTTP Status Code Cheat Sheet",
    content: [
      "200 OK – Generic success response.",
      "201 Created – New resource successfully created.",
      "204 No Content – Success, but no response body.",
      "301 Moved Permanently – Resource moved to a new URL.",
      "304 Not Modified – Client can use cached version.",
      "400 Bad Request – Invalid request/parameters from client.",
      "401 Unauthorized – Authentication failed or missing.",
      "403 Forbidden – Authenticated but not allowed to access resource.",
      "404 Not Found – Resource does not exist.",
      "409 Conflict – Request conflicts with current state (e.g., duplicate).",
      "422 Unprocessable Entity – Validation/semantic error in request body.",
      "429 Too Many Requests – Client hit rate limit.",
      "500 Internal Server Error – Unexpected server-side error.",
      "503 Service Unavailable – Server temporarily overloaded or down for maintenance."
    ],
    notes: "Use this as your mental map when building and testing APIs. 2xx means 'success' (200 for generic success, 201 for creates, 204 for no body). 3xx is about redirects and caching (301, 304). 4xx is always the client's fault (400 bad input, 401/403 auth issues, 404 not found, 409 conflict, 422 validation, 429 rate limiting). 5xx is the server's fault (500 generic crash, 503 when the server is down or overloaded). When in doubt, ask: Is this a client mistake or a server mistake? Then pick a code from the right family.",
    takeaway: "Pick status codes intentionally based on success (2xx), client errors (4xx), and server errors (5xx).",
    duration: 4
  },
  {
    id: 50,
    layout: 'content',
    title: "Authentication vs Authorization",
    content: [
      "Authentication (Who are you?): Logging in.",
      "Authorization (What can you do?): Permissions (Admin vs User).",
      "We use JSON Web Tokens (JWT) for this."
    ],
    notes: "Authentication is like showing your Passport at the airport (proving who you are). Authorization is looking at your ticket to see if you are allowed in First Class (permissions). We will build both.",
    takeaway: "Identify and Permit.",
    duration: 3
  },
  {
    id: 51,
    layout: 'code',
    title: "Project Setup & Dependencies",
    subtitle: "package.json & core libraries",
    code: `// 1) Initialize the project
//    npm init -y

// 2) Install runtime dependencies
//    npm install express mongoose dotenv cors bcryptjs jsonwebtoken multer csv-parser

// 3) Install dev dependency for auto-restart
//    npm install -D nodemon

// 4) Example package.json (simplified)
{
  "name": "scalemetrics-backend",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "dev": "nodemon server.js",
    "start": "node server.js"
  }
}`,
    notes: "Right after students understand Authentication vs Authorization, start the real project. Have them run these commands in an empty folder to bootstrap the backend, then open `package.json` and walk through each dependency and script. By the end of this step they should be able to run `npm run dev` (it will fail until `server.js` exists, which we add next).",
    takeaway: "Initialize the ScaleMetrics backend project immediately after learning the auth concepts.",
    duration: 5
  },
  
  {
    id: 52,
    layout: 'code',
    title: "Hashing Passwords (Bcrypt)",
    code: `// models/User.js (ScaleMetrics)
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  { timestamps: true }
);

// Hash password before saving so plain text never reaches the database.
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare a candidate password with the stored password hash.
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};`,
    notes: "Instead of hashing passwords manually in controllers, our real project moves this logic into the `User` model. The `pre('save')` hook guarantees that plain text passwords never reach MongoDB, and `comparePassword` keeps login code clean. Walk through this line by line, then have students build `models/User.js` exactly like this so their registration and login flow is secure by default.",
    takeaway: "Put hashing logic in the User model so passwords are always stored securely.",
    duration: 4
  },
  {
    id: 53,
    layout: 'code',
    title: "Generating JWT",
    code: `// controllers/authController.js (ScaleMetrics) – helper
import jwt from "jsonwebtoken";

const generateToken = (userId) => {
  // Sign a new token containing the user ID
  return jwt.sign(
    { id: userId },
    process.env.JWT_SECRET,                 // Secret key from .env
    { expiresIn: process.env.JWT_EXPIRES_IN || "1d" } // 1 day by default
  );
};`,
    notes: "This is the same `generateToken` helper we use inside `authController.js`. Once the user logs in or registers, we give them a JWT. For future requests, they don't send the password again; they send this token. Explain the payload `{ id: userId }`, the secret key, and the expiry, then point out where this helper is called in `registerUser` and `loginUser`. Ask students to add this helper to their own controller file.",
    takeaway: "Use a small helper function to consistently create JWTs for authenticated users.",
    duration: 3
  },
  {
    id: 54,
    layout: 'code',
    title: "Protect Middleware",
    code: `// middleware/authMiddleware.js (ScaleMetrics)
import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Not authorized, token missing" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id: ... }
    next();
  } catch (error) {
    return res.status(401).json({ message: "Not authorized, invalid token" });
  }
};`,
    notes: "This is exactly the `middleware/authMiddleware.js` file from your backend. We place this `protect` middleware before any private route (like all `/api/products` routes). It checks for a `Bearer <token>` header, verifies the token, and attaches the decoded payload to `req.user`. After explaining it, have students create `middleware/authMiddleware.js` and then plug it into `productRoutes.js`.",
    takeaway: "Use a reusable JWT middleware to guard all protected API routes.",
    duration: 4
  },
  {
    id: 55,
    layout: 'code',
    title: "Router Module",
    subtitle: "routes/authRoutes.js (ScaleMetrics)",
    code: `import express from "express";
import { loginUser, registerUser } from "../controllers/authController.js";

// Router responsible for user authentication (register + login) endpoints.
const router = express.Router();

// POST /api/auth/register -> create a new user account.
router.post("/register", registerUser);

// POST /api/auth/login -> authenticate and return a JWT.
router.post("/login", loginUser);

export default router;`,
    notes: "This is the exact `routes/authRoutes.js` from our ScaleMetrics backend. It keeps all auth-related endpoints in one place and keeps `server.js` clean. In `server.js` we then mount this router with `app.use('/api/auth', authRoutes)`. After you explain this slide, have students create `routes/authRoutes.js` in their backend folder with exactly this structure.",
    takeaway: "Real-world modular routing wired into `server.js`.",
    duration: 3
  },
  {
    id: 56,
    layout: 'code',
    title: "Controller Module",
    subtitle: "controllers/authController.js (ScaleMetrics)",
    code: `import jwt from "jsonwebtoken";
import User from "../models/User.js";

const generateToken = (userId) => {
  return jwt.sign(
    { id: userId },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
  );
};

// Register a new user
export const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({ email, password });

    return res.status(201).json({
      message: "User registered successfully",
      token: generateToken(user._id),
      user: { id: user._id, email: user.email },
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Login existing user
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    return res.status(200).json({
      message: "Login successful",
      token: generateToken(user._id),
      user: { id: user._id, email: user.email },
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};`,
    notes: "Controllers are the brain. This is the real `controllers/authController.js` from our backend. Notice how it validates input, talks to the `User` model, and always responds with proper HTTP status codes (400, 401, 201, 200, 500). After this slide, ask students to build `controllers/authController.js` in their own project by following this exact pattern.",
    takeaway: "Real auth controller separating HTTP layer from business logic.",
    duration: 3
  },
  {
    id: 57,
    layout: 'code',
    title: "Error Handling Middleware",
    code: `// Custom Error Handler
const errorHandler = (err, req, res, next) => {
  // Determine status code (default to 500 server error)
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  
  res.status(statusCode);
  
  // Send JSON error message
  res.json({
    message: err.message,
    // Only show stack trace in development mode
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

app.use(errorHandler);`,
    notes: "Instead of writing `try-catch` blocks in every single function and manually sending error responses, we can simply `throw` an error, and this central middleware will catch it and format it nicely for the client.",
    takeaway: "Centralize error handling.",
    duration: 4
  },
  {
    id: 58,
    layout: 'code',
    title: "Create Operation",
    subtitle: "controllers/productController.js – createProduct",
    code: `// Create a new product along with its specifications.
export const createProduct = async (req, res) => {
  try {
    const { name, sku, price, quantity, description, specifications } = req.body;

    if (!name || !sku || price === undefined || quantity === undefined) {
      return res.status(400).json({ message: "name, sku, price and quantity are required" });
    }

    const existing = await Product.findOne({ sku: String(sku).trim() });
    if (existing) {
      return res.status(400).json({ message: "Product with this SKU already exists" });
    }

    const product = await Product.create({
      name,
      sku,
      price,
      quantity,
      description,
    });

    const normalizedSpecs = normalizeSpecifications(specifications);
    if (normalizedSpecs.length) {
      await Specification.insertMany(
        normalizedSpecs.map((spec) => ({
          ...spec,
          product: product._id,
        }))
      );
    }

    const specsForResponse = await Specification.find({ product: product._id }).lean();

    const productWithSpecs = {
      ...product.toObject(),
      specifications: specsForResponse.map((spec) => ({
        key: spec.key,
        value: spec.value,
      })),
    };

    return res.status(201).json(productWithSpecs);
  } catch (error) {
    return res.status(500).json({ message: "Failed to create product", error: error.message });
  }
};`,
    notes: "After authentication is in place, we can safely create products. This slide uses the real `createProduct` from ScaleMetrics. Walk through validation, unique SKU check, product creation, specification normalization, and the combined response. Have students now add `createProduct` to `controllers/productController.js`.",
    takeaway: "Implement create logic once auth and models are ready.",
    duration: 3
  },
  {
    id: 59,
    layout: 'code',
    title: "Read Operations",
    subtitle: "controllers/productController.js – getProducts & getProductById",
    code: `// Fetch ALL products with their specifications
export const getProducts = async (_req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 }).lean();
    const productIds = products.map((p) => p._id);

    const specs = await Specification.find({ product: { $in: productIds } }).lean();

    const specsByProduct = specs.reduce((acc, spec) => {
      const key = String(spec.product);
      if (!acc[key]) acc[key] = [];
      acc[key].push({ key: spec.key, value: spec.value });
      return acc;
    }, {});

    const productsWithSpecs = products.map((product) => ({
      ...product,
      specifications: specsByProduct[String(product._id)] || [],
    }));

    return res.status(200).json(productsWithSpecs);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch products", error: error.message });
  }
};

// Fetch ONE product by id with specifications
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).lean();
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const specs = await Specification.find({ product: product._id }).lean();

    const productWithSpecs = {
      ...product,
      specifications: specs.map((spec) => ({
        key: spec.key,
        value: spec.value,
      })),
    };

    return res.status(200).json(productWithSpecs);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch product", error: error.message });
  }
};`,
    notes: "Now that auth and product models are set up, we focus on read endpoints. Explain how `getProducts` assembles a dashboard-friendly payload by joining specs in memory, and how `getProductById` handles the 404 case cleanly. Have students implement these functions in their controller and then test with Postman using a valid JWT.",
    takeaway: "Read endpoints return rich data for the dashboard, protected by JWT.",
    duration: 3
  },
  {
    id: 60,
    layout: 'code',
    title: "Update Operation",
    subtitle: "controllers/productController.js – updateProduct",
    code: `// Update an existing product and optionally replace its specifications.
export const updateProduct = async (req, res) => {
  try {
    const { name, sku, price, quantity, description, specifications } = req.body;

    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (sku && sku !== product.sku) {
      const duplicate = await Product.findOne({ sku: String(sku).trim() });
      if (duplicate) {
        return res.status(400).json({ message: "Another product already uses this SKU" });
      }
    }

    // Patch only provided fields so form partial updates are easy in demos.
    if (name !== undefined) product.name = name;
    if (sku !== undefined) product.sku = sku;
    if (price !== undefined) product.price = price;
    if (quantity !== undefined) product.quantity = quantity;
    if (description !== undefined) product.description = description;

    const updated = await product.save();

    if (specifications !== undefined) {
      // Replace existing specs for this product with the new normalized set
      await Specification.deleteMany({ product: product._id });

      const normalizedSpecs = normalizeSpecifications(specifications);
      if (normalizedSpecs.length) {
        await Specification.insertMany(
          normalizedSpecs.map((spec) => ({
            ...spec,
            product: product._id,
          }))
        );
      }
    }

    const specs = await Specification.find({ product: product._id }).lean();

    const updatedWithSpecs = {
      ...updated.toObject(),
      specifications: specs.map((spec) => ({
        key: spec.key,
        value: spec.value,
      })),
    };

    return res.status(200).json(updatedWithSpecs);
  } catch (error) {
    return res.status(500).json({ message: "Failed to update product", error: error.message });
  }
};`,
    notes: "This slide builds on the previous ones. Because auth is in place, only authorized users can hit this update endpoint. Talk through duplicate SKU protection and partial updates, then have students implement `updateProduct` and try it from Postman with a Bearer token.",
    takeaway: "Updates build on authentication to safely mutate data.",
    duration: 4
  },
  {
    id: 61,
    layout: 'code',
    title: "Delete Operation",
    subtitle: "controllers/productController.js – deleteProduct",
    code: `// Delete a product and all of its specifications.
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await Specification.deleteMany({ product: product._id });

    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Failed to delete product", error: error.message });
  }
};`,
    notes: "End the CRUD sequence with deletion. Emphasize that this endpoint is also protected by `protect` middleware, and that it cleans up related specifications. Students should now implement `deleteProduct` and wire it to DELETE `/api/products/:id`, completing the secured CRUD flow.",
    takeaway: "Deletion completes the authenticated CRUD cycle for products.",
    duration: 3
  },
  {
    id: 62,
    layout: 'section',
    title: "Module 7",
    subtitle: "Live Project: ScaleMetrics Backend",
    sectionTitle: "From Theory to Production API",
    notes: "Up to now, everything has been concepts and isolated snippets: Node internals, Express patterns, MongoDB, and JWT security. Now we put it all together into a single, coherent backend called ScaleMetrics — the API that powers a product analytics dashboard. Tell students that from this point onwards, every slide maps directly to files and folders in the real project they will code along with you.",
    takeaway: "We now build a real backend end-to-end.",
    duration: 0
  },
  {
    id: 63,
    layout: 'content',
    title: "ScaleMetrics Backend Overview",
    content: [
      "Goal: Build a production-style API for a product analytics dashboard.",
      "Core features:",
      "1. User registration & login with hashed passwords (bcrypt + JWT).",
      "2. Protected CRUD APIs for Products.",
      "3. Separate Specifications collection for flexible key/value analytics data.",
      "4. Clean project structure: controllers, models, routes, middleware, config."
    ],
    notes: "Set the story: ScaleMetrics is a fictional analytics dashboard that needs a clean backend. We are not building a toy 'todo' API; we are building something that looks and feels like a real product service. Emphasize how each feature maps to real-world requirements: authentication, authorization, CRUD on business entities (Products), and analytics-friendly extra metadata (Specifications).",
    takeaway: "Students see a realistic backend they will implement file-by-file.",
    duration: 3
  },
  {
    id: 64,
    layout: 'code',
    title: "Step 1: Project Setup & Dependencies",
    subtitle: "package.json & core libraries",
    code: `// 1) Initialize the project
//    npm init -y

// 2) Install runtime dependencies
//    npm install express mongoose dotenv cors bcryptjs jsonwebtoken multer csv-parser

// 3) Install dev dependency for auto-restart
//    npm install -D nodemon

// 4) Example package.json (simplified)
{
  "name": "scalemetrics-backend",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "dev": "nodemon server.js",
    "start": "node server.js"
  }
}`,
    notes: "Walk through the why behind each dependency instead of just listing commands. `express` for HTTP server, `mongoose` for MongoDB, `dotenv` for env variables, `cors` for frontend integration, `bcryptjs` and `jsonwebtoken` for auth, `multer` and `csv-parser` for future file/data ingestion. Show the final `package.json` so students see how scripts and ES modules (`type: \"module\"`) are wired. Ask them to run `npm run dev` at the end of this step.",
    takeaway: "Students can bootstrap a modern Node + Mongo backend project from scratch.",
    duration: 5
  },
  {
    id: 65,
    layout: 'code',
    title: "Step 2: server.js – Wiring Express",
    subtitle: "Health check, middleware, routes",
    code: `import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// 1) Connect to MongoDB once at startup
connectDB();

// 2) Global middleware
app.use(cors());
app.use(express.json({ limit: "10mb" }));

// 3) Simple health check endpoint
app.get("/api/health", (_req, res) => {
  res.status(200).json({ message: "ScaleMetrics backend is running" });
});

// 4) Mount feature routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

// 5) Fallback error handler
app.use((error, _req, res, _next) => {
  res.status(500).json({ message: error.message || "Unexpected server error" });
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});`,
    notes: "Map every line to concepts students already know: Express app creation, middleware chain, route mounting, and centralized error handling. Highlight the health check route as a quick way to verify the server + DB connection without needing Postman. Emphasize the idea that `server.js` should stay thin: it wires pieces together and delegates real logic to controllers, models, and middleware.",
    takeaway: "Students see how a real Express entry file glues the entire backend together.",
    duration: 7
  },
  {
    id: 66,
    layout: 'code',
    title: "Step 3: MongoDB Connection & .env",
    subtitle: "config/db.js + environment variables",
    code: `// config/db.js
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Fail fast in demos
  }
};

// .env (example)
// PORT=5001
// MONGO_URI=your_atlas_connection_string
// JWT_SECRET=super_secret_key
// JWT_EXPIRES_IN=1d`,
    notes: "Reinforce the rule: never hardcode connection strings or secrets. Show how `connectDB` encapsulates connection logic and how `.env` keeps sensitive values out of source control. Explain why `process.exit(1)` is helpful in workshop/demo environments: if the DB is misconfigured, the app fails loudly instead of pretending to work.",
    takeaway: "Students can safely connect Node to MongoDB Atlas using environment variables.",
    duration: 5
  },
  {
    id: 67,
    layout: 'code',
    title: "Step 4: User Model & Auth Controllers",
    subtitle: "User.js + authController.js",
    code: `// models/User.js
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true, minlength: 6 },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// controllers/authController.js (high level)
// - registerUser: validate, check existing, create user, return JWT
// - loginUser: validate, find user, comparePassword, return JWT`,
    notes: "Tie this directly back to your earlier security slides. Show how the pre-save hook guarantees that plain text passwords never touch the database, and how `comparePassword` keeps login logic clean. Walk through the happy path in `registerUser` and `loginUser`, emphasizing proper status codes (400 for bad input, 401 for invalid credentials, 201/200 for success).",
    takeaway: "Students can model users, hash passwords, and implement clean register/login flows.",
    duration: 7
  },
  {
    id: 68,
    layout: 'code',
    title: "Step 5: Auth Routes & Protect Middleware",
    subtitle: "authRoutes.js + authMiddleware.js",
    code: `// routes/authRoutes.js
import express from "express";
import { loginUser, registerUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;

// middleware/authMiddleware.js
import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Not authorized, token missing" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Not authorized, invalid token" });
  }
};`,
    notes: "Connect the dots between routes, controllers, and middleware. Explain that `/api/auth/register` and `/api/auth/login` are public, but everything under `/api/products` will be wrapped in the `protect` middleware. Reinforce the Authorization header format (`Bearer <token>`) and show how, once verified, `req.user` carries the decoded payload forward to downstream handlers.",
    takeaway: "Students can wire public auth endpoints and a reusable JWT guard for private routes.",
    duration: 6
  },
  {
    id: 69,
    layout: 'code',
    title: "Step 6: Product & Specification Models",
    subtitle: "Product.js + Specification.js",
    code: `// models/Product.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, index: true },
    sku: { type: String, required: true, trim: true, unique: true, index: true },
    price: { type: Number, required: true, min: 0 },
    quantity: { type: Number, required: true, min: 0, default: 0 },
    description: { type: String, trim: true, default: "" },
  },
  { timestamps: true }
);

// models/Specification.js
const specificationSchema = new mongoose.Schema(
  {
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true, index: true },
    key: { type: String, required: true, trim: true },
    value: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);`,
    notes: "Explain the modeling decision: keep the core Product small and fast to query, and push flexible analytics-style key/value pairs into a separate Specification collection. Show how the `product` field in Specification creates a reference, mirroring the \"Relationships (References)\" slide from earlier. This structure is friendly for dashboards that need to add new attributes without schema migrations.",
    takeaway: "Students learn how to model core entities plus flexible analytics metadata in MongoDB.",
    duration: 5
  },
  {
    id: 70,
    layout: 'code',
    title: "Step 7: Product Controllers & Routes",
    subtitle: "CRUD with Specifications",
    code: `// controllers/productController.js (high level)
// - createProduct: validate input, enforce unique SKU, create Product,
//                  normalize specifications and insert into Specification collection.
// - getProducts: fetch all products, fetch all specs once, group and attach.
// - getProductById: fetch single product + its specs.
// - updateProduct: patch fields, guard against duplicate SKU, replace specs if provided.
// - deleteProduct: delete product and its specs.

// routes/productRoutes.js
import express from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/productController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// All product routes require a valid JWT
router.use(protect);

router.route("/").get(getProducts).post(createProduct);
router.route("/:id").get(getProductById).put(updateProduct).delete(deleteProduct);

export default router;`,
    notes: "Walk the students through the full data flow for a single operation, for example Create: Request hits `/api/products` → `protect` verifies token → `createProduct` validates input, checks for duplicate SKU, saves the product, inserts normalized specs, and finally returns a shape the frontend can render directly. Emphasize how the controllers stay focused on business logic while the routes only define HTTP verbs and URLs.",
    takeaway: "Students understand a complete authenticated CRUD pipeline for a real domain object.",
    duration: 7
  },
  {
    id: 71,
    layout: 'content',
    title: "Hands-On Checklist: ScaleMetrics Backend",
    content: [
      "1. Initialize project, install dependencies, and configure scripts.",
      "2. Create server.js with health check, middleware, and route mounting.",
      "3. Implement config/db.js and wire up .env with PORT, MONGO_URI, JWT_SECRET.",
      "4. Build User model, auth controllers (register/login), and auth routes.",
      "5. Add protect middleware and secure all /api/products routes.",
      "6. Implement Product and Specification models to model analytics-friendly data.",
      "7. Implement product controllers + routes for full CRUD.",
      "8. Test end-to-end with Postman: register, login, call protected product APIs."
    ],
    notes: "Use this slide as your live coding roadmap. After explaining each concept, pause and let students implement that step in their own project folders, mirroring the existing demo backend. Encourage them to keep their file/folder names identical so they can compare against the reference solution later. Remind them that by the end of this checklist, they will have a complete, production-style backend project running locally.",
    takeaway: "Students have a clear step-by-step plan to recreate the entire backend on their own.",
    duration: 6
  },
  {
    id: 72,
    layout: 'title',
    title: "Thank You",
    subtitle: "Full Stack Workshop Complete",
    notes: "We have covered the fundamentals of Node, Express, MongoDB, and API Security, and assembled them into a realistic backend project (ScaleMetrics). You now have the engine running plus a complete reference implementation you can extend. The next step in your journey is to build or refine the frontend to consume these APIs. Thank you for your time.",
    takeaway: "You are a Full Stack Developer.",
    duration: 1,
    visualDesc: "Q&A Session"
  },
];