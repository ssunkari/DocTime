module.exports = function (redisClient) {
    return {
        loggedIn: function (req, res, next) {
            if (req.isAuthenticated()) {
                next();
            } else {
                res.redirect('/');
            }
        },
        users: require('./users')(redisClient)
    };
}