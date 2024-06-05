import db from "@repo/db/client";
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";

export const authOptions = {
    providers: [
      CredentialsProvider({
          name: 'Credentials',
          credentials: {
            tagname: { label: "username", type: "text", placeholder: "@sourabh" },
            password: { label: "Password", type: "password" }
          },
          // TODO: User credentials type from next-aut
          async authorize(credentials: any) {

            console.log("hello")
            // Do zod validation, OTP validation here
            // const hashedPassword = await bcrypt.hash(credentials.password, 10);
            // const existingUser = await db.user.findFirst({
            //     where: {
            //         tagname: credentials.tagname
            //     }
            // });

            // if (existingUser) {
            //     const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password);
            //     if (passwordValidation) {
            //         return {
            //             id: existingUser.id.toString(),
            //             tagname: existingUser.name
            //         }
            //     }
            //     return null;
            // }

            // try {
            //     console.log("reached")
            //     const user = await db.user.create({
            //         data: {
            //             tagname: credentials.tagname,
            //             password: hashedPassword
            //         }
            //     });
            
                // return {
                //     id: user.id.toString(),
                //     tagname: user.tagname,
                
                // }
            } catch(e) {
                console.error(e);
            }

            return null
          },
        })
    ],
    secret: process.env.JWT_SECRET || "secret",
    callbacks: {
        // TODO: can u fix the type here? Using any is bad
        // async session({ token, session }: any) {
        //     session.user.id = token.sub

        //     return session
        // }
    }
  }
 