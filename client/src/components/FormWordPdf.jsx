import {useState} from 'react'

const FormWordPdf = () => {
  const [file, setFile] = useState();

  const convertFile = (fileName) => {
    console.log(fileName)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log('Arquivo original: ' + file.name)
      const arrayTypeFile = file.name.split('.');
      console.log(file)
      arrayTypeFile[1] !== 'docx' || !file ? alert('Seelcione um arquivo word por favor') : convertFile(arrayTypeFile)
    } catch(err){
      console.log(err)
    }
  }
  return (
    <>
      <h1 className='title-form'>Converta seu documento Word para PDF com um simples clique</h1>
      <form onSubmit={handleSubmit}>
          <h3 className='title-input'>Lembre-se que essa aba aceita apenas documento Word</h3>
          <div className="conatiner-input">
            <label for='convert' className='label-file'>Escolher arquivo</label>
            <input type="file" name='convert' className='input-file' id='convert' onChange={(e) => setFile(e.target.files[0])}/>
          </div>
          <button type='submit'>Converter arquivo</button>
      </form>
    </>
  )
}

export default FormWordPdf