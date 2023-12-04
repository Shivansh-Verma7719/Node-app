const express = require('express');

const router = express.Router();

router.get('/', async (request, response) => {

    request.query.name
    response.send('<a href="/users/new">User Form</a><br>User List')

});

router.post('/', async (request, response) => {

    const isValid = true;
    if (isValid) {
        users.push({
            firstName: request.body.firstname
        });
        response.redirect('/users/' + (users.length - 1))
    }
    else{
        console.log('Error')
        response.render('new', { firstName: request.body.firstname })
    }

});

router.get('/new', async (request, response) => {

    response.render('new')

});

router
    .route('/:id')
    .get(async (request, response) => {

        response.send('Get User ' + request.user.firstName)
    })
    .put(async (request, response) => {

        response.send('Update User ' + request.user.firstName)
    })
    .delete(async (request, response) => {
        response.send('Delete User ' + request.user.firstName)
    })

const users = [
    {
    firstName: 'John',
    },
    {
    firstName: 'Jane',
    }
];

// Middleware runs between the request and the response
router.param('id', (request, response, next, id) => {
    request.user = users[id];
    next();
});


module.exports = router;