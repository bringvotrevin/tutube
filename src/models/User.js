import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String },
  location: { type: String },
});

userSchema.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, 5);
});

const User = mongoose.model('User', userSchema);

export default User;
