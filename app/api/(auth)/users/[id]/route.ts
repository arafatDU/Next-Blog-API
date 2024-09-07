import { NextResponse } from "next/server";
import connect from "@/lib/db";
import { Types } from "mongoose";
import User from "@/lib/models/user";

export const GET = async (request: Request, context: { params: any }) => {
  try {
    const userId = context.params.id;
    //console.log(context.params);
    if (!userId || !Types.ObjectId.isValid(userId)) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid or missing userId" }),
        { status: 400 }
      );
    }

    await connect();

    const user = await User.findById(userId);
    if (!user) {
      return new NextResponse(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify(user), {
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse("Error in fetching a user" + error.message, {
      status: 500,
    });
  }
};
