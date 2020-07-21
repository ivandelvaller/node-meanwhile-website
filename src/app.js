// Imported global modules.
const express = require('express');
const path = require('path');

// Imported handlebars modules.
const exphbs = require('express-handlebars');

// Imported routes.
const index = require('./routes/index');
const about = require('./routes/about');
const contact = require('./routes/contact');
const superheros = require('./routes/superheros');

// Instance of express().
const app = express();

// Constants.
const PORT = process.env.PORT || 3000;
//      Path directories.
const publicDirectoryPath = path.join(__dirname, '../public');
const layoutTemplatePath = path.join(__dirname, '../templates/layouts');
const viewsDirectoryPath = path.join(__dirname, '../templates/views');
const partialsDirectoryPath = path.join(__dirname, '../templates/partials');


// Setup the view engine: Handlebars,
//      Create a new exphbs environment.
const hbs = exphbs.create({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: layoutTemplatePath,
    partialsDir: partialsDirectoryPath,
    helpers: {

    }
});
//      Middlewares.
app.engine('.hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', viewsDirectoryPath);

// Static files.
app.use(express.static(publicDirectoryPath));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes.
app.use(index);
app.use(about);
app.use(contact);
app.use(superheros);

app.use('*', (req, res) => {
    res.render('404');
});

// Server.
const Server = async () => {
    await app.listen(PORT);
}
//      Initiate the server.
Server()
    .then(() => {
    console.log('Server on port ' + PORT);
    })
    .catch((error) => {
        console.log(error);
    });