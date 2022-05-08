import axios from 'axios';
import React, { useEffect, useState, Component } from "react";
import CardNotes from "../components/card/CardNotes";
import CardNotes1 from "../components/card/CardNotes1"
import CkeditorCard from "../components/card/CkeditorCard";
import createImage, { createNotes, deletNote, editNotes } from '../Requests/R_Notes';

const Notes = () => {

    const [edit, SetEdit] = useState(true)
    const [add, setAdd] = useState(false)
    const [editN, setEditN] = useState(false)
    const [descr, setDescr] = useState('')
    const [image, setImage] = useState(null)
    const [notes, setNotes] = useState([])


    const [stand, setStand] = useState(false)
    const [notesC, setNotesC] = useState([{ id: 1000, title: "Стандартный заголовок", descr: "<p>Тут будет описание заметок</p>" }])
    const [title, setTitle] = useState('')
    const [id, setId] = useState('')

    const [reboot, setReboot] = useState(false)

    //открытие/закрытие форм
    function Edit() {
        SetEdit(!edit)
    }
    async function Create() {
        setAdd(true)
        SetEdit(false)
        setEditN(false)
    }

    //запись descr, передается в CardNotes
    const createDescr = (newDescr) => {
        setDescr(newDescr)
    }


    //кнопки открыт/удаления заметки. передается в CardNotes title,descr
    async function Open(id, title, descr, openS) {
        setId(id)
        setTitle(title)
        setDescr(descr)
        console.log(id, title, descr)
        setAdd(true)
        SetEdit(true)
        setEditN(true)
        setStand(openS)
    }
    async function Delet(id) {
        await deletNote(id)
        setReboot(!reboot)
    }


    // Сохранение изображения, вставка изобр в ckeditor
    // async function AddImage() {
    //     console.log(image)
    //     const res = await createImage(image)
    //     setDescr(descr + '<figure class="image ck-widget ck-widget_with-resizer image-style-side image_resized ck-widget_selected" contenteditable="false" style="width:25%;"><img src="' + res + '" sizes="100vw" width="284"/><div class="ck ck-reset_all ck-widget__type-around"><div class="ck ck-widget__type-around__button ck-widget__type-around__button_before" title="Insert paragraph before block"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 8"><path d="M9.055.263v3.972h-6.77M1 4.216l2-2.038m-2 2 2 2.038"></path></svg></div><div class="ck ck-widget__type-around__button ck-widget__type-around__button_after" title="Insert paragraph after block"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 8"><path d="M9.055.263v3.972h-6.77M1 4.216l2-2.038m-2 2 2 2.038"></path></svg></div><div class="ck ck-widget__type-around__fake-caret"></div></div><div class="ck ck-reset_all ck-widget__resizer" style="height:495px;left:0px;top:0px;width:210px;"><div class="ck-widget__resizer__handle ck-widget__resizer__handle-top-left"></div><div class="ck-widget__resizer__handle ck-widget__resizer__handle-top-right"></div><div class="ck-widget__resizer__handle ck-widget__resizer__handle-bottom-right"></div><div class="ck-widget__resizer__handle ck-widget__resizer__handle-bottom-left"></div><div class="ck ck-size-view ck-orientation-bottom-right" style="display: none;">25.63%</div></div></figure>');
    // }

    //создание/изменение заметки
    async function AddNote() {
        await createNotes(title, descr)
        setAdd(false)
        //console.log(title,"=t+d=",descr)
        setReboot(!reboot)
    }
    async function editNotesFun() {
        await editNotes(id, title, descr)
        setAdd(false)
        setReboot(!reboot)
    }
    async function editNotesFunC() {
        setNotesC([{ id: id, title: title, descr: descr }])

        setAdd(false)
        setReboot(!reboot)
    }

    //получение заметок из бд
    async function fetchPosts() {
        const res = await axios.get("http://localhost:8081/api/GetNotes");
        setNotes(res.data);
        // console.log(notes);
    }

    useEffect(() => {
        //console.log("useEffect=", descr);
        fetchPosts()
    }, [reboot])

    return (
        <div className="container-fluid">
            <div class="row">

                <div class="col-3 scroll">

                    <button type="button" class="btn btn-outline-success btn-sm" onClick={Create}>Добавить +</button>
                    {notesC.map(notesC => <CardNotes1 notesC={notesC} open={Open}></CardNotes1>)}
                    {notes.map(notes =>
                        // open={Open} delet={Delet}
                        <CardNotes notes={notes} open={Open} delet={Delet}></CardNotes>)
                    }
                </div>
                {add ?
                    <div class="col-9 scroll">
                        {edit ?
                            <div>
                                <button type="button" class="btn btn-outline-secondary btn-sm" onClick={Edit}>Редактирование</button>
                                <h1>{title}</h1>
                                <div className="Container" dangerouslySetInnerHTML={{ __html: descr }}></div>
                            </div>
                            :
                            <div>
                                <button type="button" class="btn btn-outline-secondary btn-sm" onClick={Edit}>Просмотр</button>
                                <button type="button" class="btn btn-outline-success btn-sm" onClick={AddNote}>Добавить</button>
                                {editN ?
                                    <div>
                                        {stand ?
                                            <button type="button" class="btn btn-outline-success btn-sm" onClick={editNotesFunC} >Внести изм.</button>
                                            :
                                            <button type="button" class="btn btn-outline-success btn-sm" onClick={editNotesFun}>Внести изм.</button>
                                        }
                                    </div>
                                    :
                                    <div></div>
                                }
                                <input type="text" name="title" placeholder="Название" class="form-control title"
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                />
                                <CkeditorCard create={createDescr} descr={descr} ></CkeditorCard>
                                {/* <div class="input-group">
                                    <input type="file" class="form-control" aria-label="Upload"
                                        files={image}
                                        onChange={e => setImage(e.target.files[0])}
                                    />
                                    <button class="btn btn-outline-secondary" type="button" onClick={AddImage} >Добавить изображение</button>
                                </div> */}

                            </div>
                        }
                    </div>
                    : <div></div>}
            </div>

        </div>
    )
}
export default Notes;