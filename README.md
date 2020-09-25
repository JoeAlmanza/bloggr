# Blogger

![](https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)

You have been hired to complete the front-end of Bloggr, a blogging website built by The Blog Company! They have already hired out to have an API built and that has been deployed to https://cw-bloggr.herokuapp.com/ which also holds the documentation for using that API. Your job is to make a beautiful client that will function in a way they anticipate.

## Goals:

In this checkpoint students will create a client interface that utilizes a blog API. Students will demonstrate their knowledge of the VueJS framework, creating a multipage SPA application that utilizes Vue, Vuex, and Vue-Router. In addition they will work with Auth0 to manage client Authentication.

## Requirements:

#### Visualization

- [X] `Home page` displays all published blogs (response from a standard get request)
- [X] Blogs on the `home page` are listed as title and author
- [X] Clicking the link users are taken to a `blog page`
- [X] Refreshing while on the `blog page` does not renavigate the user, and the blog still shows its contents
- [X] The `blog page` shows all comments for that blog

#### Functionality

- [X] Users Can Register, Login, and Logout (this should work out of the box, don't break it)
- [X] Once logged in Users can Create Edit and Delete Blogs
- [X] Once logged in Users can Create Edit and Delete Comments
- [X] Users can only modify/delete data they created


### API Routes

#### Profile: _"api/profile"_

Schema:

```javascript
    subs: [{ type: String, unique: true }]
    email: { type: String, lowercase: true, unique: true }
    name: { type: String, required: true }
    picture: { type: String }
```

- GET: '/' returns users profile, creates one if it does not exist\*
- GET: '/blogs' returns logged in users Blogs\*\*
- GET: '/comments' returns logged in users Comments\*\*
- PUT: '/' Allows user to edit their own profile\*\*

#### Blog _"api/blogs"_

Schema:

```javascript
  title: { type: String, required: true }
  body: { type: String, required: true }
  published: { type: Boolean, default: true }
  creatorEmail: { type: String, required: true }
```

- GET: '/' Returns all pubished blogs \*\*\*
- GET: '/:id' Returns blog by Id
- GET: '/:id/comments" Returns comments for a blog
- POST: '/' Create new Blog \*
- PUT: '/:id' Edits Blog \*\*
- DELETE: '/:id' Deletes Blog \*\*

#### Comments _"api/comments"_

```javascript
  body: { type: String, required: true }
  blog: { type: ObjectId, ref: "Blog", required: true }
  creatorEmail: { type: String, required: true }
```

- POST: '/' Create new Comment \*
- PUT: '/:id' Edits Comment \*\*
- DELETE: '/:id' Deletes Comment \*\*

> \* _requires user login_ \
> \*\* _requires login and ownership of data_ \
> \*\*\* _accepts query parameter "creatorEmail" and filters for that creator_

deployed to: https://cw-bloggr.herokuapp.com/
