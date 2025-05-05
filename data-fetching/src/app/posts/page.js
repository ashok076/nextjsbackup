import FetchPost from "./components/FetchPost";
import FetchPostsUsingSWR from "./components/PostsClientUsingSWR";

export default function PostPage() {
    return <>
        {/* <FetchPost/> */}
        <FetchPostsUsingSWR />
    </>
}