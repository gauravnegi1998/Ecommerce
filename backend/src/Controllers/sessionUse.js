class sessionUse {

    static setSessionStore(req, res) {
        req.session.email = "testing@yopmail.com";
        req.session.userId = "987589";

        res.send('stored successfully')
    }

    static getSessionData(req, res) {
        res.send(`${req.session.email} '-' ${req.session.userId}`)
    }
}

export default sessionUse;