import React, { Fragment, useState, useEffect } from 'react';
import ReactQuill from 'react-quill'; //ES6
import 'react-quill/dist/quill.snow.css'; //ES6
import '../../../styles/notes.scss'
function Editor(props) {
  const [currentContent, setCurrentContent] = useState('')
  const [timer, setTimer] = useState(null)

  useEffect(() => {
    setCurrentContent(props.note.body)
  }, [props.note])

  const updateNote = (content) => {
    const title = content.replace(/(<([^>]+)>)/ig, "").slice(0, 30)
    props.updateNote(props.note, { 'title': title, 'body': content })
  }

  const handleChange = (content, delta, source) => {
    clearTimeout(timer)
    if (source === 'user') {
      setCurrentContent(content);
      setTimer(setTimeout(() => updateNote(content), 2000))
    }
  }



  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ],

  }
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]
  return (
    <Fragment>
      <ReactQuill value={currentContent} modules={modules} formats={formats} onChange={handleChange} />
    </Fragment>
  )
}
export default Editor;