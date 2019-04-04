# Project Name

## Description

The 'Project Name' is a surprise trip. You will not discover your destination until a few days before traveling.

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault.
-  **Signup:** As an anon I can sign up in the platform so that I can start saving favorite destinations. 
-  **Login:** As a user I can login to the platform so that I can see my destination.
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **Select trip preferences :** As a user I can select my trip preferences (budget, departure, date, number of persons) so that I can see a list of match destinations.
-  **List destinations:** As a user I want to see all the destinations that match with my preferences.
-  **Add to favorites:** As a user I want to add six destination to favorite so that I can save the destinations that I liked the most
-  **Detail destination:** As a user I want to see all the information about this destination.
-  **See my destination:** As a user I want to see my final destination so that I can see the one in my profile.

## Backlog

Favorites

User profile:

- upload my profile picture

Weather:
- See the forecats for each destination.

# Client

## Routes
| Method | Path | Component | Permissions | Behavior |
|--------|------|--------|--| -------|
| `get`  | `/` | HomePageComponent| public | Landing page |
| `post` | `/auth/signup` | SignupPageComponent| anon only| signup form, link to login, navigate to homepage after signup|
| `post` | `/auth/login` | LoginPageComponent | anon only |login form, link to signup, navigate to homepage after login |
| `post` | `/auth/logout` | Navbar | anon only | navigate to homepage after logout, expire session |
| `get`  |  /destinations | List of all destiantions that match width my preferences.
| `get` | `/profile/:id` | Profile


## Components

- Navbar
- Card
- Like
- Shopping cart
- Calendar picker


## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- Trip Service
  - trip.list()
  - trip.random()
  - trip.detail(id)
  - trip.addFavorite(id)
  - trip.removeFavorite(id)   

# Server

## Models

User model

```
username - String // required
email - String // required & unique
password - String // required
```

Trip model

```
owner - ObjectID<User> // required
destination - String // required
date - Number
price - Number
persons - Number
hotel - String
```

## API Endpoints (backend routes)

- GET /auth/me
  - 404 if no user in session
  - 200 with user object
- POST /auth/signup
  - 401 if user logged in
  - body:
    - username
    - password
  - validation
    - fields not empty (422)
    - user not exists (409)
  - create user with encrypted password
  - store user in session
  - 200 with user object
- POST /auth/login
  - 401 if user logged in
  - body:
    - username
    - password
  - validation
    - fields not empty (422)
    - user exists (404)
    - passdword matches (404)
  - store user in session
  - 200 with user object
- POST /auth/logout
  - body: (empty)
  - 204
- POST /user/me/favorite
  - body:
    - tripId
  - validation
    - id is valid (404)
    - id exists (404)
  - add to favorites if not there yet
  - updates user in session
- DELETE /user/me/favorite/:tripId
  - validation
    - id is valid (404)
    - id exists (404)
  - body: (empty - the user is already stored in the session)
  - remove from favorites
  - updates user in session
- GET /trip/:id
- POST /trip/
- DELETE/trip/:id

API

- Kiwi
- Openweather
- http://goibibo.com

### Git

The url to your repository and to your deployed project

[Client repository Link](http://github.com)
[Server repository Link](http://github.com)

[Deploy Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)