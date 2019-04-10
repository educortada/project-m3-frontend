# Flight Finder

## Description

Find the cheapest flights from spain to some amazing european cities.

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault.
-  **Signup:** As an anon I can sign up in the platform so that I can start saving favorite destinations. 
-  **Login:** As a user I can login to the platform so that I can see my destination.
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **Search flight :** As a user I can select my trip preferences (departure, date, number of persons) so that I can see a list of match destinations.
-  **List destinations:** As a user I want to see all the destinations that match with my preferences.
-  **Buy:** As a user I can buy flights and see all booked flights in my profile.
-  **Add to favorites:** As a user I want to add destination to favorite so that I can save the destinations that I liked the most
-  **Favorite detail:** As a user I want to see all the information about this flight.

## Backlog

Favorites
User profile:
- upload my profile picture
Weather:
- See the forecats for each destination.

# Client

## Routes
| Route | Component | Permissions |
|------|--------|:-|
| `/` | Start | Anon only |
| /signup | Signup | Anon only |
| /login | Login | Anon only |
| /home | Private | Private only |
| /profile | Profile | Private only |
| /favorite/:id | Favorite | Private only |



## Components

- AnonRoute
- ButtonBuy
- Card
-  FavoriteCard
- FavoritesNavbar
- List
- Navbar
- PrivateRoute
- ProfileNavbar
- QuantityBox
- Search

## Pages

- Favorite
- Login
- Private
- Profile
- Signup
- Start

## Services

- Auth Service
  - authService.login(user)
  - authService.signup(user)
  - authService.logout()
  - authService.me()
  - authService.update(user)
- Trip Service
  - tripService.createTrip(flight, adults, photoCity)
  - tripService.getFlights()
- Favorite Service
  - favoritesService.createFavorite(flight, adults, photoCity)
  - favoritesService.getFavorites()
  - favoritesService.getFavoriteById(id)
  - favoritesService.deleteFavoriteById(id)
- Flights Service
  - flightsService.getAllFlightsFrom()
- Photos Service
  - photosService.getPhoto(city)

# Backend

## Models

User model:

```
username: String
email: String
password: String
avatarURL: String
```

Trip model:

```
owner: type: ObjectId
destination: String
imgUrl: String
price: Number
adults: Number
startFrom: String
startTo: String
returnFrom: String
returnTo: String
```

Favorite model:

```
owner: type: ObjectId
destination: String
imgUrl: String
price: Number
adults: Number
startFrom: String
startTo: String
returnFrom: String
returnTo: String
```

## API Endpoints (backend routes)

- GET /auth/me
- POST /auth/signup
- POST /auth/login
- POST /auth/logout
- GET /auth/private
- PUT /auth/profile/update

- POST /favorite/create
- GET /favorite/get
- GET /favorite/detail/:id
- DELETE /favorite/detail/:id

- POST /trip/create
- GET /trip/flights


## API

- Kiwi - https://docs.kiwi.com
- Unsplash - https://unsplash.com/developers

## Git

[Client repository Link](https://github.com/educortada/project-m3-frontend)
[Server repository Link](https://github.com/educortada/project-m3-backend)

[Deploy Link](https://project-m3-322bd.firebaseapp.com/home)

## Slides

[Slides Link](https://docs.google.com/presentation/d/1otAExCER92VhIpQAe5pu057Dd86Pp55r8UaYmH9-HQI/edit?usp=sharing)