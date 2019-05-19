# moodApp-noSQL
To run the app locally:

1. Clone the repo
2. The app uses MongoDB standard port: 27017
3. Add a .env file to the root of the project with the line
`DATABASE=mongodb://localhost:27017/your-database-name`
4. Run `mongod` on the terminal
5. Run `npm install -g nodemon` or if you do not want to use nodemon you can use `node start.js`
6. If using nodemon, in a separate terminal window type `npm run watch`
7. App should be visible in localhost:3000