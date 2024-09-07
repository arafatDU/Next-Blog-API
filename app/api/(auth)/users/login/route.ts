import connect from "@/lib/db";
import User from "@/lib/models/user";
import { NextResponse } from "next/server";
import { Types } from "mongoose";

const ObjectId = require("mongoose").Types.ObjectId;

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const { email, password } = body;
    await connect();
    // login user find the user by email and password
    const user = await User.findOne({ email, password });

    if (!user) {
      return new NextResponse(
        JSON.stringify({ message: "User not found" }),
        { status: 404 }
      );
    }

    return new NextResponse(
      JSON.stringify({user}),
      { status: 200 }
    );
    
  } catch (error: any) {
    return new NextResponse("Error in creating user" + error.message, {
      status: 500,
    });
    
  }
}