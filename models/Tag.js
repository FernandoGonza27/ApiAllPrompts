//En cada uno de los model se importara un esquema de moongose con el fin de acomodar el objeto a a la base de datos de mongo db 
import mongoose from 'mongoose';

//el squema hace referencia al objeto y a los tipos de datos que se utilizaraan 

const TagSchema = new mongoose.Schema({
    description:{
        type: String, 
        require:true,        
    },
    color:{
        type: String, 
        require:false,        
    },
    }
,{timestamps: true})

export default mongoose.model("Tag", TagSchema);