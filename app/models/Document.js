import mongoose from 'mongoose';

const { Schema } = mongoose;

// Extend the existing user schema to include the documents field
const documentSchema = new Schema({
    documentId: { type: String, required: true }, // Add documentId field
    name: { type: String, required: false },
    versions: [{
        content: { type: String, required: true },
        createdAt: { type: Date, default: Date.now }
    }]
}, { timestamps: true });

export default mongoose.models.Document || mongoose.model('Document', documentSchema);
