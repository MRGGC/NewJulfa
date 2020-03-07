"use strict";
require('dotenv').config();
require('./src/database/connection');

const initApp = require('./src/app');

initApp().then((server) => {
    const PORT = process.env.APP_PORT || 3000;
    server.listen(PORT, () => {
        console.log(`Started Twitter Clone server on http://127.0.0.1:${PORT}`);
    });
});
