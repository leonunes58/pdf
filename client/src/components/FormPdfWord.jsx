import React from 'react'
import './FormPdfWord.css'
const FormPdfWord = () => {
  return (
    <>
      <h1 className='title-form'>Converta seu PDF para Word com um simples clique</h1>
      <form>
        <label for='convert' className='label-file'>
          <h3>Lembre-se que essa aba aceita apenas PDF</h3>
          <input type="file" name='convert' className='input-file'/>
        </label>
      </form>
    </>
  )
}

export default FormPdfWord