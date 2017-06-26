const React = require('react');
const Dropzone = require('react-dropzone');
const superagent = require('superagent')

 class PhotoUpload extends React.Component{
    onDrop (files) {
      console.log("onDrop", files);
      superagent.post('http://localhost:3000/api/photoupload')
      .attach('theseNamesMustMatch', files[0])
      .end((err, res) => {
        if (err) console.log(err);
        alert('File uploaded!');
        console.log("res", res);
      })
    }

    render(){
      return (
          <div>
            <Dropzone onDrop={this.onDrop} multiple={false}>
              <div>Try dropping a file here, or click to select a file to upload.</div>
            </Dropzone>
          </div>
      );
    }
};

export default PhotoUpload;
