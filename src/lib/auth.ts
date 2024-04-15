import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import ConnectToDB from "./utils";
import { User } from "./models";
import bcrypt from "bcryptjs"
const login = async (credentials:any) => {
  try {
    await ConnectToDB();
    const user = await User.findOne({username: credentials.username});
    if(!user){
      return ("user does not exist!")
    } else{
      const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)
      if(!isPasswordCorrect){
        throw new Error("Wrong Password!")
      } else{
        console.log("user88:", user)
        return user;
      }
    }
  } catch (error) {
    console.log("error", error)
    throw new Error("Something went wrong!");
  }
}
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials){
        // console.log("credentials888:", credentials)
        try {
          const user = await login(credentials)
          // console.log("user777:", user)
          return user;
        } catch (error) {
          console.log("error ", error)
          // throw new Error("Something Went Wrong!");
          return null;
        }
      }
    })
  ],
  callbacks: {
    async signIn({user, account, profile}) {
      // console.log("params99: ", params)
      // console.log(user, account, profile)
      // console.log("email88: ", profile?.email)
      if(account?.provider === 'github'){
        await ConnectToDB();
        try {
          const user = await User.findOne({email: profile?.email});
          if(!user){
            const newUser = new User({
              username: profile?.login,
              name: profile?.name,
              email: profile?.email,
              img: profile?.avatar_url
            })
            await newUser.save();
            console.log("user-saved-successfully!");
          } return true;
        } catch (error) {
          console.log("error!", error)
          return false;
        }
      }
      return false; 
    }
  }
});
