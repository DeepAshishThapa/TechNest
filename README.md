<h1 align="center">🐦 TechNest — A Developer Community Platform</h1>

<p align="center">
  <a href="https://tech-nest-btly.vercel.app/" target="_blank" style="font-size:20px; font-weight:bold;">
    🔗 Live Demo — TechNest
  </a>

</p>

<p align="center">

  TechNest is a modern web platform where developers, tech enthusiasts, and CS students can share insights, articles, ideas, and real-world learning experiences.

  <br>

  <strong>Built entirely from scratch using React, Appwrite, MUI, and Redux Toolkit.</strong>

</p>

<hr>

<h2>🚀 Features</h2>

<h3>📝 Full CRUD Posting System</h3>

<ul>

  <li>Create, edit, update, and delete posts</li>

  <li>Rich text editor powered by TinyMCE</li>

  <li>Supports articles, tech notes, roadmaps, and tutorials</li>

</ul>

<h3>🔐 Authentication System</h3>

<ul>

  <li>Secure signup and login using Appwrite Auth</li>

  <li>Session handling and persistent user state</li>

</ul>

<h3>🔒 Protected Routes & Role-Based Access</h3>

<ul>

  <li>Unauthorized users cannot access editor/dashboard</li>

  <li>Session validation using Appwrite tokens</li>

  <li>Role logic for authorisation</li>

</ul>

<h3>💬 Comment Discussions</h3>

<ul>

  <li>Each post has a dedicated discussion area</li>

  <li>Users can ask questions, give feedback, and debate topics</li>

</ul>

<h3>🏷️ Tag-Based Filtering</h3>

<ul>

  <li>Browse posts by categories such as Web Development, AI & Data, Career & Jobs, and Roadmaps</li>

</ul>

<h3>📤 Shareable Post Links</h3>

<ul>

  <li>Users can share article links anywhere, such as LinkedIn, Discord, etc.</li>

</ul>

<h3>📱 Fully Responsive UI</h3>

<ul>

  <li>Clean, modern, fully responsive layout</li>

  <li>Built with Material UI</li>

</ul>

<hr>

<h2>🔧 Engineering Decisions & Learnings</h2>

<ul>

  <li>Designed centralized state management using Redux Toolkit to avoid prop drilling and ensure predictable updates across authentication, posts, and comments.</li>

  <li>Implemented protected routing with session validation to handle edge cases such as expired sessions, unauthenticated page refreshes, and unauthorized access.</li>

  <li>Structured asynchronous data flows to manage loading, error, and empty states cleanly without blocking the UI.</li>

  <li>Chose Appwrite as a Backend-as-a-Service to focus on frontend architecture while still addressing real-world concerns like authentication, permissions, and data security.</li>

  <li>Focused on component reuse and separation of concerns to keep the codebase maintainable as features and complexity increased.</li>

</ul>

<hr>

<h2>🧩 Tech Stack Used</h2>

<table>

  <tr><td><strong>Frontend Framework</strong></td><td>React.js (Vite)</td></tr>

  <tr><td><strong>UI Library</strong></td><td>Material UI (MUI)</td></tr>

  <tr><td><strong>State Management</strong></td><td>Redux Toolkit</td></tr>

  <tr><td><strong>Routing</strong></td><td>React Router v6</td></tr>

  <tr><td><strong>Authentication</strong></td><td>Appwrite Auth</td></tr>

  <tr><td><strong>Database</strong></td><td>Appwrite Database</td></tr>

  <tr><td><strong>Forms</strong></td><td>React Hook Form</td></tr>

  <tr><td><strong>Rich Text Editor</strong></td><td>TinyMCE Editor</td></tr>

</table>

<hr>

<h2>📂 Folder Structure</h2>

<pre>

technest/

│── public/

│── src/

│   ├── app/

│   │   └── store.js

│   ├── auth/

│   │   ├── Login.jsx

│   │   ├── Signup.jsx

│   ├── components/

│   │   ├── Navbar.jsx

│   │   ├── Footer.jsx

│   ├── pages/

│   │   ├── Home.jsx

│   │   ├── AllPosts.jsx

│   │   ├── PostDetails.jsx

│   │   ├── CreatePost.jsx

│   │   ├── EditPost.jsx

│   ├── features/

│   ├── utils/

│   ├── hooks/

│   └── main.jsx

</pre>

<hr>

<h2>📸 Screenshots</h2>

<p>

  <img src="./screenshot/first.png" width="600" alt="TechNest Screenshot 1">

</p>

<p>

  <img src="./screenshot/second.png" width="600" alt="TechNest Screenshot 2">

</p>

<p>

  <img src="./screenshot/third.png" width="600" alt="TechNest Screenshot 3">

</p>

<p>

  <img src="./screenshot/fort.png" width="600" alt="TechNest Screenshot 4">

</p>

<p>

  <img src="./screenshot/fifth.png" width="600" alt="TechNest Screenshot 5">

</p>

<p>

  <img src="./screenshot/sixth.png" width="600" alt="TechNest Screenshot 6">

</p>

<hr>

<h2>⚙️ Setup Instructions</h2>

<h3>1️⃣ Clone the repository</h3>

<pre>

git clone https://github.com/DeepAshishThapa/TechNest.git

</pre>

<pre>

cd TechNest

</pre>

<h3>2️⃣ Install dependencies</h3>

<pre>

npm install

</pre>

<h3>3️⃣ Set up environment variables</h3>

<p>Create a <code>.env</code> file in the root:</p>

<pre>

VITE_APPWRITE_PROJECT_ID=xxxx

VITE_APPWRITE_ENDPOINT=https://syd.cloud.appwrite.io/v1

VITE_APPWRITE_DATABASE_ID=xxxx

VITE_APPWRITE_POSTS_COLLECTION_ID=xxxx

VITE_APPWRITE_COMMENTS_COLLECTION_ID=xxxx

VITE_APPWRITE_BUCKET_ID=xxxx

</pre>

<h3>4️⃣ Start development server</h3>

<pre>

npm run dev

</pre>

<hr>

<h2>📜 License</h2>

<p>This project is open source and available under the MIT License.</p>

<hr>

<h2>✨ Author</h2>

<p><strong>Deep Ashish</strong> — Developer & Creator of TechNest</p>

<p>GitHub: <a href="https://github.com/DeepAshishThapa">DeepAshishThapa</a></p>
