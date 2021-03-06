/** ~/routes/index.js
* Load all middleware and route handlers;
* Map HTTP method urls + urls to the
*
* NOTE All responses should be in JSON, including any message returned to the
*   front-end
*/

// IDEA: instead of id as param, use username for users and title for posts?
// IDEA: implement updateUserHandler
// IDEA: implement deleteUserHandler
// IDEA: implement updatePostHandler
// IDEA: implement deletePostHandler
// IDEA: implement /comments routes and handlers

const express = require('express');

const router = express.Router();

// Import middleware
const postLogoutHandler = require('./postLogoutHandler');

const getAllUsersHandler = require('./getAllUsersHandler');
const getOneUserHandler = require('./getOneUserHandler');
// const updateUserHandler = require('./updateUserHandler');
// const deleteUserHandler = require('./deleteUserHandler');

const createPostHandler = require('./createPostHandler');
// const updatePostHandler = require('./updatePostHandler');
const deletePostHandler = require('./deletePostHandler');


router.post('/logout', postLogoutHandler);

router.get('/users', getAllUsersHandler);
router.get('/users/:username', getOneUserHandler);
// router.put('/users/:username', isLoggedIn, updateUserHandler);
// router.delete('/users/:username', isLoggedIn, deleteUserHandler);

router.post('/posts', createPostHandler);
// router.put('/posts/:string_id', isLoggedIn, updatePostHandler);
router.delete('/posts/:string_id', deletePostHandler);

module.exports = router;
