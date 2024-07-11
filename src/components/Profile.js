import { useState } from "react";
import EditProfile from "./EditProfile";
import { useLocation } from "react-router-dom";

function Profile () {

    const location = useLocation();
    const { res } = location.state || {};

    async function selfDetails() {
        try {
            const response = await fetch(`http://localhost:8000/auth/selfDetails`, {
                method: 'GET',
                mode: 'cors',
                headers : {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${res}`
                },
            });
            const result = await response.json();
            return result;
        } catch (err){
            console.error(`Error: ${err}`);
        }
    }

    // selfDetails().then(result => {
    //     const [first, last] = result["name"].split(" ");
    //     setFirstName(first);
    //     setLastName(last);
    //     setEmail(result["email"]);
    //     setUsername(result["username"]);
    // });

    const data = [
        {
            firstname: "Aman",
            lastname: "Prasad",
            username: "amanp",
            email: "aman@abc.com",
        }
    ]

    const [editing, setEditing] = useState(false);
    const [firstName, setFirstName] = useState(data[0].firstname);
    const [lastName, setLastName] = useState(data[0].lastname);
    const [username, setUsername] = useState(data[0].username)
    const [email, setEmail] = useState(data[0].email);

    // const handleChange = () => {
    //     setFirstName(e.target.value);
    //     setLastName(e.target.value);
    // }

    const handleEditProfile = () => {
        setEditing(true);
    }

    const handleEdited = (newData) => {
        setFirstName(newData.firstName); 
        setLastName(newData.lastName); 
        setEmail(newData.email);
        setUsername(newData.username);
    }

    const handleLogOut = () => {
        window.location.href = '/';
    }

    return (
        <>
            <button onClick={handleLogOut} className="m-5 mt-[63px] ml-[910px] border-black border-2 p-2 px-6 rounded-xl bg-black text-white hover:bg-white hover:text-black transition duration-300">Logout</button>
            <button onClick={handleEditProfile} className="m-5 mt-[63px] ml-[10px] border-black border-2 p-2 px-6 rounded-xl bg-black text-white hover:bg-white hover:text-black transition duration-300">Edit</button>
            {editing && <EditProfile onSubmit={handleEdited} onClose={() => setEditing(false)} defaultValue={{firstName, lastName, email, username}}/>}
            <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg mt-[7px] ml-[450px]">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        User Profile
                    </h3>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Username
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {username}
                        </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Full name
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {firstName} {lastName}
                        </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Email address
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {email}
                        </dd>
                    </div>
                    </dl>
                </div>
            </div>
        </>
    )
}

export default Profile;