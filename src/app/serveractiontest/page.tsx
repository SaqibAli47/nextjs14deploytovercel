// import { addPost, deletePost } from "@/lib/action";
const serverActionTestPage = () => {
    // we can create the server action into here
    // const inlineSeverComponent = async () => {
    //     "use server"
    //     console.log("it works");
    // }
  return (
    <div>
        <form action={() => console.log("submit")}>
            <input type="text" placeholder="Enter Title Here" name="title" />
            <input type="text" placeholder="Enter Description Here" name="desc" />
            <input type="text" placeholder="Enter Slug Here" name="slug" />
            <input type="text" placeholder="Enter User Id" name="userId" />
            <button type="submit">Add Post</button>
        </form>
        <div>
            <form action={() => console.log("delete-test")}>
                <input type="text" placeholder="Enter Post id here" name="id"/>
                <button>Delete Post</button>
            </form>
        </div>
    </div>
  );
};
export default serverActionTestPage
