Basic Stack 
Database ORM -> Prisma
prisma Authentication -> json-web-token 
Validation -> joi 
Cross-Origin Resource Sharing-> cors

REST API
Base URL: https://knowledge-test-api.vercel.app

Endpoints:
.   Register
    Method: POST
    URL: /auth/register
    Body:
        {
            "userName": "Mac Alister",
            "gender": "man",
            "email": "mac@example.com",
            "password": "securePassword123"
        }

.   Login
    Method: POST
    URL: /auth/login
    Body: 
        {
           "email": "mac@example.com",
           "password": "securePassword123"
        }

.  Create Post
   Method: POST
   URL: /posts
   body: 
        {
          "content": "new content"
        }

.   Get posts
    Method: POSTS
    URL: posts/:userId  

.   Read Post
    Method: PATCH
    URL: posts/:id/toggle-read

.   Update Post
    Method: PUT
    URL: posts/:id   

.   Delete Todo
    Method: DELETE
    URL: /posts/:id

    

