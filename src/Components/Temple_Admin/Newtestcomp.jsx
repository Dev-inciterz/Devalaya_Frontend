import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Newtestcomp = () => {

    const [value, setValue] = useState('');


    console.log("the vavsadn kjc evb kj ", value)
  return (
    <div>
        <ReactQuill theme="snow" value={value} onChange={setValue} />
    </div>
  )
}

export default Newtestcomp