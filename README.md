<<<<<<< HEAD
🚀 Features
📝 1. Full CRUD Posting System

Create, edit, update, and delete posts

Rich-text editor powered by TinyMCE

Supports tech articles, opinions, notes & tutorials

🔐 2. Full Authentication System

Secure signup & login

Appwrite-based auth

Email/password login

Session handling + persistent user state

🔒 3. Protected Routes & Role-Based Access

Only authenticated users can create/edit/delete posts

Protected pages for dashboard, editor, etc.

Role logic for authorisation

Prevents unauthorized access with Appwrite’s session checks

💬 4. Comment Discussions

In-post comments section

Reply, discuss, debate & ask questions

Real-time updates

🏷️ 5. Tag-Based Filtering

Filter posts by categories such as:

Web Development

AI & Data

Career & Job Search

Roadmaps

Programming Basics

And more

Dynamically updates feed based on selected tags

📤 6. Shareable Post Links

Share your blog posts anywhere

Useful for LinkedIn, Discord, Reddit, etc.

📱 7. Fully Responsive UI

Modern, clean layout

Optimized for all screen sizes

Designed with MUI components

🧩 Tech Stack
Category	Tools / Libraries
Frontend Framework	React.js (Vite)
UI Library	Material UI (MUI)
State Management	Redux Toolkit
Routing	React Router v6
Authentication	Appwrite Auth
Database	Appwrite Database
Forms	React Hook Form
Rich Text Editor	TinyMCE Editor
API	Appwrite SDK
Build Tool	Vite
=======
<h1 align="center">🐦 TechNest — A Developer Community Platform</h1>

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
  <li>Supports articles, tech notes, roadmaps, tutorials</li>
</ul>

<h3>🔐 Authentication System</h3>
<ul>
  <li>Secure signup & login using Appwrite Auth</li>
  <li>Session handling & persistent user state</li>
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
  <li>Browse posts by categories like:</li>
  <ul>
    <li>Web Development</li>
    <li>AI & Data</li>
    <li>Career & Jobs</li>
    <li>Roadmaps</li>
  </ul>
</ul>

<h3>📤 Shareable Post Links</h3>
<ul>
  <li>Users can share article links anywhere</li>
</ul>

<h3>📱 Fully Responsive UI</h3>
<ul>
  <li>Clean, modern, fully responsive layout</li>
  <li>Built with Material UI</li>
</ul>

<hr>

<h2>🧩 Tech Stack Used</h2>

<table>
  <tr>
    <td><strong>Frontend Framework</strong></td>
    <td>React.js (Vite)</td>
  </tr>
  <tr>
    <td><strong>UI Library</strong></td>
    <td>Material UI (MUI)</td>
  </tr>
  <tr>
    <td><strong>State Management</strong></td>
    <td>Redux Toolkit</td>
  </tr>
  <tr>
    <td><strong>Routing</strong></td>
    <td>React Router v6</td>
  </tr>
  <tr>
    <td><strong>Authentication</strong></td>
    <td>Appwrite Auth</td>
  </tr>
  <tr>
    <td><strong>Database</strong></td>
    <td>Appwrite Database</td>
  </tr>
  <tr>
    <td><strong>Forms</strong></td>
    <td>React Hook Form</td>
  </tr>
  <tr>
    <td><strong>Rich Text Editor</strong></td>
    <td>TinyMCE Editor</td>
  </tr>
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

<p>Add your screenshots to the <code>./screenshots/</code> folder and update the image paths below:</p>

<p>
  <img src="./screenshots/homepage.png" width="600" alt="Homepage">
</p>

<p>
  <img src="./screenshots/editor.png" width="600" alt="Editor">
</p>

<p>
  <img src="./screenshots/post-page.png" width="600" alt="Post Page">
</p>

<p>
  <img src="./screenshots/auth.png" width="600" alt="Authentication">
</p>

<hr>

<h2>⚙️ Setup Instructions</h2>

<h3>1️⃣ Clone the repository</h3>
<pre>
git clone https://github.com/YourUsername/TechNest.git
</pre>

<h3>2️⃣ Install dependencies</h3>
<pre>
npm install
</pre>

<h3>3️⃣ Set up environment variables</h3>
<p>Create a <code>.env</code> file in the root:</p>

<pre>
VITE_APPWRITE_PROJECT_ID=xxxx
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_DATABASE_ID=xxxx
VITE_APPWRITE_POSTS_COLLECTION_ID=xxxx
VITE_APPWRITE_COMMENTS_COLLECTION_ID=xxxx
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
>>>>>>> e9066c5 (updated readme file)
