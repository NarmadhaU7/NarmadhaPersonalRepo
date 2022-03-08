import React from 'react';
import './App.css';

class ImagePreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: this.props.input,
            imageSrc: ''
        };
    }

    componentDidMount()
    {
        console.log('component did mount in ImagePreview');
        console.log(this.props.input);

        this.setState({
            imageSrc: URL.createObjectURL(this.props.input)
        })    
    }

    render()
    {
        return(
            <div>
                <img src={this.state.imageSrc} alt="preview image" className="PreviewImage" 
                style={{ height: '2rem', margin: '10px'}}/>
            </div>
        );
    }
}

export default ImagePreview;