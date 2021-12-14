const getPost = async (userId) => {
  console.log(userId)
  const urlBase = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
  const res = await fetch(urlBase);
  const posts = await res.json();

  return posts;
};

export default getPost;
