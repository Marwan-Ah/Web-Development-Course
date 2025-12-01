Labs/lab7 - Courses backend

Quick start

1. Install dependencies:

```powershell
cd Labs\lab7
npm install
```

2. Start a local MongoDB server or set `MONGODB_URI` env var. By default the app connects to `mongodb://127.0.0.1:27017/coursesdb`.

3. Run the server:

```powershell
npm run dev   # requires nodemon (dev)
# or
npm start
```

API endpoints (mounted at `/courses`):

- `GET /courses` - list all courses
- `GET /courses/:id` - get a course
- `POST /courses` - create a course (JSON body with fields below)
- `PUT /courses/:id` - update a course
- `DELETE /courses/:id` - delete a course

Course fields (schema includes only these):

- `title` (String)
- `description` (String)
- `instructor` (String)
- `price` (Number)
- `category` (String)
- `enrolledStudents` (Number)
