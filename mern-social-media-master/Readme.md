# software documentation

I am developing a social media account for people to post their photos/poems my idea is that i want to add categorization functionality to it one day so that a person can categorize their photos by emoji and then search them in the same way. They can have friends and give them access to certain categories of photos/posts by allocating that person with the given permission emoji
however as this is V1 i will be working on the basic structure, connection withg mongodb and login
#

## System Architecture

I will be using the MERN stack to develop my application. I will use "`Create React App`" to develop the front end of my application. I chose this because I am more familiar with CRA than other tools like Vite/Next.js. I am going to style the app using bootstrap and CSS. 
#

### functional requirements
- The system must allow the user to sign up and/or login with an email
- the system must allow a user to view previously posted images/poems.
- the system must allow a user to upload images and make posts. 
- the system must allow the user to view the posts of friends and like them
- the system must allow the user to Friend a person and unfriend them(inital control of who can see your images)
- the system allows admins to make edits through access to the mongodb atlas account.
#

### Non-Functional Requirements
- It is built using Express, React, and MongoDB (the MERN stack).
- It creates, reads, updates, and deletes (CRUD) information from MongoDB.
- It has a custom server built using Express.
- It authenticates users using JWT.
- The front-end is built using React. You can use a React framework (e.g. Create React App or Next.js) of your choice.
#

### User Stories
- As a user, i should be able to navigate between the different pages the site has to offer.
 - As a user I should be able to sign up or login to the site.
 - As a user I should be able to add posts/images.
- as a user i should be able to add or delete friends, images and posts are left undeleteable for now on purpose, in real life people cannot take things said/done back, why should we be able to on social media? (it is an experiment on accountability and shame, the idea being for people to become more aware of their actions)
- The user should be able to toggle between light and dark mode. 


#
This webapp will have a simple and easy to use UI. The architecture of the backend will not delay the user from accessing the different parts of the site. This webapp will allow a user to add images/posts thus allowing the user to store their images safelyon a platform they dont need to share or make public like fb
#


### LOGIN PAGE
This page will give the user two options 
if they already have an account they can login
if not then they can register
It will use JWT authentication 

### REGITER PAGE
this page takes in all the info necessary to add a user to the system and creates a profile for them on mongo db

### home page 
This page will show the user a widget on the side with their profiel info aswell as a button on the top right for them to logout. It will display their pictures/posts for those who like to write poetry in the center aswell as their friends, they will be able to like the posts and view comments on the posts

## Profile Page
This will show a user their profile with only their posts showing and a list of their friends/ they can also select a friend and then view their friends posts/photos

## Running this application locally
 Run `npm install` then `npm run start` from the backend directory, thereafter run `npm install` then `npm start` from the frontend directory. 

 ## Testing
To test the app run npm test from the frontend directory

## Security
No API keys were needed for the usage of this application. User passwords are salted and hashed when storing them in the database so we don't save any plain text passwords.
#

## Deployment
This application is not deployed due to Heroku not being free by the time of creating this app.
#
