import mongoose from 'mongoose';

const { Schema } = mongoose;

// Extend the existing user schema to include the documents field
const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: false,
    },
    username: String,
    profilePicture: String,
    signature: String,
    role: { type: String, default: 'user' },
    adminRequests: [
        {
            artifactId: { type: mongoose.Schema.Types.ObjectId, ref: 'Artifact' },
            status: {
                type: String,
                enum: ['pending', 'accepted', 'rejected'],
                default: 'pending',
            },
        },
    ],
    documents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Document' }]// Array of documents for each user
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', UserSchema);
