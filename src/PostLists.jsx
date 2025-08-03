import { useEffect } from "react";

const PostList = () => {
    const dispatch = useDispatch();
    const { posts, loading, error} = useSelector((state) => state.posts);
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);
    return(
        <div>
        </div>
    );
};

export default PostList;