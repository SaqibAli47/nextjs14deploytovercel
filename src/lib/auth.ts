import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import ConnectToDB from "./utils";
import { User } from "./models";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";
const login = async (credentials:any) => {
  try {
    ConnectToDB();
    const user = await User.findOne({ username: credentials.username });

    if (!user) return{error: "Wrong credentials!"};

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) return {error: "Wrong credentials!"};
    return user;
  } catch (err) {
    console.log(err, "error");
    return {error: "Failed to login!"};
  }
};
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "github") {
        await ConnectToDB();
        try {
          const user = await User.findOne({ email: profile?.email });

          if (!user) {
            const newUser = new User({
              username: profile?.login,
              email: profile?.email,
              image: profile?.avatar_url,
            });

            await newUser.save();
          }
        } catch (err) {
          console.log(err);
          return false;
        }
      }
      return true;
    },
    ...authConfig.callbacks,
  },
});
