import React, { Component } from 'react'
import './UploadFrom.css';



export class UploadFrom extends Component {
  constructor(props){
    super(props)
      this.state={
        Selectedfile:"",
      }
  }

  modal = (event) =>{
      this.setState({Selectedfile:event.target.files[0]})
  }
  fileData = () => {
  if (this.state.file) {
		
		return (
      <div>
        {/* <!-- Vertically centered modal --> */}
        <div class="modal-dialog modal-dialog-centered">
          
        </div>

        {/* <!-- Vertically centered scrollable modal --> */}
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          
        </div>
        <div class="progress">
          {/* <div class="progress-bar" role="progressbar" style={{width: `${this.state.uploaded}%`}} aria-valuenow={this.state.uploaded} aria-valuemin="0" aria-valuemax="100">{`${this.state.uploaded}%`}</div> */}
        </div>
      </div>
	  
    );
	}
}
  render() {
    return (
        <>
      <div className='drag-area'>
      <div className='icon'><i class="fa-solid fa-cloud-arrow-up"></i></div>
      <h5 style={{color:"#fff"}}>Drag and Drop to Upload File</h5><br></br>
      <h5 style={{color:"#fff",paddingBottom:"10px"}}>OR</h5>
      <input name='Selectedfile' type ="file"  id="upload" onChange={this.modal}/>
       <button>Browse File</button> 
       {this.fileData()}
      </div>
     
      </>
    )
  }
}

export default UploadFrom
