import React from 'react';
import ThumbnailReview from './ThumbnailReview';
import ImagePreview from './ImagePreview';
import './App.css';
import {Container} from "react-bootstrap";

let Thumbnail = [];
let ImagePreviewList = [];

class FileSelector extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
          selectedFolder: [],
          imageFilePreviewList: [],
          textFileThumbnailList: [],
          isUpload: 'false',
          searchInput: '',
          searchFlag: 'false',
          slideRangeValue: '',
          rangeSliderFlag: true,
          thumbnailSizeChangeFlag: false,
          
        };

        this.onFileSearchInput = this.onFileSearchInput.bind(this);
    }

    onFileSelection = e => 
    {
        if(this.state.isUpload === 'false')
        {
            this.setState({ isUpload: 'true',
             rangeSliderFlag: false
            });
        }
        else
        {
            this.setState({ isUpload: 'false'})
        }
        
        this.state.selectedFolder = e.target.files;
        this.displaySelectedFilesInfo();
    }

    onThumbnailSizeChange = e =>
    {
       this.setState({ slideRangeValue: e.target.value,
            thumbnailSizeChangeFlag: true
        });
    }

    resizeThumbnail() 
    {
        console.log("resizeThumbnail");
        console.log(this.state.slideRangeValue);

        var imageElements = document.getElementsByClassName("PreviewImage");
        
        for(var i = 0; i < imageElements.length; i++) 
        {
            console.log(imageElements[i]);
            imageElements[i].style.height = 0.05*(this.state.slideRangeValue / 1)+'rem';
        }
    }

    onFileSearchInput(e)
    {
        console.log(e.target.value);
        var val = e.target.value.toString();
        
        this.setState({ searchFlag: 'true' });
       
        console.log(this.state.searchInput);
        this.setState(
            { searchInput: val},
            this.displaySelectedFilesInfo // callback
        );
    }

    displaySelectedFilesInfo = () => 
    {
        console.log(this.state.searchInput);
        var selectedFileList = [];

        if(this.state.isUpload) 
        {
            if(this.state.searchFlag)
            {
                Thumbnail = [];
                ImagePreviewList = [];

                for(var i=0; i<this.state.selectedFolder.length; i++)
                {
                    var searchString = this.state.searchInput;
                    var fileName = this.state.selectedFolder[i].name;

                    console.log(searchString);

                    if(fileName.includes(searchString)){
                        selectedFileList.push(this.state.selectedFolder[i]);
                    }
                }
            }
            else
            {
                selectedFileList = this.state.selectedFolder;
            }

            console.log(selectedFileList);

            for(var i=0; i<selectedFileList.length; i++)
            {   
                var file = selectedFileList[i];
                var fileType = selectedFileList[i].type;
            
                if(fileType.split('/')[0] === 'image')
                {
                    console.log("Image files selected");
                    console.log(file);

                    ImagePreviewList.push(<ImagePreview input={file}/>);
                }
                else{
                    Thumbnail.push(<ThumbnailReview input={file}/>);
                }
            }
        }
    }

    render()
    {
        if(this.state.thumbnailSizeChangeFlag)
        {
            this.resizeThumbnail();
        }



        return(
            <div className="TaskMainHolder">
                <div><h1 className="text-center">File Display</h1></div>
                <div className="TaskDetailHolder">
                    <div className="FolderSelectionArea" style={{ margin: '10px'}}>
                        <input type="file" id="file" webkitdirectory=""
                        onChange={this.onFileSelection}/>
                    </div>
                    <div className="SearchInputArea">
                        <label htmlFor="FileSearch">Search Files  </label>
                        <input type="text" id="FileSearch" onChange={this.onFileSearchInput}/>
                    </div>
                    <div className="ThumbnailRangeSlider" style={{ margin: '20px'}}>
                        <label htmlFor="thumbnailRange" class="form-label">Thumbnail Size</label>
                        <input type="range" class="form-range" id="thumbnailRange" 
                        onChange={this.onThumbnailSizeChange}  disabled={this.state.rangeSliderFlag}/>
                    </div>
                </div>
                <div className="FileIconDisplayHolder">
                    <Container>
                        <div className="grid-container ImagesPreviewHolder" id="imagepreviewholder">
                            {ImagePreviewList}
                        </div>
                        <div className="grid-container TextFilesThumbnailsHolder">
                            {Thumbnail}
                        </div>
                    </Container>
                </div>
            </div>
        );
    }
}

export default FileSelector;