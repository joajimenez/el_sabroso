# EL SABROSO Restaurant Project - Completed

Hey there! Welcome to my "EL SABROSO" Restaurant Project. I'm excited to share with you how I successfully completed this project, where I used JavaScript to create a dynamic restaurant homepage. This project is based on The Odin Project's JavaScript Course, and I'm proud of the result. So, let's dive into the details of how I tackled it!

**Live Site:** [EL SABROSO Restaurant](https://elsabroso.netlify.app/#)

## Table of Contents
- [Project Description](#project-description)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)

---

## Project Description

The "EL SABROSO" Restaurant Project challenged me to apply my DOM manipulation skills using JavaScript to build a restaurant homepage. The key objective was to dynamically generate the entire website's content while incorporating tabbed browsing for the Contact and Menu pages. I also took care of the website's styling, which I placed in a separate CSS file.

### Assignment

Here's how I successfully completed this project:

1. I kicked off the project by initializing it with npm and installed webpack to manage my project's dependencies.

2. I carefully structured my project by creating 'src' and 'dist' directories.

3. Within the 'dist' directory, I set up a basic HTML skeleton in the 'index.html' file.

4. To ensure everything was set up correctly, I wrote a simple console.log statement in 'src/index.js'.

5. For the restaurant's homepage, I initially hard-coded elements like images, headlines, and copy into the HTML to visualize the layout.

6. Next, I removed those hardcoded elements from the HTML file and dynamically generated them using JavaScript. I organized this code into separate modules to keep things clean and manageable.

7. To achieve tabbed browsing, I created individual modules for the Contact and Menu pages. Each module exported a function that created a div element, added content and styles, and then appended it to the DOM.

8. The final step was to implement the tab-switching logic in 'index.js'. I added event listeners for each tab that cleared the current contents and called the appropriate 'tab module' to populate it again.

---

## Getting Started

If you're looking to dive into a similar project, here's how you can get started:

1. Clone the repository to your local machine.

```bash
git clone https://github.com/your-username/el-sabroso-restaurant.git
cd el-sabroso-restaurant
```

2. Initialize the project and install webpack:

```bash
npm init
npm install webpack webpack-cli --save-dev
```

3. Follow the project structure I created, as mentioned in the assignment.

4. Start coding by writing your JavaScript in 'src/index.js' and creating modules for different sections of your website.

---

## Project Structure

Here's how I structured my project:

```
el-sabroso-restaurant/
│
├── dist/
│   ├── index.html
│   └── main.js
│
├── src/
│   ├── index.js
│   ├── homepage.js
│   ├── contact.js
│   ├── menu.js
│   └── ...
│
├── webpack.config.js
│
├── .gitignore
├── package.json
├── README.md
└── ...
```

- `dist/`: This folder contains the final built website with an HTML file and a bundled JavaScript file.

- `src/`: Inside this directory, I organized my JavaScript source files into different modules.

- `webpack.config.js`: This is the webpack configuration file to bundle the project.

- `.gitignore`: I used this file to specify which files and directories should be ignored by Git.

- `package.json`: It contains project metadata and npm scripts.

---

I hope my experience completing the "EL SABROSO" Restaurant Project helps you in your own journey. Happy coding!
