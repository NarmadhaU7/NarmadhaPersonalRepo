import React from 'react';
import ImagePreview from './ImagePreview';
import ThumbnailReview from './ThumbnailReview';

class FileSelector extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
          selectedFolder: [],
          imageFilePreviewList: [],
          textFileThumbnailList: [],
          isUpload: 'false'
        };
    }

    onFileSelection = e => {

        this.setState({ isUpLoad: true});
        console.log(e.target.files);
        this.state.selectedFolder = e.target.files;
    }

    render()
    {
        let Thumbnail = [];

        if(this.state.isUpload) 
        {
            const folderSelected = this.state.selectedFolder;
            for(var i=0; i<folderSelected.length; i++)
            {
                console.log('for loop executed');
                console.log(this.state.selectedFolder);
                console.log(folderSelected[i]);

                var file    = folderSelected[i];
                var fileType = folderSelected[i].type;
            
                if(fileType.split('/')[0] === 'image'){
                }
                else
                    Thumbnail.push(<ThumbnailReview input={file}/>);
                }
        }

        return(
            <div className="TaskMainHolder">
                <h1>File Display</h1>
                <div className="FileDisplayHolder">
                    <input type="file" id="file" webkitdirectory=""
                    onChange={this.onFileSelection}/>
                    <div className="row">
                        <div className="ImagesPreviewHolder" id="imagepreviewholder" style={{ height: '30px'}}>
                            {this.state.imageFilePreviewList}
                        </div>
                        <div className="TextFilesThumbnailsHolder">
                            {Thumbnail}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FileSelector;