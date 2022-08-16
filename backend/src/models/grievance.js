import mongoose from "mongoose";


const approvalStatus = new mongoose.Schema({
    status: {
      type: String,
      required: true,
    },
    comments: {
      type: String,
      required: true
    },
    actedBy:{
        type: String,
        required: true
    },
    updatedAt: {
        type: Date,
        required: true
    }
  });

  const actionStatus = new mongoose.Schema({
    status: {
      type: String,
      required: true,
    },
    comments: {
      type: String,
      required: true
    },
    actedBy:{
        type: String,
        required: true
    },
    updatedAt: {
        type: Date,
        required: true
    }
  });

const GrievancesSchema=new mongoose.Schema({
    
    student_id: {
        type: String,
        required: true
    },
    subject:{
        type: String,
        required:true
    },
    grievance:{
        type: String,
        required:true
    },
    
    create_at: {       //date
        type: Date,
        default:Date.now(),
        required: true
    },

    // closed_at: {       //date
    //     type: Date,
    //     default:Date.now(),
    //     require: false  
    // }
    // approvalStatus: {
    //     type: [approvalStatus],
    //     require : true
    // },
    // actionStatus: {
    //     type: [actionStatus],
    //     require : true
    // }

});

const Grievances=new mongoose.model("Grievances",GrievancesSchema);
export default Grievances;
