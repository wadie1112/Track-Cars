import mongoose from "mongoose";

const vehiculeSchema = new mongoose.Schema({

    marque:{    
        type:String,
        required:true
    },
    modele:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:false
    },
    image:{
        type:String,
        required:false
    },
    kilometrage:{
        type:Number,
        required:false
    },
    Vin:{
        type:Number,
        required:true
    }, 
    NumeroSeries:{
        type:String,
        required:true
    },
    Etat:{
        type:String,
        required:false
    },
    Position:{
        type:String,
        required:false
    },
    Adresse:{
        type:String,
        required:false
    },
    vitesse:{
        type:Number,
        required:false
    },
    CarteSim:{
        type:Number,
        required:false
    },
   
    Assurance:{
        type:String,
        required:false
    },
    DateAssurance:{
        type:Date,
        required:false
    },
    DateVignette:{
        type:Date,
        required:false
    },
    DateVidange:{
        type:Date,
        required:false
    },
    DateControlTechnique:{
        type:Date,
        required:false
    },


},{timestamps:true});

const Vehicule = mongoose.model('Vehicule',vehiculeSchema);
export default Vehicule;