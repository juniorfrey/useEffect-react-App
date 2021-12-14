import React, {useState, useEffect, useCallback} from 'react'
import getPost from './helpers/getPost';
import getUser from './helpers/getUser';

/*const initialUser = {
    name : 'Fredys',
    email: 'juniorfrey2990@gmail.com'
}

const initialPost = [
  { id: 1, title: "POST 1" },
  { id: 2, title: "POST 2" },
];*/
    


const FetchCard = () => {
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([])

    useEffect(  () => {
        updateUser();
    }, []);

    useEffect(() => {
      if (user?.id) {
        updatePost();
      }
    }, [user]);

    const updateUser = () => {
        getUser().then( (newUser) => {
            setUser(newUser);
        } )
    }

    const updatePost = useCallback(() => {
        getPost(user.id).then((newPosts) => {
          setPosts(newPosts);
        });
    }, [user.id]);
    

    return (
      <div>
        <h1>Fetch Card</h1>
        <button onClick={updateUser}>Another User </button>
        <hr />
        <h1>User: {user.name}</h1>
        <h1>Email: {user.email}</h1>
        <hr />
        <h2>Post - user: {user.id} </h2>
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
      </div>
    );
}

export default FetchCard
