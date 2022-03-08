import logo from './logo.svg';
import './App.css';
import {useRef, useState} from 'react';
import React from 'react';

function App() {
  
  
  const [imageList, setImageList] = useState([]);

  const inputFile = useRef(null);

  const onFileSelection = e => {
    console.log('on file selection function called');
    
    const { files } = e.target;
    
    console.log('Files');
    console.log(files);

    for(var i=0; i<files.length; i++)
    {
      console.log('for loop executed');

      var file    = files[i];
      var fileType = files[i].type;
      var reader  = new FileReader();

      if(fileType.split('/')[0] === 'image'){

        /*console.log('To understand');
        console.log(fileType.split('/')[0]);
        console.log(file);
        var imagePreviewArea = document.createElement("div");
        var preview = document.createElement('img', { style: { height: "100px" } });
        preview.src = file.webkitRelativePath;
        imagePreviewArea.appendChild(preview);
        document.getElementById("imagepreviewholder").appendChild(imagePreviewArea);

        console.log(reader);
        console.log(file.webkitRelativePath);*/
        //setImageList([...imageList, files[i]]);
        //imageList.push(files[i]);
        setImageList(imageList => [...imageList, files[i]]);
      }
      else{
        if(fileType.split('/'))

        console.log('other files');
        console.log(fileType);

      }
      console.log('ImageList');
      console.log(imageList);
    }
  }

  const onButtonClick = () =>{
    inputFile.current.click();
  }

  return (
    <div className="TaskMainHolder">
      <h1>File Display</h1>
      <div className="FileDisplayHolder">
        <button onClick={onButtonClick}>Select Files</button>
        <input type="file" id="file" ref={inputFile} webkitdirectory=""
        onChange={onFileSelection} style={{display: 'none'}}/>
        <div className="ImagesPreviewHolder" id="imagepreviewholder" style={{ height: '30px'}}>
        {imageList.map(e =>
          <ul><li></li></ul>
        )}
        </div>
        <div className="TextFilesThumbnailsHolder">

        </div>
      </div>
    </div>
  );
}

export default App;