import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import { setUploadPhoto } from '../actions';

class PhotoUpload extends Component{
	constructor() {
    super()
    this.state = { files: [] }
  }

	onDrop = (files) => {
		this.setState({ files });
		this.props.setUploadPhoto(files);
	}

	render(){
		const { style, values } = this.props;
		const filename = this.props.uploadPhoto[0];
		const styles = {
			main: {
				margin: '0px auto',
        width: 200,
        height: 50,
        paddingTop: 12,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderStyle: 'solid',
        borderRadius: 2
      },
      active: {
        borderStyle: 'solid',
        borderColor: '#6c6',
        backgroundColor: '#eee'
      },
		   reject: {
        borderStyle: 'solid',
        borderColor: '#c66',
        backgroundColor: '#eee'
      },
      uploadPhoto: {
    		margin: '5px auto',
				textAlign: 'center'
      }
		};

		return (
			<div>
				<Dropzone
					accept="image/jpeg, image/png, image/gif"
					onDrop={this.onDrop}
					multiple={false}
					style = {styles.main}
		      activeStyle = {styles.active}
		      rejectStyle = {styles.reject}>
					<div>Add photo (click or drag).</div>
				</Dropzone>
				<div style={styles.uploadPhoto}>Selected photo: {this.state.files.map(f => <div key={f.name}>{f.name}</div>)}
				</div>
			</div>
		);
	}
};

function mapStateToProps({values, uploadPhoto}) {
	return { values, uploadPhoto};
}

export default connect(mapStateToProps, {setUploadPhoto})(PhotoUpload);
