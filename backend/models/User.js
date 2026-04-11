const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true, lowercase: true, trim: true },
	password: { type: String, required: true },
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function () {
	// Sanitize email
	if (this.isModified('email')) {
		this.email = this.email.toLowerCase().trim();
	}
	if (!this.isModified('password')) return;
	this.password = await bcrypt.hash(this.password, 10);
});

// Compare password for login
userSchema.methods.comparePassword = async function (candidatePassword) {
	return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
