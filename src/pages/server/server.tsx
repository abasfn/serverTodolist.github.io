import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addlist, deleteModal, getUser, Item, remove, search } from '../../action';
import { data } from '../../model/statemodel';
import { reduserData } from '../../reduser';
import { ReduserLoading } from '../../reduser/loading';
import { modalDelete } from '../../reduser/modaldelet';
import ModalDelete from '../../component/modal-delete/modaldelete';
import Loader from "react-loader-spinner";
const Server = () => {

    const contaner = useSelector(reduserData);
    const showModal = useSelector(modalDelete);
    const loading = useSelector(ReduserLoading)

    const dispach = useDispatch();

    const [input, setinput] = useState<string>('');
    const [searchinput, setsearchinput] = useState<boolean>(false);

    useEffect(() => {
        dispach(getUser())
    }, []);

    const handelDeletItem = (item: data) => {
        dispach(deleteModal(true))
        dispach(Item(item))
    }

    const onchangeInput = (e: any) => {
        setinput(e.target.value);
    }

    const handleAddList = () => {
        dispach(addlist({ title: input, }))
        setinput('')
    }

    const handleSearchList = () => {
        if (input === '') {
            dispach(getUser())
        }
        if (searchinput === true) {
            dispach(getUser())
            setTimeout(() => dispach(search(input)), 400)
            return
        }
        dispach(search(input))
        setsearchinput(true)
    }

    return (
        <div className='mx-auto p-4 container'>
            <div className='flex justify-center p-4'>
                <input value={input} onChange={onchangeInput} className='w-1/2 p-2 rounded-md shadow-lg' />
                <button onClick={handleAddList} className='ml-3'><img src='images/icons8-add-48.png' /></button>
                <button onClick={handleSearchList} className='ml-3'><img src='images/icons8-search-50.png' /></button>
            </div>
            {loading.loading === true && <div className='flex justify-center'>
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                />
            </div>}

            {loading.data === true && <div className='grid grid-cols-1 md:grid-cols-4 md:gap-4'>
                {contaner.data?.map(item => {
                    return (
                        <div className='bg-white p-5 rounded-md shadow-lg mb-4'>
                            <div className='flex'>
                                <button onClick={() => handelDeletItem(item)}>
                                    <img className='float-right' width='10%' src='images/6717904.png' />
                                </button>
                            </div>
                            <h1>USERID : {item.id}</h1>
                            <h1>{item.title}</h1>
                            <i className="fa-light fa-user"></i>
                        </div>
                    )
                })}
            </div>}
            {showModal.deletmodal === true && <ModalDelete />}
        </div>
    );
};

export default Server;