import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import superagent from 'superagent';
import { connect } from 'react-redux';
import { setUploadPhoto } from '../actions';

class PhotoUpload extends Component{

	onDrop = (files) => {

		// console.log("onDrop", files);
		this.props.setUploadPhoto(files);

		// superagent.post('http://localhost:3000/api/photoupload')
		// .attach('theseNamesMustMatch', files[0])
		// .end((err, res) => {
		//   if (err) console.log(err);
		//   alert('File uploaded!');
		//   console.log("res", res);
		// })
	}

	render(){
		const filename = this.props.uploadPhoto[0];
		// console.log("file name", filename);
		return (
			<div>
				<Dropzone onDrop={this.onDrop} multiple={false}>
					<div>Click here or drag photo to upload with your post.</div>
				</Dropzone>
				<div>Selected photo:
				</div>
			</div>
		);
	}
};

function mapStateToProps({values, uploadPhoto}) {
	return { values, uploadPhoto};
}

export default connect(mapStateToProps, {setUploadPhoto})(PhotoUpload);
