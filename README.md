# moodApp-noSQL
To run the app locally:

1. Clone the repo
2. Create a database in MongoDB port: 27017
3. Add a .env file to the root of the project with the line
`DATABASE=mongodb://localhost:27017/your-database-name`
4. Run `mongod` on the terminal
5. In a separate terminal window type `npm run watch`
6. App should be visible in localhost:3000