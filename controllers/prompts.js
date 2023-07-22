import Prompt from "../models/Prompts.js";

export const createPrompt = async (req,res,next) =>{
    //se crea el nuevo objeto con el modelo previamete creado 
    const newPrompt  = new Prompt (req.body);
    try{

        const savedPrompt = await newPrompt.save();
        res.status(200).json(savedPrompt);
    }catch(err){
        next(err);
    }
}


export const updatePrompt = async (req,res,next) =>{
    try{
        const updatePrompt = await User.findByIdAndUpdate(
            req.params.id,
             { $set: req.body},
             { new: true});
        res.status(200).json(updatePrompt);
    }catch(err){
        next(err)
    }

}
export const deletePrompt = async (req,res,next) =>{
    try{
        await Prompt.findByIdAndDelete(
            req.params.id);
        res.status(200).json("Prompt has been deleted");
    }catch(err){
        next(err)
    }

}
export const getPrompt = async (req,res,next) =>{
    try{
        const prompt = await Prompt.findById(
            req.params.id);
        res.status(200).json(prompt);
    }catch(err){
        next(err)
    }

}
export const getPrompts = async (req,res,next) =>{      
    try{
        const prompts = await Prompt.find();
        res.status(200).json(prompts);
    }catch(err){
        next(err)
    }

}