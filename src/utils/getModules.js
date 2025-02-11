const fs = require('fs');
const path = require('path');

function getModules(directory) {
	const items = fs.readdirSync(directory);
	const result = items
		.filter((item) => {
			const itemPath = path.join(directory, item);
			return (
				(fs.statSync(itemPath).isFile() && item.endsWith('.js')) ||
				fs.statSync(itemPath).isDirectory()
			);
		})
		.map((item) => {
			if (item.endsWith('.js')) {
				return item.slice(0, -3); // Remove the .js extension
			}
			return item;
		});

	return result;
}

console.log(getModules(__dirname));

module.exports = getModules;
