import express from "express"
import path from "path"
import { sample1Controller } from "./api/controllers.mjs"
import { q8_1Controller } from "./api/controllers.mjs";
import { q8_2Controller } from "./api/controllers.mjs"; 
import { q8_3Controller } from "./api/controllers.mjs";
import { sample2Controller } from "./api/controllers.mjs"; 

const routers = express.Router()

routers.post("/api/sample1", sample1Controller.postSample1)
routers.get("/api/8-1", q8_1Controller.getQ8_1_1);
routers.post("/api/8-1", q8_1Controller.postQ8_1_2);
routers.put("/api/8-1", q8_1Controller.putQ8_1_3);
routers.delete("/api/8-1", q8_1Controller.deleteQ8_1_4)
routers.get("/api/8-2", q8_2Controller.getQ8_2_1);
routers.post('/api/8-2', q8_2Controller.postQ8_2_2);
routers.put('/api/8-2', q8_2Controller.putQ8_2_3);
routers.delete('/api/8-2', q8_2Controller.deleteQ8_2_4);
routers.get("/api/8-3", q8_3Controller.getQ8_3_1);
routers.get("/api/8-3", q8_3Controller.getQ8_3_2);
routers.post("/api/sample2", sample2Controller.postSample2)
routers.get("/api/sample2/:id", sample2Controller.getOneSample2)
routers.get("/api/sample2", sample2Controller.getAllSample2)
routers.put("/api/sample2/:id", sample2Controller.putSample2)
routers.delete("/api/sample2/:id", sample2Controller.deleteSample2)

// client配下は、ブラウザサイドで実行されるファイル（HTML/JS/CSS/画像など）を配置する
routers.use(express.static(`${path.resolve()}/client`))

export default routers
