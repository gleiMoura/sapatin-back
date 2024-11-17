import { Storage } from '@google-cloud/storage';

const storage = new Storage({
    keyFilename: '/home/ubuntuglei/sapatin-back/src/credentials.json', // Caminho para o arquivo de credenciais
    projectId: 'decoded-bulwark-441822-t2', // Substitua pelo ID do seu projeto
});

// Referência ao bucket
const bucketName = 'sapatinbucket'; // Substitua pelo nome do seu bucket
const bucket = storage.bucket(bucketName);

export {
    bucketName,
    bucket
};