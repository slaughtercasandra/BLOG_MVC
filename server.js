const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('../config/connection.js');
const routes = require(/controllers');
// const helpers = require('./utils/helpers');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'sss',
    cookie:{
        httpOnly:true,
        secure:false,
        sameSite:'strict',
    },
    resave:false,
    saveUninitiated:true,
    store: new SequelizeStore({
        db: sequelize
    })
    };
app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')

app,use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(routes);

sequelize.sync({force:false}).then(() => {
    app.listen(PORT, ()=> console.log('listening'));
});