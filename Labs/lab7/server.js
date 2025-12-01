const express = require('express');
const connectDB = require('./database');
const coursesRouter = require('./routes/courses');

const app = express();
app.use(express.json());

app.use('/courses', coursesRouter);

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('Failed to start server due to DB error', err);
    process.exit(1);
  });
