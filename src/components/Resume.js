import React from 'react';
import './Home.css';

function Resume() {
    return (
        <html>
          <head>
            <title>Title of the document</title>
          </head>
          <body>
            <h1>PDF Example with iframe</h1>
            <iframe src="/uploads/media/default/0001/01/540cb75550adf33f281f29132dddd14fded85bfc.pdf" width="100%" height="500px">
            </iframe>
          </body>
        </html>
    );
}

export default Resume;