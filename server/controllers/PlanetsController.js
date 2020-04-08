import express from "express";
import BaseController from "../utils/BaseController";
import {
    planetService
} from "../services/PlanetService";

export class PlanetsController extends BaseController {
    constructor() {
        super("api/planets");
        this.router
            .get("", this.getAll)
            .post("", this.create);
    }
    async getAll(_, res, next) {
        try {
            let planets = await planetService.getAll()
            res.send({
                data: planets,
                message: "here's your planet dude!"
            })
        } catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            let planet = await planetService.create(req.body)
            res.send({
                data: planet,
                message: "planet created!"
            })
        } catch (error) {
            next(error);
        }
    }
}