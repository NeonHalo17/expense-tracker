import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [action,setAction] = useState("login");

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let jwtToken;

    async function generateToken(username, password) {
        try {
            const data = {
                "username": username,
                "password": password
            };
            const response = await fetch('http://localhost:8000/auth/generateToken', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify(data),
            });
            JSON.stringify(response);
            const result = await response.json();
            jwtToken=result["jwt"];
            return jwtToken;
        } catch(err) {
            console.error(`Error: ${err}`);
        }
    }
    let token = generateToken(username,password);
    
    async function validateToken(jwt) {
        try {
            const response = await fetch(`http://localhost:8000/auth/validate`, {
                method: 'GET',
                mode: 'cors',
                headers : {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${jwt}`
                },
            });
            const result = await response.json();
            return result;
        } catch (err){
            console.error(`Error: ${err}`);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(action === "login"){
            token.then(result => {
                let res = result
                let valid = validateToken(result);
                valid.then(result => {
                    if(result) navigate("/dashboard", { state: { res }});
                    else alert("Invalid Credentials");
                })
            });
        }
    }
  const handleSlideChange = (event) => {
    setAction(event.target.id);
  };

    return (
        <div className="fixed inset-0 flex justify-center items-center">
            <div className="bg-white p-10 border-black border-[0.75px] flex flex-col gap-5 rounded-lg shadow-md">
                <div>
                    <div className="relative flex h-12 w-full overflow-hidden my-8 mb-2 justify-between border border-lightgrey left-0 z-0 rounded-xl">
                        <input className="hidden peer/signup" type="radio" name="slide" id="login" checked={action==="login"} onChange={(e) => handleSlideChange(e)}/>
                        <input className="hidden peer/login" type="radio" name="slide" id="signup" checked={action==="signup"} onChange={(e) => handleSlideChange(e)}/>
                        <label htmlFor="login" className="mx-auto mt-[6px] text-xl font-semibold slide login cursor-pointer z-10 ">Login</label>
                        <label htmlFor="signup" className="mx-auto mt-[6px] text-xl font-semibold slide signup cursor-pointer z-10 ">Signup</label>
                        <div className="slider-tab absolute h-full w-1/2 left-0 z-0 rounded-xl gradient-bg transition-all duration-50 ease-custom"></div>
                    </div>
                    {action === "login" && <form action="#" className="peer-checked/login:block max-w-sm mx-auto w-[24rem] h-auto">
                        <pre></pre>
                        <div className="mb-5">
                            <label htmlFor="username" className="block mb-2 text-sm font-medium text-black">Username</label>
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="shadow-sm border-[1px] border-black text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">Password</label>
                            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="shadow-sm border-[1px] border-black text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                        </div>
                        <button onClick={(e) => handleSubmit(e)} className="block m-auto text-white bg-black hover:bg-white hover:text-black border-solid border-2 transition duration-300 border-black font-medium rounded-lg text-sm px-5 py-2.5 text-center">Log In</button>
                    </form>}
                    {action === "signup" && <form action="#" className="peer-checked/signup:block max-w-sm mx-auto w-[24rem]">
                        <div className="mb-5">
                            <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-black">First Name</label>
                            <input type="text" className="shadow-sm border-[1px] border-black text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-black">Last Name</label>
                            <input type="text" className="shadow-sm border-[1px] border-black text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">Email</label>
                            <input type="email" className="shadow-sm border-[1px] border-black text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="username" className="block mb-2 text-sm font-medium text-black">Username</label>
                            <input type="text" className="shadow-sm border-[1px] border-black text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">Set Password</label>
                            <input type="text" className="shadow-sm border-[1px] border-black text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                        </div>
                        <button onClick={handleSubmit} className="block m-auto text-white bg-black hover:bg-white hover:text-black border-solid border-2 transition duration-300 border-black font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign Up</button>
                    </form>}
                </div>
            </div>
        </div>
    )
}

export default Login;