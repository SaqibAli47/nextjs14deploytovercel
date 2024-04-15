"use server"
import { revalidatePath } from "next/cache"
import { Post, User } from "./models"
import ConnectToDB from "./utils"
import { signIn, signOut } from "./auth"
import bcrypt from "bcryptjs"

interface FormData {
    title: string, 
    desc: string,
    slug: string,
    userId: string
}
export const addPost = async (formData: any) => {
    "use server"
    const {title, desc, slug, userId} = Object.fromEntries(formData)
    try {
        ConnectToDB();
        const newPost = new Post({
            title, desc, slug, userId
        })
        if(newPost){
            await newPost.save();
            console.log("Post saved Successfully!");
            revalidatePath("/blog")
        } else{
            throw new Error("Something Went Wrong!");
        }
    } catch (error) {
        console.log("error: ", error)
        throw new Error("Something Went Wrong! ")
    }
}
export const deletePost = async (formData: any) => {
    "use server"
    const {id} = Object.fromEntries(formData)
    try {
        await ConnectToDB();
        await Post.findByIdAndDelete(id);
        console.log("post deleted Successfully!");
        revalidatePath("/blog");
    } catch (error) {
        console.log("erro: ", error)
    }
}

export const login = async (formData: any) => {
    const {username, password} = Object.fromEntries(formData);
    try {
        // console.log("username: ", username, "password::", password)
       await signIn("credentials", {username, password})
    } catch (error) {
        console.log("error-01: ", error)
        return{error: "Something went wrong!"};
    }
}

export const handleGithubLogin = async () => {
    "use server"
    await signIn("github")
}
export const handleLogout = async () => {
    "use server"
    await signOut()
}

export const addUser = async (formData:any) => {
    const {name, username, email, password, repeatpassword,img} = Object.fromEntries(formData)
    // console.log(name, username, email, password, repeatpassword, img);
    if(password !== repeatpassword) {
        return ("Passwrod does not match")
    } else{
        try {
            await ConnectToDB();
            const user = await User.findOne({username});
            if(user){
                return (
                    "User already Exist"
                )
            } else{
                const salt = await bcrypt.genSalt(10);
                const hashPassword = await bcrypt.hash(password, salt);
                const newUser = new User({
                    username: username,
                    name: name,
                    email: email,
                    password: hashPassword,
                    img: img
                })
                await newUser.save();
                console.log("new-user-saved-successfully!");
                // set to be empty
                formData = {}
            } 
        } catch (error) {
            console.log("error: ", error)
        }
    }
}