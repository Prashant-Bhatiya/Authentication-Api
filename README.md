# Authentication-API
Mock-API for Authentication 

# Usage
You able to use these features which login, signup. Also I want to say, I've done login and signup requests use client side. If you want to look at below request.

# URL
https://my-authentication-api.herokuapp.com/

# Register
POST URL -/Register

``` 
{
  "name": "PRASHANT BHATIYA",
  "email": "hello@prashant.com"
  "password": "secretforprashanr",
  "username": "Prashant-Bhatiya",
  "mobile": "9586784989",
  "description": "My first API server" 
  }
  ```
# RESPONSE
Success (Status Code - 200)
  ```
user:{
createdAt: "2022-03-16T12:06:27.117Z"
description: "My first API server"
email: "hello@prashant.com"
mobile: 9586784989
name: "PRASHANT BHATIYA"
password: "$2a$08$4mm.y16sbRn9S4g/5xMjquzimoIutB9OhfqwJQwSk26EUCTX6vJe6"
updatedAt: "2022-03-16T12:06:27.117Z"
username: "wsdfgh"
_id: "6231d2c37df2a8ae87a4e34d"
}
  ```
  Failure (Status Code - 200)
  
  ```
  {
  "message": "Registration failed, user already exists"
}
```

# Login
POST URL -/login
```
{
  "password": "secret",
  "email": "masai-school"
}
```
# RESPONSE
Success (Status Code - 200)
```
{
  "token": "cc4a5ce1b3df48aec5d22d1f16b894a0b894eccc"
}
```
Failure (Status Code - 401)
```
{
  "message": "Invalid login creadentials"
}
```
### Thanks for Reading.
