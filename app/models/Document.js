import mongoose from 'mongoose';

const { Schema } = mongoose;

// Extend the existing document schema
const documentSchema = new Schema({
    documentId: { type: String, required: false }, // Add documentId field
    name: { type: String, required: false },
    versions: [{
        content: { type: String, required: true },
        createdAt: { type: Date, default: Date.now }
    }],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user who created the document
    sharedWith: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] // References to users with whom the document is shared
}, { timestamps: true });

export default mongoose.models.Document || mongoose.model('Document', documentSchema);
