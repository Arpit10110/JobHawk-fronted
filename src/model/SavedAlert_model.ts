import mongoose from "mongoose";

const JobFormSchema = new mongoose.Schema({
  jobtitle: {
    type: [String],
    required: true,
  },
  joblocation: {
    type: [String],
    required: true
  },
  exp: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  hrtime: {
    type: String,
    required: true
  },
  ampm: {
    type: String,
    required: true
  },
  jobnumber: {
    type: String,
    required: true
  },
  jobtype: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  expiryDate: {
    type:Date,
    required: true
  },
  lastSentAt: {
    type: Date,
    default: null
  },
  status:{
    type: String,
    default: "active"
  },
  plantype: {
    type: String,
    default: "free"
} 
});

const SavedAlert = mongoose.models.SavedAlert || mongoose.model("SavedAlert", JobFormSchema);
export default SavedAlert;
