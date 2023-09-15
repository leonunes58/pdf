import {useState} from 'react'

const FormPowePointPdf = () => {

  
  return (
    <>
      <h1 className='title-form'>Converta seu PowerPoint para PDF com um simples clique</h1>
      <form>
          <h3 className='title-input'>Lembre-se que essa aba aceita apenas PowerPoint</h3>
          <div className="conatiner-input">
            <label for='convert' className='label-file'>Escolher arquivo</label>
            <input type="file" name='convert' className='input-file' id='convert'/>
          </div>
          <button type='submit'>Converter arquivo</button>
      </form>
    </>
  )
}

export default FormPowePointPdf