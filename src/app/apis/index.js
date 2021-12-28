const {google} = require('googleapis');
const path = require('path');
const fs = require('fs');


const CLIENT_ID = '798560757553-nc2r66aqq848i20v8mpq7it0erkb4j4a.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

const REFREST_TOKEN = '1//04CrSS4Ae89SgCgYIARAAGAQSNwF-L9Irw3anXzRXurdAbiXr5PP5Iu_Y_nzymlw3nEPnbn59h9xB9wRBWRDKRDf1zPizC9_UpZA';

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
})

console.log('path is', path.join('D:\\Oclinic_project\\src\\public\\img', 'doc3.png'));
const filePath = path.join('D:\\Oclinic_project\\src\\public\\img', 'doc3.png');

async function uploadFile(){
    try {
        
        const response = await drive.files.create({
            requestBody: {
                name: 'doc3.jpg',
                mimeType: 'image/jpg'
            },
            media: {
                mimeType: 'img/jpg',
                body: fs.createReadStream(filePath)
            }
        })

        console.log(response.data);

    } catch (err) {
        console.log(err.message);
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