import userEvent from "@testing-library/user-event";

const getUser = async() => {

    const userId =   Math.floor(Math.random() * 10) + 1;
    console.log(userId);

    const urlBase = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const res = await fetch(urlBase);
    const user = await res.json();

    return user;

}

export default getUser;