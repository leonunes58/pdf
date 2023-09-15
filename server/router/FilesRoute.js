import express from "express";
import CloudmersiveConvertApiClient from "cloudmersive-convert-api-client"
import multer from "multer";
import fs from 'fs'
import path from "path";

const router = express.Router();


var apiInstance = new CloudmersiveConvertApiClient.ConvertDocumentApi();
router.post("/newDocument", 
    (multer({
        storage: multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, './server/arquivos')
            },
            filename: (req, file, cb) => {
                cb(null, Date.now().toString() + "_" + file.originalname)
            }
        })
    })).single('document'),
    async(req, res) => {
        
        if (req.file) {
            console.log(req.file)
            const defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;
            const Apikey = defaultClient.authentications['Apikey'];
            Apikey.apiKey = 'YOUR API KEY';
            let inputFile = Buffer.from(fs.readFileSync(req.file.path).buffer);
            const callback = function(error, data, response) {
                if (error) {
                  console.error(error);
                } else {
                  console.log('API called successfully. Returned data: ' + data);
                }
            };
            apiInstance.convertDocumentPdfToDocx(inputFile, callback);
            return res.json({
                erro: false,
                mensagem: "Upload realizado com sucesso!"
            });
        } else {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Upload não realizado com sucesso, necessário enviar uma imagem PNG ou JPG!"
        });
        }
    })

export default router;