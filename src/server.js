const express = require('express');
const cors = require('cors');

const environment = require('./configs/environment');
const routes = require('./routes');

// == == == == == == == == == == == == == == == == == == == == == == == == == == == == ==

const app = express();

const corsOptions = {
	origin: '*',
};

// == == == == == == == == == == == == == == == == == == == == == == == == == == == == ==

app.use(cors(corsOptions));
app.use(express.json());

app.use(routes);

// == == == == == == == == == == == == == == == == == == == == == == == == == == == == ==

app.listen(environment.server.port, () => {
	console.log(
		`Server is running on: http://${environment.server.host}:${environment.server.port}`
	);
});
