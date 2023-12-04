const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', async (request, response) => {

        response.render('home', { text: 'Hello World' });
        // response.send(await readFile('./views/home.html', 'utf8'));

});

const userRouter = require('./routes/users');

app.use('/users', userRouter);

function logger(request, response, next) {
    console.log(request.originalUrl);
    next();
}

app.listen(process.env.PORT || 8080, () => console.log('App available on http://localhost:8080'));