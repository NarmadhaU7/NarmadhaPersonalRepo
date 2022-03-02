import logo from './logo.svg';
import './App.css';
import {useRef} from 'react';
import React from 'react';

function App() {
  
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
      var reader  = new FileReader();

      var imagePreviewArea = document.createElement("div");
      var preview = document.createElement('img', { style: { height: "20px" } });
      imagePreviewArea.appendChild(preview);
      document.getElementById("imagepreviewholder").appendChild(imagePreviewArea); 
    
      reader.onloadend = function () {
        console.log('inside on loadend');
        console.log(reader.result);
        preview.src = reader.result;
      }
    
      if (file) {
        console.log('if file exist condition');
        console.log(reader.readAsDataURL(file));
        reader.readAsDataURL(file);
      } else {
        preview.src = "";
      }
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
        <div className="ImagePreviewHolder" id="imagepreviewholder">
          
        </div>
      </div>
    </div>
  );
}

export default App;






import logo from './logo.svg';
import './App.css';
import {useRef} from 'react';
import React from 'react';

function App() {
  
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
      var reader  = new FileReader();

      console.log(file);
      var imagePreviewArea = document.createElement("div");
      var preview = document.createElement('img', { style: { height: "100px" } });
      preview.src = file.webkitRelativePath;
      imagePreviewArea.appendChild(preview);
      document.getElementById("imagepreviewholder").appendChild(imagePreviewArea);

      console.log(reader);
      console.log(file.webkitRelativePath);
      //preview.src = file.webkitRelativePath;
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
        <div className="ImagePreviewHolder" id="imagepreviewholder">
          
        </div>
      </div>
    </div>
  );
}

export default App;
















