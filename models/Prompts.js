//En cada uno de los model se importara un esquema de moongose con el fin de acomodar el objeto a a la base de datos de mongo db 
import mongoose from 'mongoose';

//el squema hace referencia al objeto y a los tipos de datos que se utilizaraan 

const UserSchema = new mongoose.Schema({
    name:{
        type: String, 
        require:true,
        unique:true    
    },
    type: {
        type: String,
        enum: ['edit', 'image','completions']
    },
    instruction:{
        type: String, 
        require:true           
    },
    context:{
        type: String, 
        require:false,
        
    },
    size:{
        type: String, 
        require:false,
    },
    userId:{
        type: mongoose.ObjectId, 
        require:true,
    },
    tags: {
        type:[ mongoose.ObjectId],
        ref: 'Tag'
      },    
    responses:{
        type:[String]
    },
    }
,{timestamps: true})

export default mongoose.model("Prompt", UserSchema);