
<div align="center">
  <br />
  <a href="https://trackwise-app-nine.vercel.app" target="_blank">
    <img src="https://i.postimg.cc/tC0zSBC4/image.png" alt="TrackWise Banner" />
  </a>

  <br />

  <!-- Tech-stack badges -->
  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000"  alt="Next.js" />
    <img src="https://img.shields.io/badge/-Clerk-black?style=for-the-badge&logoColor=white&logo=clerk&color=0E0E2C"        alt="Clerk"  />
    <img src="https://img.shields.io/badge/-Neon_DB-black?style=for-the-badge&logoColor=white&logo=postgresql&color=38BDF8" alt="Neon"   />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="Tailwind CSS" />
  </div>

  <h3 align="center">TrackWise</h3>

  <div align="center">
    A modern task-/habit-tracking app with Clerk auth&nbsp;and&nbsp;Neon&nbsp;PostgreSQL.<br/>
    Built and maintained by <a href="https://github.com/devdeepkonsam" target="_blank"><b>Devdeep&nbsp;Singha</b></a>. Inspired by&nbsp;<a href="https://github.com/mendsalbert" target="_blank"><b>mendsalbert</b></a>.
  </div>
</div>

## 📋 <a name="table">Table of Contents</a>
1. 🤖 [Introduction](#introduction)  
2. ⚙️ [Tech&nbsp;Stack](#tech-stack)  
3. 🔋 [Features](#features)  
4. 🤸 [Quick&nbsp;Start](#quick-start)  
5. 🕸️ [Assets&nbsp;&amp;&nbsp;Code](#assets--code)  
6. 🚀 [More](#more)  

---

## 🚨 Tutorial
A step-by-step video walkthrough is in the works. Stay tuned on my channel—subscribe and click the bell so you don’t miss it!  
➡️ **Coming soon** on YouTube.

---

## <a name="introduction">🤖 Introduction</a>
**TrackWise** lets you capture tasks, habits, or goals and see them all in a clean, responsive dashboard. Authentication is handled by **Clerk**, data is stored in a serverless **Neon PostgreSQL** instance, and the UI is styled with **Tailwind CSS** & **shadcn/ui** components. Optional Google Gemini hooks give you AI-powered insights on your progress.

---

## <a name="tech-stack">⚙️ Tech Stack</a>
- **Next.js 14** (App Router, RSC)  
- **Clerk** – auth & user management  
- **Neon PostgreSQL** – serverless DB (connection pooling via serverless driver)  
- **Tailwind CSS** + **shadcn/ui** – styling & primitives  
- **Google Gemini API** – *optional* AI features  
- **Vercel** – build & deployment  

---

## <a name="features">🔋 Features</a>
👉 **Secure sign-in / sign-up** (social or email) with Clerk  
👉 **Protected dashboard** showing tasks/habits by day/week/month  
👉 **Serverless DB**: instant branching, free tier friendly  
👉 **Responsive design** – works great on mobile & desktop  
👉 **Gemini AI add-ons** (summary & motivation prompts)  
👉 **Zero-config deploy** to Vercel  

---

## <a name="quick-start">🤸 Quick Start</a>

### 🖥️ Prerequisites
- [Git](https://git-scm.com/)  
- [Node.js ≥ 18](https://nodejs.org/) (includes **npm**)  

### 📥 Clone the repo
```bash
git clone https://github.com/devdeepkonsam/trackwise-app.git
cd trackwise-app
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

NEXT_PUBLIC_GEMINI_API_KEY=your_google_gemini_key   # optional
NEXT_PUBLIC_DATABASE_URL=your_neon_postgres_connection_url
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.



## 🕸️ Assets & Code

The repository includes all the assets and code you need to get started with **TrackWise**. This includes the full source code, database schemas (via Prisma), and all public assets. Feel free to fork, star, or open issues.

## 🚀 More

- 🌐 **Live app:** [https://trackwise-app-nine.vercel.app/](https://trackwise-app-nine.vercel.app/)  
- 🧑‍💻 **Author:** Devdeep Singha  
- 📜 **License:** MIT  

Got ideas or bugs? Open an issue or start a discussion—PRs welcome!  
Happy tracking. 📈

