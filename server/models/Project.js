import { model, Schema, Types } from "mongoose";

const ProjectSchema = Schema({
  clientId: { type: Types.ObjectId, ref: "Client", required: true },
  name: { type: String, required: true },
  description: { type: String, required: true, unique: true },
  status: {
    type: String,
    enum: ["Not Started", "In Progress", "Completed"],
    required: true,
  },
});

export const Project = model("Project", ProjectSchema);
