const HitosService = require("../service/hitosService");
const jwtUtils = require("../../utils/jwtUtils");

module.exports = class HitosController {
    constructor() {
        this.hitosService = new HitosService();
    }

    async getMilestones(req, res) {
        try {
            const milestones = await this.hitosService.getHitos();
            if (!milestones) {
                return res.status(404).json({ message: "Hitos no encontrados" });
            }
            console.log(milestones)
            res.status(200).json(milestones);
        } catch (error) {
            const errorObj = JSON.parse(error.message);
            res.status(errorObj.status).json({ message: errorObj.message });
        }
    }
}