 DigitalAuth

## Overview
DigitalAuth is a secure authentication platform integrated with a rich text editor powered by **Editor.js**. It allows users to authenticate seamlessly while creating and managing dynamic content. The platform prioritizes both security and usability, making it an ideal solution for collaborative and content-driven applications.

---

## Features

### 1. **Authentication System**
- Email and password-based authentication.
- Social login integration (Google, GitHub) via OAuth.
- Secure session management with JWT.

### 2. **Rich Text Editor**
- Integrated **Editor.js**, a block-based editor for dynamic content creation.
- Supports headings, paragraphs, lists, images, and custom tools.
- Saves editor content as JSON for flexibility and reusability.

### 3. **Role-Based Access Control (RBAC)**
- Role-specific access permissions for content creation and management.
- Middleware to validate roles and protect resources.

### 4. **Responsive UI**
- Built with **Next.js** and **Tailwind CSS** for a smooth, mobile-friendly experience.

### 5. **Security Best Practices**
- Passwords hashed with bcrypt.
- Protection against XSS and CSRF vulnerabilities.
- Secure cookies and HTTPS for secure communication.

---

## Technologies Used

### **Frontend**
- Next.js
- React
- Tailwind CSS

### **Backend**
- Next.js API routes
- Node.js

### **Database**
- MongoDB

### **Authentication**
- NextAuth.js (JWT and OAuth)

### **Text Editor**
- Editor.js

---

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Saurabhn16/DigitalAuth.git
   ```
2. Navigate to the project directory:
   ```bash
   cd DigitalAuth
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env.local` file in the root directory and add the following environment variables:
   ```env
   NEXTAUTH_URL=<your_deployment_url>
   MONGODB_URI=<your_mongodb_connection_string>
   NEXTAUTH_SECRET=<random_secret_key>
   GOOGLE_CLIENT_ID=<your_google_client_id>
   GOOGLE_CLIENT_SECRET=<your_google_client_secret>
   GITHUB_CLIENT_ID=<your_github_client_id>
   GITHUB_CLIENT_SECRET=<your_github_client_secret>
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open the app in your browser at `http://localhost:3000`.

---

## Usage

1. **Authentication**:
   - Sign up with email or use Google/GitHub to log in.
   - Manage user sessions via secure JWT tokens.

2. **Text Editor**:
   - Use the Editor.js interface to create dynamic content.
   - Save and retrieve content as JSON objects.

3. **Access Control**:
   - Admins can manage all content.
   - Editors can create and edit assigned content.

---

## Folder Structure
```
DigitalAuth/
├── components/      # Reusable UI components
├── pages/           # Next.js pages (routes)
│   ├── api/         # API routes for backend logic
├── styles/          # Global and component-specific styles
├── utils/           # Utility functions
├── public/          # Static assets (images, icons, etc.)
├── .env.local       # Environment variables (not included in repo)
└── README.md        # Project documentation
```

---

## Future Enhancements
- Add collaborative editing capabilities.
- Implement custom Editor.js plugins for advanced content blocks.
- Enable content export in different formats (PDF, Word).

---

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License
This project is licensed under the MIT License.  

---


