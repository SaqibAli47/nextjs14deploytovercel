import { Post } from "@/lib/models";
import ConnectToDB from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request:any, {params}: { params: { slug: string}}) => {
const {slug} = params;
    // console.log("slugData", slug)
    try {
        await ConnectToDB();
        const singlePost = await Post.findOne({slug})
        return NextResponse.json(singlePost)
    } catch (error) {
        console.log("error!!", error)
        return NextResponse.json({error: error},{status: 404})
    }
}
// same with like we can update post delete Post and Patch Post
export const DELETE = async (req:any, {params}: {params: { slug: string}}) => {
    const {slug} = params;
    try {
        await ConnectToDB();
        const isDeleted = await Post.findOneAndDelete({slug: slug})
        if(!isDeleted) {
            return NextResponse.json({success: false, message: "Not Deleted"},{status: 403})
        } return NextResponse.json({success: true, message: "Deleted Successfully"},{status: 200})
    } catch (error) {
        console.log("error: ", error)
        return NextResponse.json({success: false, error: error},{status: 403})
        
    }
}