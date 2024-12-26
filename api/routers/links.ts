import express from "express";
import Link from "../models/Link";
import {ILink} from "../types";

const randomString = require("randomstring");
const linksRouter = express.Router();

linksRouter.get('/:shortUrl', async (req, res, next) => {
    const shortUrl: string = req.params.shortUrl;

    if (!shortUrl) {
        res.status(404).send('URL not found');
    }

    try {
        const link = await Link.findOne({shortUrl: shortUrl});

        if (!link) {
            res.status(404).send('Not Found');
        } else {
            res.status(301).redirect(link.originalUrl);
        }
    } catch (e) {
        next(e);
    }
});

linksRouter.post('/', async (req, res, next) => {
    if (!req.body.originalUrl) {
        res.status(400).send({error: "URL is required!"});
        return;
    }

    const newLink: ILink = {
        originalUrl: req.body.originalUrl,
        shortUrl: randomString.generate({
            length: 7,
            charset: 'alphabetic'
        }),
    };

    try {
        const link = new Link(newLink);
        await link.save();
        res.send(link);
    } catch (e) {
        next(e);
    }
});

export default linksRouter;