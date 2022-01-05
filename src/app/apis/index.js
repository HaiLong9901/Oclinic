
const {google} = require('googleapis');
const path = require('path');
const fs = require('fs');

const CLIENT_ID = '798560757553-gg7dtcootapeqnuun3g2h0dt2ft5qbj4.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

const REFREST_TOKEN = '1//04rZtsMNUe7YjCgYIARAAGAQSNwF-L9IrHt8QyiIRQGCbqFUnIwAj_34FEb1MR3lUYVkSSDfb-Pxi6qORtX3pXum7IPKELurtNPQ';

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI,
);

const drive = google.drive({
    version: 'v3',
    auth: oauth2Client
});


oauth2Client.setCredentials({
    refresh_token: REFREST_TOKEN,
});
oauth2Client.generateAuthUrl({
    access_type: 'offline'
})

const image = {
    name: '',
    print,
    uploadFile,
    deleteFile,
    generatePublicUrl,
}
console.log('name is sent: ', image.name);
console.log('path is', path.join(__dirname, `../../public/img/${image.name}`));
// const filePath = path.join(__dirname, `../../public/img/${image.name}`);
// console.log('path is', path.join(__dirname, `../../public/img/doc6.png`));
// const filePath = path.join(__dirname, `../../public/img/doc6.png`);

async function print(){
    console.log('path img: ', image.name);
    console.log('path image: ', path.join(__dirname, `../../public/img/${image.name}`));
}

async function uploadFile(){
    try {
        const filePath = path.join(__dirname, `../../public/img/${image.name}`);
        const response = await drive.files.create({
            requestBody: {
                name:   'doc6.jpg',
                mimeType: 'image/jpg'
            },
            media: {
                mimeType: 'img/jpg',
                body: fs.createReadStream(filePath)
            }
        })
        console.log(response.data);

    } catch (err) {
        console.log('apis:' , err.message);
    }
}
// uploadFile();

async function deleteFile(){
    try {

        const response = await drive.files.delete({
            fileId: '1aT5hdjBimJixuN0JdSrkU6wVEeguIxBm'
        })
        console.log(response.data, response.status);
    } catch (error) {
        console.log(error.message);
    }
}
// deleteFile();

async function generatePublicUrl(){
    try {
        
        const fileID = '1smMg6h57nZRALrpLVI1GrSzdEjQ04yC4';
        await drive.permissions.create({
            fileId: fileID,
            requestBody:{
                role: 'reader',
                type: 'anyone'
            }
        });
        
        const result = await drive.files.get({
            fileId: fileID,
            fields: 'webViewLink, webContentLink'
        });
        console.log(result.data);

    } catch (error) {
        console.log(error.message);
    }
}
// generatePublicUrl();
module.exports = image;