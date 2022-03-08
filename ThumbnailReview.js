import React from 'react';
import pdfThumnail from './pdf.png';
import textThumbnail from './txt.png';
import './App.css';
import { Col } from 'react-bootstrap';

class ThumbnailReview extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        file: this.props.input,
        thumbNailInfo: ''
      };
    }

    componentDidMount()
    {
        const fileType = this.props.input.type;

        if(fileType.split('/')[1] === 'pdf'){
            this.setState({ thumbNailInfo : pdfThumnail });
        }
        else{
            this.setState({ thumbNailInfo : textThumbnail });
        }
    }

    render()
    {
        console.log('thumbnail called');
        return(
            <div>
                <div className="row">
                    <img src={this.state.thumbNailInfo} className="PreviewImage" alt="thumbnailforpdf"
                    style={{ height: '2rem'}}/>
                </div>
                <div className="row">
                    <span>{this.state.file.name}</span>
                </div>
            </div>
        );
    }
}

export default ThumbnailReview;