import Prompt from "../models/Prompts.js";
import mongoose from 'mongoose'; 

export const createPrompt = async (req, res, next) => {
    //se crea el nuevo objeto con el modelo previamete creado 
    const newPrompt = new Prompt(req.body);
    try {

        const savedPrompt = await newPrompt.save();
        res.status(200).json(savedPrompt);
    } catch (err) {
        next(err);
    }
}


export const updatePrompt = async (req, res, next) => {
    try {
        const updatePrompt = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true });
        res.status(200).json(updatePrompt);
    } catch (err) {
        next(err)
    }

}
export const deletePrompt = async (req, res, next) => {
    try {
        await Prompt.findByIdAndDelete(
            req.params.id);
        res.status(200).json("Prompt has been deleted");
    } catch (err) {
        next(err)
    }

}
export const getPrompt = async (req, res, next) => {
    try {
        if (req.query && req.query.id) {
            const prompt = await Prompt.findById(
                req.query.id // Cambiar "req.params.id" a "req.query.id"
            );
            res.status(200).json(prompt);
        }
        if (req.query && req.query.name) {
            const prompt = await Prompt.find(
                { name: { $regex: req.query.name, $options: "i" } }
            );
            res.status(200).json(prompt);
        
        }
        else{
            const prompts = await Prompt.find();
            res.status(200).json(prompts);
        }
    } catch (err) {
        next(err);
    }
};

export const getPromptsByUser = async (req, res, next) => {
    try {
        const { iduser } = req.query;
        if (!mongoose.Types.ObjectId.isValid(iduser)) {
            return res.status(400).json({ error: 'Invalid user ID' });
        }
        const prompts = await Prompt.find({ userId: iduser });
        res.status(200).json(prompts);
    } catch (err) {
        next(err);
    }
};
export const ExecutePrompt = async (req, res, next) => {
    const { prompt } = req.body;
    try {
        const response = await openaiApi.completions.create({
          engine: "davinci-codex",
          prompt: prompt,
          maxTokens: 200,
          temperature: 0.7,
          n: 1,
          stop: ["\n"],
        });
    
        res.json({ text: response.data.choices[0].text });
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
        res.status(500).json({ error: "Error al procesar el prompt" });
      }
};