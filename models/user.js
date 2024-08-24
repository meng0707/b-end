const mongoose = require('mongoose');

// Define the schema correctly
const userSchema = new mongoose.Schema({
    user_name: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: false },
    role: { type: String, required: false },
},
{timestamps : true, versionKey: false}
);
// Export the model with the correct schema
const User = mongoose.model('User', userSchema);

module.exports = User;