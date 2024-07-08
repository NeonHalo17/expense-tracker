import 'reactjs-popup/dist/index.css';
import { useState , useRef } from 'react';

function EditProfile(props) {

    const [formState, setFormState] = useState(props.defaultValue);

    const handleChange = (e, key) => {
        
        setFormState({
            ...formState,
            [key]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(formState);
        props.onClose();
    }

    const modalRef = useRef();

    const closeModal = (e) => {
        if(modalRef.current === e.target) {
            props.onClose();
        }
    }

    return (
        <div ref={modalRef} onClick={closeModal} className="fixed inset-0 bg-black bg-opacity-0 backdrop-brightness-50 flex justify-center items-center ">
            <div className='bg-white p-10 border-black border-2 flex flex-col gap-5'>
                <p className="text-2xl font-semibold text-center">Edit Profile</p>
                <form className="max-w-sm mx-auto w-[24rem]">
                    <div className="mb-5">
                        <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-black">First Name</label>
                        <input type="text" value={formState.firstName} onChange={(e) => handleChange(e, 'firstName')} className="shadow-sm border-[1px] border-black text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="First Name"/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-black">Last Name</label>
                        <input type="email" value={formState.lastName} onChange={(e) => handleChange(e, 'lastName')} className="shadow-sm border-[1px] border-black text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Last Name"/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">Email</label>
                        <input type="text" value={formState.email} onChange={(e) => handleChange(e, 'email')} className="shadow-sm border-[1px] border-black text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="example@abc.com"/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="number" className="block mb-2 text-sm font-medium text-black">Phone Number</label>
                        <input type="tel" value={formState.number} onChange={(e) => handleChange(e, 'number')} className="shadow-sm border-[1px] border-black text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="example@abc.com"/>
                    </div>
                    <button type="submit" onClick={handleSubmit} className="block m-auto text-white bg-black hover:bg-white hover:text-black border-solid border-2 transition duration-300 border-black font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default EditProfile;