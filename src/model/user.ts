import mongoose, { Schema, Document } from 'mongoose';

export interface USER extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const UserSchema: Schema = new Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: {type: String, require: true, trim: true, unique: true},
    city: {type: String, require: true, trim: true}
});

export default mongoose.model<USER>('user', UserSchema);
