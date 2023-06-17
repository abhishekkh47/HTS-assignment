# HTS-assignment

To start the application in your local system , please follow below steps:
1. add .env file
2. go to mongodb-atlas and get the URL of you DB you have created there along with you DB credentials
3. add two below given env variables :
  ```
  PORT=4000
  MONGO_URI=<mongo-url-here>
  ```
4. run cmd ```npm i``` to install all the node packages
5. run cmd ```npm start``` to start the application
6. you are all set with you application which allows you to let the users signup and login to your app


# Please note, the endpoints will be :
### 1. Endpoint - SIGNUP :
###    Method - POST
###    URL - localhost:4000/api/signup
###    Input (Body) - 
```
{
    "first_name": "jason",
    "last_name": "bruce",
    "email": "jason@gmail.com",
    "password": "JasonIsGod0@"
}
```

### 2. Endpoint - LOGIN :
###    Method - POST
###    URL - localhost:4000/api/login
###    Input (Body) - 
```
{
    "email": "jason@gmail.com",
    "password": "JasonIsGod0@"
}
```
