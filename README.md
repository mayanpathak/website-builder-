# 🌐 Website Builder (Wilder)

**Website Builder (Wilder)** is a prompt-driven web development tool that empowers users to generate fully functional static websites using natural language instructions. Leveraging cutting-edge technologies like WebContainers, TypeScript, and Node.js, Wilder delivers a seamless experience from idea to ZIP download — all within the browser.

🚀 [Live Demo](https://website-builder-puce-sigma.vercel.app/)  
📦 [Download Source Code](https://github.com/mayanpathak/website-builder)

---

## ✨ Features

- 🔮 **Prompt-to-Website Generation**: Users type what they want, and Wilder instantly turns it into code.
- 🧠 **AI-Enhanced Generation Logic**: Smart backend generates clean HTML/CSS/JS based on input intent.
- ⚡ **Runs In-Browser** with [WebContainers](https://webcontainers.io/): No server setup needed.
- 📦 **One-Click Download**: Generated websites can be downloaded as a ZIP archive.
- 🛠️ **TypeScript-Powered Codebase**: Ensures type safety and developer scalability.
- 🌈 **Responsive UI** built with modern React.js and Tailwind CSS.
- 🔁 **Stateless & Lightweight**: No login or database — just generate and go!

---

## 🏗️ Tech Stack

| Tech                | Purpose                                 |
|---------------------|------------------------------------------|
| **React.js**         | UI Framework                             |
| **Node.js**          | Backend logic for code generation        |
| **Express.js**       | Minimal REST API for code packaging      |
| **WebContainers**    | Run npm & compile projects entirely in-browser |
| **TypeScript**       | Type-safe frontend and backend logic     |
| **JSZip**            | Bundles the generated code as ZIP        |
| **Tailwind CSS**     | Clean, modern styling system             |
| **Vite**             | Frontend tooling & fast build process    |

---

## 🖼️ Demo

![Wilder Screenshot](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800)

> Users simply enter prompts like “Create a personal portfolio with a dark theme and contact form” and get a fully working project!

---

## 📂 Project Structure

website-builder/
├── backend/
│ └── src/
│ ├── routes/
│ └── services/
│ └── zipGenerator.ts
│ └── index.ts
├── frontend/
│ └── src/
│ ├── components/
│ ├── pages/
│ └── utils/
│ └── App.tsx
│ └── main.tsx
├── public/
├── .env
├── package.json
└── README.md

yaml
Copy
Edit

---

## 📥 How It Works

1. **User enters a prompt** describing the website they want.
2. The frontend sends the request to the backend.
3. The backend processes the prompt, generates HTML/CSS/JS code, and bundles it into a ZIP.
4. The user is offered the generated website and a download option.

---

## 🧪 Example Prompts

- “Landing page for a startup with testimonials and pricing table.”
- “Simple portfolio with sections for projects, contact, and about me.”
- “One-page blog with sidebar and dark mode toggle.”

---

## 🚀 Getting Started Locally

### 1. Clone the Repository
```bash
git clone https://github.com/mayanpathak/website-builder.git
cd website-builder
2. Install Dependencies
bash
Copy
Edit
npm install
3. Run Frontend and Backend
You can run both with:

bash
Copy
Edit
npm run dev
Or separately:

bash
Copy
Edit
cd frontend && npm run dev
cd backend && npm run start
🛡️ Security & Limitations
Stateless design, no user data stored.

Only static website generation supported (no backend frameworks like Django).

Ideal for landing pages, portfolios, and basic HTML/CSS sites.

🎯 Use Cases
Developers generating quick frontend boilerplate.

Non-tech users creating simple websites.

Startup MVP builders validating ideas fast.

Education tools for teaching frontend structure.

🧠 Future Enhancements
 AI prompt refinement with GPT or Gemini

 Template selection options (e.g., Blog, Portfolio, Agency)

 Save user sessions via local storage or cloud DB

 Live preview inside iframe or Monaco editor

 GitHub deploy/export option

🧑‍💻 Author
Mayan Pathak
🚀 Full Stack Developer | AI Builder | Web Innovator
📬 LinkedIn
📁 Portfolio

📝 License
This project is licensed under the MIT License.

💬 Feedback
Have suggestions or ideas to improve this tool?
Open an issue or reach out via GitHub Discussions.

🌍 Build websites. Instantly. With just a prompt.