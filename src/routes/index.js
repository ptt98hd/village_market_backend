const express = require('express');
const getModules = require('../utils/getModules');

const router = express.Router();

router.get('/', (_, res) => {
	res.send('Chào mừng đến với Chợ Làng API!');
});

const modules = getModules(__dirname);
modules.forEach((module) => {
	router.use(`api/${module}`, import(`./${module}`));
});

export default router;
