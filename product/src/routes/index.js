import router from './catetegoriesRoutes.js'
import express from "express";

const routes = (app) => {
    app.route('/').get((_req, res) => {
        res.status(200).send('Ecomm project')
    });

    app.use(
        express.json(),
        router
    )
}

export default routes