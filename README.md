# Blog API

Using nodejs with express and bookshelft to create a API REST

## Endpoints

Next we need to define our API end points - we need to be able to perform basic CRUD operations on the following resources: `users`, `categories`, `tags`, and `posts`.

### Users
 - `GET    /users`    - fetch all users
 - `POST   /user`     - create a new user
 - `GET    /user/:id` - fetch a single user
 - `PUT    /user/:id` - update user
 - `DELETE /user/:id` - delete user

### Categories
 - `GET    /categories`   - fetch all categories
 - `POST   /category`     - create a new category
 - `GET    /category/:id` - fetch a single category
 - `PUT    /category/:id` - update category
 - `DELETE /category/:id` - delete category

### Posts
 - `GET    /posts`    - fetch all posts
 - `POST   /post`     - create a new post
 - `GET    /post/:id` - fetch a single post
 - `PUT    /post/:id` - update post
 - `DELETE /post/:id` - delete post
 - `GET    /posts/category/:id` - fetch all posts from a single category

### Tools
- Express
- Body parser
- Bookshelf
- Consign
- Dotenv
- Knex
- Lodash
- Mysql
- Babel
