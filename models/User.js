import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please provide a name 🤨'],
		minlength: 3,
		maxlength: 20,
		trim: true,
	},
	email: {
		type: String,
		required: [true, 'Please provide an email 🤨'],
		validate: {
			validator: validator.isEmail,
			message: 'Please provide a valid email 🤨',
		},
		trim: true,
		// Make sure the email is not already in use
		unique: true,
	},
	password: {
		type: String,
		required: [true, 'Please provide a password 🤨'],
		trim: true,
		minlength: 6,
		// Don't return the password in SELECT query and thus will not be returned in the response
		select: false,
	},
	lastName: {
		type: String,
		minlength: 3,
		maxlength: 20,
		trim: true,
		default: 'lastName',
	},
	location: {
		type: String,
		minlength: 3,
		maxlength: 20,
		trim: true,
		default: 'my city',
	},
});

// Incrypt the user schema. Mongoose middleware function that will run before we save the document to the DB
UserSchema.pre('save', async function () {
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

// Create JWT
UserSchema.methods.createJWT = function () {
	return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_LIFETIME,
	});
};

export default mongoose.model('User', UserSchema);
