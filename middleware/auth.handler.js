function CheckApiKey(req, res, next) {

    const apiKey = req.headers['api'];
    if (apiKey === '123') {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
    
}

module.exports = { CheckApiKey }