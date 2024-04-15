import { Post } from "@/lib/models";
import ConnectToDB from "@/lib/utils"
import { NextResponse } from "next/server";
export const GET = async (request:any) => {
    try {
        await ConnectToDB();
        const posts = await Post.find();
        return NextResponse.json(posts)
    } catch (error) {
        console.log("Something went Wrong!");
        return NextResponse.json({message: "Not Found"}, {status: 404})
    }
}