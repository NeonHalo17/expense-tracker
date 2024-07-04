import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useState , useRef } from 'react';
function AddTransaction(props) {
    
    const [formState, setFormState] = useState({
        id: 0,
        category: "Food",
        description: "",
        user: "Aman",
        date: "2022-01-01",
        amount: 0,
        type: "UPI",
    });

    const [errors, setErrors] = useState("");

    const handleChange = (e, key) => {
        
        setFormState({
            ...formState,
            [key]: e.target.value
        })
    }

    const validateForm = () => {
        if(formState.amount && formState.category && formState.date && formState.type){
            setErrors("");
            return true;
        } else {
            let errorfields=[];
            for(const [key,value] of Object.entries(formState)){
                if(!value && key !== "id" && key !== "description"){
                    errorfields.push(key);
                }
            }
            setErrors(errorfields.join(', '));
            return false;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;
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
                <p className="text-2xl font-semibold text-center">Add Transaction</p>
                <form className="max-w-sm mx-auto w-[24rem]">
                    <div className="mb-5">
                        <label htmlFor="amount" className="block mb-2 text-sm font-medium text-black">Amount</label>
                        <input type="number" value={formState.amount} onChange={(e) => handleChange(e, 'amount')} className="shadow-sm border-[1px] border-black text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="0.00" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="Category" className="block mb-2 text-sm font-medium text-black">Category</label>
                        <select value={formState.category} onChange={(e) => handleChange(e, 'category')} className="shadow-sm border-[1px] border-black text-gray-900 text-sm rounded-lg  block w-full p-2.5" required >
                            <option value="Food">Food</option>
                            <option value="Bills">Bills</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="date" className="block mb-2 text-sm font-medium text-black">Date</label>
                        <input value={formState.date} onChange={(e) => handleChange(e, 'date')} type="date" className="shadow-sm border-[1px] border-black text-gray-900 text-sm rounded-lg  block w-full p-2.5" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="type" className="block mb-2 text-sm font-medium text-black">Type</label>
                        <select value={formState.type} onChange={(e) => handleChange(e, 'type')} className="shadow-sm border-[1px] border-black text-gray-900 text-sm rounded-lg  block w-full p-2.5" required >
                            <option value="UPI">UPI</option>
                            <option value="Net Banking">Net Banking</option>
                            <option value="Credit Card">Credit Card</option>
                            <option value="Debit Card">Debit Card</option>
                            <option value="Cash">Cash</option>
                        </select>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="desc" className="block mb-2 text-sm font-medium text-black">Description</label>
                        <textarea name="description" value={formState.description} onChange={(e) => handleChange(e, 'description')} className="shadow-sm border-[1px] border-black text-gray-900 text-sm rounded-lg  block w-full p-2.5" placeholder="Description" />
                    </div>
                    {errors && <div className='bg-red-200 text-red-600 p-2 rounded-[0.3rem] mb-[1rem]'>{`Please include: ${errors}`}</div>}
                    <button type="submit" onClick={handleSubmit} className="block m-auto text-white bg-black hover:bg-white hover:text-black border-solid border-2 transition duration-300 border-black font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddTransaction;