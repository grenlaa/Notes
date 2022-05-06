import React, {useState } from "react";
import ClassicEditor  from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
//import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';


export default function CkeditorCard(props) {
    const [data, setData] = useState(null)
   
    const custom_config = {
        toolbar: {
            items: [
                'heading',
                '|',
                'bold',
                'italic',
                'link',
                'bulletedList',
                'numberedList',
                '|',
                'blockQuote',
                'insertTable',
                '|',
                'undo',
                'redo',
                '|',
                'mediaEmbed'
            ]
        },
        table: {
            contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
        },
        mediaEmbed: {previewsInData:true}
    }

    return (
        <div >
            <CKEditor
                editor={ClassicEditor}
                config={custom_config}
                data=""
                onReady={editor => {
                    editor.setData(props.descr)
                    console.log('========', props.descr);
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setData(data);
                    {props.create(data)}
                }}
                onBlur={(event, editor) => {
                }}
                onFocus={(event, editor) => {
                    editor.setData(props.descr)
                }}
            />
            {/* <div className="Container" dangerouslySetInnerHTML={{ __html: data }}></div> */}
        </div>
    );
}
