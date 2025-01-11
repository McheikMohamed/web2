import path from "node:path";
import {Text,newText} from "../types";
import { serialize,parse } from "../utils/json";
import { v4 as uuidv4 } from "uuid";
const jsonDbPath = path.join(__dirname, "/../data/texts.json");

const defaultTexts: Text[] = [
    {
        id:uuidv4(),
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id nisl",
        level:"easy"},
    {
        id:uuidv4(),
        content:"Sed ac odio sit amet erat luctus laoreet. Nullam nec nisl",
        level:"medium"},
    {
        id:uuidv4(),
        content:"Sed ac odio sit amet erat luctus laoreet. Nullam nec nisl",
        level:"hard"}
    ];


const readAllText = (level : string | undefined = undefined):Text[]=>{
    const texts = parse(jsonDbPath,defaultTexts);
    return level ? texts.filter((text)=> text.level === level):texts;
};

const readOne = (id : string):Text|undefined =>{
    const texts = parse(jsonDbPath,defaultTexts);
    return texts.find((text) => text.id === id);
};

const createOne = (newText : newText):Text|undefined=>{
    const texts = parse(jsonDbPath,defaultTexts);

    const matchingText = texts.find((text)=>text.content.toLowerCase()=== newText.content.toLowerCase());
    if(matchingText)
        return undefined;

    const text = {id : uuidv4(), ...newText};
    texts.push(text);
    serialize(jsonDbPath,texts);
    return text;
};

const deleteOne = (id : string):Text|undefined=>{

    const texts = parse(jsonDbPath,defaultTexts);
    const textIndex = texts.findIndex((text)=> text.id === id);

    if(textIndex < 0)
        return undefined;

    const [text] = texts.splice(textIndex,1);
    serialize(jsonDbPath,texts);
    return text;
};

const updateOne = (id : string , updatedText : newText):Text|undefined =>{

    const texts = parse(jsonDbPath,defaultTexts);
    const indexText = texts.findIndex((text)=> text.id === id);

    if(indexText<0)
        return undefined;

    const updateText = {...texts[indexText],...updatedText};
    texts[indexText] = updateText;
    serialize(jsonDbPath,texts);
    return updateText;
};

export {readAllText,readOne,createOne,deleteOne,updateOne};

