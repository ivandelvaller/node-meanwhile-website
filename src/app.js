const path = require('path');

const express = require('express');
const exphbs = require('express-handlebars');

const index = require('./routes/index');
const about = require('./routes/about');
const contact = require('./routes/contact');
const superheros = require('./routes/superheros');

const app = express();
const PORT = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, '../public');
const layoutTemplatePath = path.join(__dirname, '../templates/layouts');
const viewsDirectoryPath = path.join(__dirname, '../templates/views');
const partialsDirectoryPath = path.join(__dirname, '../templates/partials');

const hbs = exphbs.create({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: layoutTemplatePath,
    partialsDir: partialsDirectoryPath,
});

app.engine('.hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', viewsDirectoryPath);

app.use(express.static(publicDirectoryPath));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(index);
app.use(about);
app.use(contact);
app.use(superheros);

app.use('*', (_req, res) => {
    res.render('404');
});

app.listen(PORT, () => console.log('Server on port ' + PORT));
