import express from 'express';
import { join } from 'node:path';

const app = express();

function requestCallback(request, response){
    response.status(200)
            .send(`request received`);
}

app.get('/', requestCallback)

app.get('/simple-text', (request, response) => {
    console.log(`some text`);
    response.status(200).set({ 'Content-Type' : 'text/plain' }).send('some message');
})

app.get('/concerts', (request, response) => {
    //const filePath = `${process.cwd()}/src/public/concerts.html`
    const filePath = join(process.cwd(), 'src', 'public', 'concerts.html');
    response.status(200).sendFile(filePath);
})

app.listen(3000);