import { NextApiRequest, NextApiResponse } from "next";
import { useSession } from 'next-auth/react';
import connect from "../../utils/db";
import User from "../../models/User";
import { NextResponse } from "next/server";
import chalk from "chalk";

export const GET = async (req: NextApiRequest, res: any) => {
    try {
        // Check if the request method is GET
        if (req.method !== "GET") {
            return res.status(405).json({ message: "Method not allowed" });
        }

        // Get the session
        

        // Extract user ID from the session
        const userId = "661974e8ae457efdd3117536"; // Set userId to the specified value
        // console.log(chalk.red(userId));
        // Connect to the MongoDB database
        await connect();
        // console.log(chalk.green("Connected to the database")); // Log message indicating successful connection


        // Find the user by ID and populate the documents field
        // const user = await User.findById(userId).populate("documents").lean();
        const user = await User.findById(userId).populate({ path: 'documents', options: { lean: true } });

        // console.log(chalk.green(user)); // Log message indicating successful connection

        // Check if user exists
        if (!user) {
            return new NextResponse({
                success: false,
                msg: "User not found",
            }, { status: 404 });
        }
        console.log(chalk.red(user.documents));
        console.log(typeof(user.documents))
        const documents = user.documents;
        // .map((document) => document.toObject());

        // console.log(chalk.red(documents)); 
        // documents.forEach((document, index) => {
        //     console.log(`Document ${index + 1}:`);
        //     console.log(`Document ID: ${document._id}`);

        //     // Display other properties as needed
        // }); 

        // console.log(chalk.red("this is document"))
        console.log(typeof(documents))
        console.log(documents)
        // Return the documents associated with the user
        return  NextResponse.json({
            success: true,
            documents,
            msg: "Documents fetched successfully",
        }, { status: 200 });

    } catch (error) {
        console.error(chalk.red("Error:", error));
        return new NextResponse({
            success: false,
            msg: "Internal Server Error",
        }, { status: 500 });
    }
};
