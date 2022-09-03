import React, { Component } from 'react'
import axios from 'axios'
//  import UploadFrom from './UploadFrom'
import { Button, ModalBody, ModalFooter } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import './UploadFrom.css';
import loading from './images/loading.gif'
import success from './images/success.gif'


export class App extends Component {
  constructor(){
    super();
    this.state = {
      show:false,
      file:" ",
      title:" ",
      uploaded:" ",
      divImg:' ',
    }
  }
 
  handleModal=(event)=>{
    this.setState({show:true})
    this.setState({file:event.target.files[0]})
  }

  onTitle=(event)=>{
    this.setState({ title: event.target.value });
  }

  Onsubmit=(event)=>{
    

    // Create an object of formData
		const formData = new FormData();
		
		// Update the formData object
		formData.append(
			"file",
			this.state.file,
			this.state.file.name,
		);
		formData.append(
			"title",
			this.state.title,

		);
		
		const config={
			headers: {
			  "Content-Type": "multipart/form-data",
			},
		  }
		const progressStatus={
			onUploadProgress:(data)=>{
				// console.log(data,data.loaded,data.total);
				console.log(Math.round((data,data.loaded/data.total)*100))
				this.setState({ uploaded: Math.round((data.loaded/data.total)*100) });
			}
		  }

    //API Upload
    axios.post("http://192.168.1.146:8000/api/upload",formData,progressStatus,config)
		.then((response) => {
		console.log(response);
		 this.setState({ title: '' ,file: "",});
	  });

  }

  Onclose=(event)=>{
    this.setState({show:false})
  }

  fileData=()=>{
    if(this.state.file)
    {
      console.log('Files',this.state.file);
      console.log('Modal',this.state.show);
    }
  }

  loadingData=()=>{
      
  if(this.state.uploaded>0){
    console.log('inside loading');
    return(
    <div id='uploading'style={{ paddingLeft:'23%',paddingBottom:'15px',}} >
    <img width='60px'src={loading} alt='loading'/>
    </div>)
  }
  }
  uploadingSuccess=()=>{
    if(this.state.uploaded===100){
      console.log('inside success');
      document.getElementById('uploading').style.display="none";
      return(
      <div id='uploadingSuccess'style={{ paddingLeft:'23%',paddingBottom:'15px',}} >
      <img width='60px'src={success} alt='loading'/>
      </div>)
    }
  }
  render() {

    const modalMainDiv={
      margin:"3%",
      paddingLeft:'20%',
    }

    const divItems={
      paddingBottom:'15px',
      paddingLeft:'10px',
      
    }
    // const divImg={
    //   paddingLeft:'23%',
    //   paddingBottom:'15px',
    // }
       return (
    
      <div>
      <div className='drag-area'>
      <div className='icon'><i class="fa-solid fa-cloud-arrow-up"></i></div>
      <h5 style={{color:"#fff"}}>Drag and Drop to Upload File</h5><br></br>
      <h5 style={{color:"#fff",paddingBottom:"10px"}}>OR</h5>
      <input name='file' type ="file"  id="upload" onChange={this.handleModal}/>
       <button>Browse File</button>  
      </div>
       
        <Modal  show={this.state.show}>
          <Modal.Header>
              Upload Form
          </Modal.Header>
          <ModalBody>
          <div style={modalMainDiv}>
              { this.loadingData() }
              { this.uploadingSuccess() }
              <div style={divItems} >
              <input name='title' type="text" placeholder='Enter file title' value={this.state.title} onChange={this.onTitle}/>
              </div>
          </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.Onsubmit}>Submit</Button>
            <Button onClick={this.Onclose}>Close</Button>
            {this.fileData()}
          </ModalFooter>
        </Modal>
      </div>
  
    )
  }
}

export default App
