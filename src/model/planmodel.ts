import mongoose from 'mongoose';

const PlanSchema = new mongoose.Schema({
    plan_name:{
        type:String,
        required:true
    },
    plan_status:{ 
        type:String,    
        required:true
    },
    plan_start_date:{
        type:Date,
        required:true
    },
    plan_end_date:{
        type:Date,
        required:true
    },
    plan_user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    plan_price:{
        type:Number,
        required:true
    }
})

export const PlanModel = mongoose.models.Plan || mongoose.model("Plan",PlanSchema);