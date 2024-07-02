import {useRef} from 'react';

function Modal({onClose}) {
    const modalRef = useRef();

    const closeModal = (e) => {
        if(modalRef.current === e.target) {
            onClose();
        }
    }

    return (
        <div ref={modalRef} onClick={closeModal} className="fixed inset-0 bg-black bg-opacity-0 backdrop-brightness-50 flex justify-center items-center ">
            <div className='bg-white p-10 border-black border-2 flex flex-col gap-5'>
                <form className="max-w-sm mx-auto w-[24rem]">
                    <div className="mb-5">
                        <label htmlFor="amount" className="block mb-2 text-sm font-medium text-black">Amount</label>
                            <input type="number" className="shadow-sm border-[1px] border-black text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="0.00" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="Category" className="block mb-2 text-sm font-medium text-black">Category</label>
                            <select className="shadow-sm border-[1px] border-black text-gray-900 text-sm rounded-lg  block w-full p-2.5" required >
                                <option value="Food">Food</option>
                                <option value="Bills">Bills</option>
                                <option value="Entertainment">Entertainment</option>
                                <option value="Others">Others</option>
                            </select>
                            </div>
                        <div className="mb-5">
                            <label htmlFor="date" className="block mb-2 text-sm font-medium text-black">Date</label>
                            <input type="date" className="shadow-sm border-[1px] border-black text-gray-900 text-sm rounded-lg  block w-full p-2.5" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="type" className="block mb-2 text-sm font-medium text-black">Type</label>
                            <select className="shadow-sm border-[1px] border-black text-gray-900 text-sm rounded-lg  block w-full p-2.5" required >
                                <option value="UPI">UPI</option>
                                <option value="Net Banking">Net Banking</option>
                                <option value="Credit Card">Credit Card</option>
                                <option value="Debit Card">Debit Card</option>
                                <option value="Cash">Cash</option>
                            </select>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="desc" className="block mb-2 text-sm font-medium text-black">Description</label>
                            <textarea name="description" className="shadow-sm border-[1px] border-black text-gray-900 text-sm rounded-lg  block w-full p-2.5" placeholder="Description" />
                        </div>
                    <button type="submit" onClick={onClose} className="block m-auto text-white bg-black hover:bg-white hover:text-black border-solid border-2 transition duration-300 border-black font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Modal;