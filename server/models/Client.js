import { model, Schema } from "mongoose";

const ClientSchema = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
});

export const Client = model("Client", ClientSchema);
