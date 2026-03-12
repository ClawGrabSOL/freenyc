const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.listen(3456, () => console.log('Project Free NYC running at http://localhost:3456'));
