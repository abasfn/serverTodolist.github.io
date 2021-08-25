import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editItem, editModal } from '../../action/todolist.action';
import { modalDelete } from '../../reduser/modaldelet';

const ModalEdit = () => {
    const dispach = useDispatch();
    const modal = useSelector(modalDelete);
    const handelCloseModal = () => {
        dispach(editModal(false))
    }
    const [input, setinput] = useState<string>('')
    const onchangeInput = (e: any) => {
        setinput(e.target.value)
    }
    const handelEditItem = () => {
        dispach(editItem(input, modal.itemtodolist[1]));
        dispach(editModal(false))
    }
    return (
        <div>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-2/5 my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                            <h3 className="text-3xl text-blue-500 font-semibold">
                                Edit List
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"

                            >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <input onChange={onchangeInput} defaultValue={modal.itemtodolist[0]} className="my-4 text-blueGray-500 text-lg leading-relaxed w-full p-4 bg-bodyserver rounded-md" />
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                            <button
                                className="focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={handelCloseModal}
                            >
                                <img src='images/Emoticon/icons8-no-entry-64.png' />
                            </button>
                            <button
                                className="focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={handelEditItem}
                            >
                                <img src='images/Emoticon/icons8-checkmark-yes-64.png' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
    );
};

export default ModalEdit;