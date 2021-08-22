import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Item } from '../../action';
import { addlist, editModal, ItemToDoList, onchangechekboxs, removelist } from '../../action/todolist.action';
import ModalEdit from '../../component/modaledit/modal.edit';
import { ToDolistType } from '../../model/todolistmodel';
import { modalDelete } from '../../reduser/modaldelet';
import { handelTodoList } from '../../reduser/todolist';

const ToDoList = () => {
    const contaner = useSelector(handelTodoList);
    const modal = useSelector(modalDelete);
    const dispach = useDispatch();
    const [onchange, setonchange] = useState<string>('')
    const onchangeInput = (e: any) => {
        setonchange(e.target.value);
    }
    const handelAddButton = () => {
        const inishialState = { title: onchange, complete: false }
        dispach(addlist(inishialState));
    }
    const handeRemoveList = (item: ToDolistType) => {
        dispach(removelist(item))
    }
    const handelClickCheckbox = (index: number) => {
        dispach(onchangechekboxs(index))
    }
    const handeEditList = (item: ToDolistType, index: number) => {
        dispach(ItemToDoList(item.title, index))
        dispach(editModal(true));
    }
    return (
        <>
            <div className='mx-auto p-4 container'>
                <div className='grid grid-cols-5 m-auto w-4/5 mb-8'>
                    <input onChange={onchangeInput} className='w-full p-4 rounded-md col-span-4 shadow-lg' />
                    <div>
                        <button onClick={handelAddButton} className='ml-3'><img src='images/icons8-add-48.PNG' /></button>
                    </div>
                </div>
            </div>
            {modal.editmodal === true && <ModalEdit />}
            <div className='mx-auto p-4 container'>
                {contaner.map((item, index) => {
                    return (
                        <div className='grid grid-cols-5 m-auto w-4/5 mb-4'>
                            <div className='bg-white flex w-full col-span-4 rounded-md shadow-lg p-4 bg-white'>
                                <input checked={item.complete} onChange={() => handelClickCheckbox(index)} type="checkbox" className='mt-1.5' />
                                {item.complete === false ? <h1 className='ml-3'>{item.title}</h1> : <h1 className='ml-3'><del> {item.title}</del></h1>}
                            </div>
                            <div>
                                <button onClick={() => handeRemoveList(item)} className='ml-3 w-12'><img src='images/icons8-delete-128.PNG' /></button>
                                <button onClick={() => handeEditList(item, index)} className='ml-3 w-12'><img src='images/icons8-edit-property-80.PNG' /></button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default ToDoList;