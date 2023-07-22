//En cada uno de los model se importara un esquema de moongose con el fin de acomodar el objeto a a la base de datos de mongo db 
import mongoose from 'mongoose';

//el squema hace referencia al objeto y a los tipos de datos que se utilizaraan 

const UserSchema = new mongoose.Schema({
    instruction:{
        type: String, 
        require:true,
        unique:true    
    },
    context:{
        type: String, 
        require:false,
        
    },
    size:{
        type: String, 
        require:false,
    },
    tags: {
        type:[ mongoose.ObjectId],
        ref: 'Tag'
      },    
    respoonses:[{name: String, response: String}],
    }
,{timestamps: true})

export default mongoose.model("Prompt", UserSchema);