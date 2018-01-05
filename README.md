# Blog API nodejs

Using nodejs with express and bookshelft to create a API REST


## Endpoints

Next we need to define our API end points - we need to be able to perform basic CRUD operations on the following resources: 

```bash
`users`, `categories`, `tags`, and `posts`.
```

### Users

```bash
 - `GET    /users`    - fetch all users
 - `POST   /user`     - create a new user
 - `GET    /user/:id` - fetch a single user
 - `PUT    /user/:id` - update user
 - `DELETE /user/:id` - delete user
```

### Categories

```bash
 - `GET    /categories`   - fetch all categories
 - `POST   /category`     - create a new category
 - `GET    /category/:id` - fetch a single category
 - `PUT    /category/:id` - update category
 - `DELETE /category/:id` - delete category
```

### Posts

```bash
 - `GET    /posts`    - fetch all posts
 - `POST   /post`     - create a new post
 - `GET    /post/:id` - fetch a single post
 - `PUT    /post/:id` - update post
 - `DELETE /post/:id` - delete post
 - `GET    /posts/category/:id` - fetch all posts from a single category
```

### Tools

```bash
- Express
- Body parser
- Bookshelf
- Consign
- Dotenv
- Knex
- Lodash
- Mysql
- Babel
- Mocha
- Chai
```

### Update dependencies

```bash
npm install
```

### Running 

```bash
node app.js
```

## License

MIT Licensed
Copyright (c) 2017 Mario Moreno



