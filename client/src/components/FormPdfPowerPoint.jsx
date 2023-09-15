import {useState} from 'react'

const FormPdfPowerPoint = () => {
  return (
    <>
      <h1 className='title-form'>Converta seu PDF para PowerPoint com um simples clique</h1>
      <form>
          <h3 className='title-input'>Lembre-se que essa aba aceita apenas PDF</h3>
          <div className="conatiner-input">
            <label for='convert' className='label-file'>Escolher arquivo</label>
            <input type="file" name='convert' className='input-file' id='convert' />
          </div>
          <button type='submit'>Converter arquivo</button>
      </form>
    </>
  )
}

export default FormPdfPowerPoint