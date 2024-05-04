import { NextApiRequest, NextApiResponse } from "next";
import connect from "../../utils/db"; // Assuming your DB connection utility
import Document from "../../models/Document";
import { NextResponse } from "next/server";
import chalk from "chalk";
export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Check if the request method is GET
    if (req.method !== "GET") {
      return res.status(405).json({ message: "Method not allowed" });
    }
    // Parse the documentId from query parameters
    const _id = "661e6340b32a227bb6733f8d";

    // Validate _id
    if (!_id) {
      return new NextResponse({
        success: false,
        msg: "User not found",
      }, { status: 404 });
    }

    // Connect to MongoDB
    await connect();
    console.log(chalk.red("connetced"));
    // Find the document by _id
    console.log("Document ID:", _id);
    const document = await Document.findOne({ _id });
    console.log("Retrieved Document:", document.versions);

    // Check if the document exists
    if (!document) {
      return new NextResponse({
        success: false,
        msg: "User not found",
      }, { status: 404 });
    } 
    
    // Return the documents associated with the user
    return NextResponse.json({
      success: true,
      versions: document.versions,
      msg: "Documents fetched successfully",
    }, { status: 200 });
  }

  catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ success: false, msg: "Internal Server Error" });
  }
};
