module.exports = (app) => {
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
        next();
    });
    const user = require('../controllers/doctor.controller.js');

    // Create a new UserType
    app.post('/doctors', user.create);

    // Retrieve all userTypes
    app.get('/doctors', user.findAll);

    // Update a usertype with id
    app.post('/doctorid', user.update);

    // Delete a usertype with id
    app.delete('/users/:_id', user.delete);
 
    app.post('/doctorlogin', user.login);

}   