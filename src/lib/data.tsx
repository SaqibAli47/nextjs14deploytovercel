
/** const posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
      {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
      },
      {
        "userId": 1,
        "id": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
      },
]
const users = [
    {
        "id": 1,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
          "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
          }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
          "name": "Deckow-Crist",
          "catchPhrase": "Proactive didactic contingency",
          "bs": "synergize scalable supply-chains"
        }
    },
    {
      "id": 2,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },
    {
      "id": 3,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        }
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
      }
    },
    {
      "id": 4,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
          "lat": "-31.8129",
          "lng": "62.5342"
        }
      },
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
      }
    },
]
**/
import { Post, User } from "./models";
import ConnectToDB from "./utils";
export const getPosts = async () => {
    try{
      await ConnectToDB();
      const posts = await Post.find();
      if(!posts){
        throw new Error("Failed To Fetch Data");
      } return posts
    } catch(err){
      console.log("error", err);
      throw new Error("failed to fetch posts")
    }
}
export const getSinglePostWithId = async (id:number) => {
    try {
      await ConnectToDB()
      const singlePost = await Post.findById(id).exec();
      if(!singlePost) {
      throw new Error("failed to fetch single Post")
      } return singlePost
    } catch(err){
      console.log("Error", err);
      throw new Error("Failed to fetch Single Post");
    }
}
export const getSinglePostWithSlug = async (slug: string) => {
  // console.log("slugg: ", slug)
  try {
    await ConnectToDB()
    const singlePost = await Post.findOne({slug});
    if(!singlePost) {
    throw new Error("failed to fetch single Post With Slug")
    } return singlePost
  } catch(err){
    console.log("Error", err);
    throw new Error("Failed to fetch Single Post Slug");
  }
}
// get User Routes
export const getUsers = async () => {
    try{
      await ConnectToDB();
      const users = await User.find();
      if(!users) {
        throw new Error("failed to fetch Users!");
      }
      return users;
    } catch(err){
      console.log("error:", err);
      throw new Error("failed to fetch users!");
    }
}
// get Single User
export const getSingleUserWithUserId = async (id: number) => {
  // console.log("id77:", id);
  try {
    await ConnectToDB();
    // const singleUser =  await User.findById(id);
    const singleUser = await User.findOne({id : id})
    // console.log("singleUserData::", singleUser)
    if(!singleUser) {
      throw new Error("User not Found");
    } return singleUser
  } catch(err) {
    console.log("error: ", err);
    throw new Error("Failed to fetch Single User Data");
  }
}