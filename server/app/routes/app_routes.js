// write this function to add to database on account creation
// https://www.freecodecamp.org/news/building-a-simple-node-js-api-in-under-30-minutes-a07ea9e390d2/
module.exports = function(app, db) {  app.post('/account', (req, res) => {
	console.log(req.body);
	res.send('Hello');
});};
