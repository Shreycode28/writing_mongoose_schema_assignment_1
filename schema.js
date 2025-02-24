// Import mongoose to define the schema
const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, // Ensure the username is provided
        unique: true,   // Ensure the username is unique
        trim: true      // Remove any extra spaces
    },
    email: {
        type: String,
        required: true, // Ensure the email is provided
        unique: true,   // Ensure the email is unique
        lowercase: true, // Convert email to lowercase
        match: [/.+@.+\..+/, 'Please enter a valid email address'] // Validate email format
    },
    password: {
        type: String,
        required: true, // Ensure the password is provided
    },
    roles: {
        type: [String], // Store user roles in an array
        default: ['user'], // Default role is 'user'
    },
    profile: {
        firstName: {
            type: String,
            required: true // Ensure first name is provided
        },
        lastName: {
            type: String,
            required: true // Ensure last name is provided
        },
        age: {
            type: Number,
            required: true, // Ensure age is provided
            min: 18,        // Age must be 18 or older
        }
    },
    lastLogin: {
        type: Date,   // Store the date of the last login
        default: Date.now // Set the default value to the current date and time
    }
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

// Create a model using the schema
const User = mongoose.model('User', userSchema);

// Export the model so it can be used elsewhere
module.exports = User;
