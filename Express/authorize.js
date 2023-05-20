const authorize = (req, res, next) => {
    const { user } = req.query;
    if (user === 'Pratham') {
        req.user = { name: 'Pratham', id: 140 };
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
}

module.exports = authorize;