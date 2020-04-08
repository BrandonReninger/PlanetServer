import {
    dbContext
} from "../db/DbContext";
import {
    BadRequest
} from "../utils/Errors";

class PlanetService {
    async getAll() {
        let planets = await dbContext.Planets.find()
        return planets;
    }
    async create(body) {
        let planet = await dbContext.Planets.create(body)
        return planet;
    }
    async findById(id) {
        let value = await dbContext.Planet.findById(id);
        if (!value) {
            throw new BadRequest("Invalid Id");
        }
        return value;
    }
}

export const planetService = new PlanetService();