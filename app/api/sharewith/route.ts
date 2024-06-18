// pages/api/saveContent.ts

import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import connect from "../../utils/db"; // Assuming your DB connection utility
import User from "../../models/User"; // Import User model
import Document from "../../models/Document";
import chalk from "chalk";

const saveContentToMongoDB = async (userId: string, documentId: string, content: string) => {
    try {
        console.log(chalk.green("it also working"));
        await connect(); // Connect to the MongoDB database

        const user = await User.findById(userId);
        if (!user) {
            throw new Error("User not found");
        }

        if (!documentId) {
            documentId = new Types.ObjectId().toString(); // Generate a new document ID if not provided
        }

        if (!user.documents.includes(documentId)) {
            user.documents.push(documentId);
            await user.save();
        }

        let document = await Document.findById(documentId);
        if (!document) {
            document = new Document({ _id: documentId, sharedWith: [userId], content: "" });
        } else if (!document.sharedWith.includes(userId)) {
            document.sharedWith.push(userId);
        }
        await document.save();

        console.log("Content saved successfully to MongoDB");

        console.log("Content saved successfully to MongoDB");
    } catch (error) {
        console.error("Error saving content to MongoDB:", error);
        // throw new Error("Internal server error");
        console.log(error.message)
    }
};

export const PUT = async (req: any, res: NextApiResponse) => {
    try {

        // Check if the request method is POST
        if (req.method !== "PUT") {
            return res.status(405).json({ message: "Method not allowed" });
        }
        // console.log(req);
        // Parse the request body to extract data
        const { userId, documentId } = await req.json();
        console.log(chalk.red(`UserID: ${userId}, DocumentID: ${documentId}`));
        if (!userId || typeof userId !== 'string') {
            return new NextResponse({
                success: false,
                msg: "Missing Required",
            }, { status: 400 });
        } 
        if (documentId && typeof documentId !== 'string') {
            return new NextResponse({
                success: false,
                msg: "Missing Required",
            }, { status: 400 });
        }

        // Save content to MongoDB
        await saveContentToMongoDB(userId, documentId);

        // Return a success response
        return new NextResponse({
            success: true,
            msg: "document is shared successfully",
        }, { status: 200 });
    } catch (error) {
        console.error("Error:", error);
        console.log(error.message)
        return new NextResponse({
            success: false,
            msg: "Internal Server Error",
        }, { status: 500 });
    }
};
