import { useState } from 'react'
import axios from 'axios';

import './FormPdfWord.css'
import config from '../config';

const FormPdfWord = () => {
  const [file, setFile] = useState();
  const [status, setStatus] = useState();

  const convertFile = async (e) => {
      e.preventDefault()
      let caminhoDocument;
      const formData1 = new FormData();
      formData1.append('document', file);
      
      const headers = {
          'headers':{
              'Content-Type': 'aplication/json'
          }
      }
          await axios.post(`${config.domain}/newDocument`, formData1, headers)
          .then((response) => {
              setStatus({
                type: 'success',
                mensagem: response.data.mensagem
              });
              caminhoDocument = response.data.caminhoArquivo
              console.log(caminhoDocument)
            }).catch((err) => {
              console.log('erro capturado')
              console.log(err)
              if(err.response){
                setStatus({
                  type: 'error',
                  mensagem: err.response.data.mensagem
                });
              }else{
                setStatus({
                  type: 'error',
                  mensagem: "Erro: Tente mais tarde!"
                });
              }
            });
      
      return caminhoDocument;
  }
  // const convertFile = async(e) => {
  //   await axios.post(config.domain + '/newDocument', file)
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log('Arquivo original: ' + file.name)
      const arrayTypeFile = file.name.split('.');
      console.log(file)
      arrayTypeFile[1] !== 'pdf' || !file ? alert('Seelcione um arquivo pdf por favor') : convertFile(e)
    } catch(err){
      console.log(err)
    }
  };
  return (
    <>
      <h1 className='title-form'>Converta seu PDF para Word com um simples clique</h1>
      <form onSubmit={handleSubmit}>
          <h3 className='title-input'>Lembre-se que essa aba aceita apenas PDF</h3>
          <div className="conatiner-input">
            <label for='convert' className='label-file'>Escolher arquivo</label>
            <input type="file" name='convert' className='input-file' id='convert' onChange={(e) => setFile(e.target.files[0])}/>
          </div>
          <button type='submit'>Converter arquivo</button>
      </form>
    </>
  )
}

export default FormPdfWord