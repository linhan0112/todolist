# ToDo List Web Application
A simple ToDo List web application built with HTML, CSS, and JavaScript. This project allows users to add, edit, and delete tasks in a straightforward and intuitive interface.

## Directory Structure
   index.html - Main HTML file  
   styles.css - Styling file  
   script.js - JavaScript functionality

## Getting Started

### Prerequisites
- Node.js
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/linhan0112/todolist.git
   
### local server
1. intall local server
   ```bash
   .npm install -g http-server
2. open terminal, cd to repository
   ```bash 
   cd path
3. active local server
   ```bash
   http-server
4. brows application
   http://localhost:8080

## Deploy on github
from scratch  
### To GitHub
1. In Github repository - 'New' to create a new repository
2. to 'Settings' - 'General' - scroll down - 'Danger Zone' - set repository to 'public'

### To VScode and terminal:
1. open VScode terminal
2. cd to project repository
3. initial GitHub repository
   ```bash
   git init
4. add all files in the repository in local Git repository cache space
   ```bash
   git add .
5. authorization username and email
   ```bash
   git config user.name "XXXXX"
   git config user.email "XXXX@XXXXX"
6. commit files to local Git repository
   ```bash
   git commit -m "Initial commit"
7. connect local Git and GitHub repository
   ```bash
   git remote add origin https://github.com/linhan0112/todolist.git
8. push local change to GitHub repository
   ```bash
   git branch -M main
   git push -u origin main
9. check status
   ```bash
   git status
   git branch

### To GitHub
1. In Github repository - 'Settings' - 'Pages' 
2. 'Build and deployment' - 'Branch' - ensure the branch is 'main' and default folder is '(root)'
3. Wait for a few minutes, automatically generate a url:  
Your site is live at https://linhan0112.github.io/todolist/

### Update any files and push to GitHub
1. chech anything un-commit
   ```bash
   git status
   ```
   will indicate files modified and un-commited
2. add files to Git cache
   ```bash
   git add fileone filetwo
3. or add all files
   ```bash
   git add .
4. commit changes
   ```bash
   git commit -m "Add fileone and update filetwo"
5. push to GitHub branch 'main'
   ```bash
   git push origin main
6. check result:  
to GitHub repository and check

   






