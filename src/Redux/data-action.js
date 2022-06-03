import { useEffect, useState } from "react";

const useLoggedInUser = () => {
    const [data, setData] = useState();

    useEffect(() => {

        setTimeout(() => {
            fetch("https://react-http-fdabc-default-rtdb.asia-southeast1.firebasedatabase.app/users.json")
                .then(res => res.json()).then(data => setData(data));
        }, 1000);

    }, []);

    console.log(data)
    const allUsers = [];
    for (const key in data) {
        const obj = {
            id: key,
            ...data[key],
        }
        allUsers.push(obj);
    }

    return allUsers;
}

export default useLoggedInUser;