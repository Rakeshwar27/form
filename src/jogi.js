import React, { Component } from 'react'
import './UploadFrom.css';



export class UploadFrom extends Component {
  render() {
    return (
        <>
      <div className='drag-area'>
      <div className='icon'><i class="fa-solid fa-cloud-arrow-up"></i></div>
      <div className='title'><input name='title' type="text" placeholder='Enter file title' /></div>
      <button>Browse File</button>
      <input type ="file"  id="upload"/>
        <button className='btn'>Upload</button>
         <header>Choose before Pressing the Upload button </header>
      </div>
      <div className='btn_download'>
      <button>Go to download</button>
      </div>
      </>
    )
  }
}

export default UploadFrom
