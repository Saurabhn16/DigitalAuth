import { NextApiRequest, NextApiResponse } from "next";
import connect from "../../utils/db";
import User from "../../models/User";
import { NextResponse } from "next/server";
import chalk from "chalk";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        console.log(chalk.red("Users"));
        // Check if the request method is GET
        if (req.method !== "GET") {
            return res.status(405).json({ message: "Method not allowed" });
        }
        console.log(req.body);
        // Connect to the MongoDB database
        await connect();

        // Find all users
        const users = await User.find();
        console.log(users);
        // Check if users exist
        if (!users || users.length === 0) {
            return new NextResponse({
                success: false,
                msg: "No users found",
            }, { status: 404 });
        }

        // Return the users
        return NextResponse.json({
            success: true,
            users,
            msg: "Users fetched successfully",
        }, { status: 200 });

    } catch (error) {
        console.error(chalk.red("Error:", error));
        return new NextResponse({
            success: false,
            msg: "Internal Server Error",
        }, { status: 500 });
    }
};
