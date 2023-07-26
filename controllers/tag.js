import tag from "../models/Tag.js";
import Tag from "../models/Tag.js";

export const createTag = async (req,res,next) =>{
    //se crea el nuevo objeto con el modelo previamete creado 
    const newTag  = new Tag (req.body);
    try{

        const savedTag = await newTag.save();
        res.status(200).json(savedTag);
    }catch(err){
        next(err);
    }
}


export const updateTag = async (req,res,next) =>{
    try{
        const updateTag = await Tag.findByIdAndUpdate(
            req.params.id,
             { $set: req.body},
             { new: true});
        res.status(200).json(updateTag);
    }catch(err){
        next(err)
    }

}
export const deleteTag = async (req,res,next) =>{
    try{
        await Tag.findByIdAndDelete(
            req.params.id);
        res.status(200).json("Tag has been deleted");
    }catch(err){
        next(err)
    }

}


export const getTag = async (req, res, next) => {
    try {
        if (req.query && req.query.id) {
            const tag = await Tag.findById(
                req.query.id // Cambiar "req.params.id" a "req.query.id"
            );
            res.status(200).json(tag);
        }
        if (req.query && req.query.description) {
            const tag = await Tag.find(
                { description: { $regex: req.query.description, $options: "i" } }
            );
            res.status(200).json(tag);
        
        }
        else{
            const tags = await Tag.find();
            res.status(200).json(tags);
        }
    } catch (err) {
        next(err);
    }
};
