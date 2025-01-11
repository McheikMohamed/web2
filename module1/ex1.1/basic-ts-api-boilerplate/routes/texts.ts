import {Router} from "express";
import {readAllText,readOne,createOne,deleteOne,updateOne} from "../services/texts";
import { newText } from "../types";
const expectedLevels = ["easy","medium","hard"];

const router = Router();

router.get("/",(req,res)=>{
    const level = "level" in req.query && typeof req.query["level"] === "string"
    ? req.query["level"]
    :undefined;

    if (level !== undefined && !expectedLevels.includes(level)){
        return res.sendStatus(400);
    }
    
    const filteredText = readAllText(level);
    return res.send(filteredText);
});

router.get("/:id",(req,res)=>{
    if(typeof req.params.id !== "string")
        return res.sendStatus(400);

    const text = readOne(req.params.id);
    if(text === undefined)
        return res.sendStatus(404);

    return res.send(text);
});

router.post("/",(req,res)=>{
    const body: unknown = req.body;

    if (
        !body ||
        typeof body !== "object" ||
        !("content" in body) ||
        !("level" in body) ||
        typeof body.content !== "string" ||
        typeof body.level !== "string" ||
        !body.content.trim() ||
        !expectedLevels.includes(body.level)
      ) {
        return res.sendStatus(400);
      }

      const newText = body as newText;

      const createdText = createOne(newText);
      
      if(!createdText){
        return res.sendStatus(409);
      }
      return res.json(createdText);
});

router.delete("/:id",(req,res)=>{

    if(typeof req.params.id !== "string"){
        return res.sendStatus(400);
    }

    const text = deleteOne(req.params.id);
    
    if(text === undefined){
        return res.sendStatus(404);
    }

    return res.json(text);

});

router.put("/:id",(req,res)=>{

    const body:unknown = req.body;
    if (
        !body ||
        typeof body !== "object" ||
        !("content" in body) ||
        !("level" in body) ||
        typeof body.content !== "string" ||
        typeof body.level !== "string" ||
        !body.content.trim() ||
        !expectedLevels.includes(body.level)
      ) {
        return res.sendStatus(400);
      }


    const id = req.params.id;

    if(typeof id !== "string"){
        return res.sendStatus(400);
    }

    const updatedText = updateOne(id,body as newText);

    if(!updatedText)
        return res.sendStatus(404);

    return res.send(updatedText);
});

export default router;