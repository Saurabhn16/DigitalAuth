// pages/api/saveContent.ts

import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import connect from "../../utils/db"; // Assuming your DB connection utility
import User from "../../models/User"; // Import User model
import Document from "../../models/Document";

const saveContentToMongoDB = async (userId: string, documentId: string, content: string) => {
  try {
    console.log("it also working")
    await connect(); // Connect to the MongoDB database

    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    // // Create a new document object
    const newDocument = new Document({
      documentId,
      versions: [{ content }],
    });

    // Save the new document
    const savedDocument = await newDocument.save();
    user.documents.push(savedDocument._id);
    // // Save the updated user document
    await user.save();

    console.log("Content saved successfully to MongoDB");
  } catch (error) {
    console.error("Error saving content to MongoDB:", error);
    // throw new Error("Internal server error");
    console.log(error.message)
  }
};

export const PUT =  async (req: any, res: NextApiResponse) => {
  try {

    // Check if the request method is POST
    if (req.method !== "PUT") {
      return res.status(405).json({ message: "Method not allowed" });
    }

    // Parse the request body to extract data
    const { userId, documentId, content } = await req.json();
    console.log(userId, " ", documentId, " ", content )
    if (!userId || !documentId || !content) {
      return new NextResponse({
        success: false,
        msg: "Missing Required",
      }, { status: 400});
    }

    // Save content to MongoDB
    await saveContentToMongoDB(userId, documentId, content);

    // Return a success response
    return new NextResponse({
      success: true,
      msg: "User is registered",
    }, { status: 200});
  } catch (error) {
    console.error("Error:", error);
    console.log(error.message)
    return new NextResponse({
      success: false,
      msg: "Internal Server Error",
    }, { status: 500});
  }
};
