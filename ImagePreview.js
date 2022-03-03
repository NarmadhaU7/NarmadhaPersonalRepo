import React from 'react';

class ImagePreview extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        image: ''
      };
    }

    componentDidMount()
    {
        this.setState({
            image: URL.createObjectURL(this.props.input)
        })    
    }

    render()
    {
        return(
            <div>
                <img src={this.state.image} alt="preview image" style={{ height: '30px'}}/>
            </div>
        );
    }
}

export default ImagePreview;