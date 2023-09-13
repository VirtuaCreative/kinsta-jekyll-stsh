const express = require('express');
const app = express();
const path = require('path');

express.static(path.join(__dirname, '/_site'));
