const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Serve different HTML files based on routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

// Process route to calculate and display marks
app.get('/process', (req, res) => {
    var no1 = req.query.txt1;
    var no2 = req.query.txt2;
    var no3 = req.query.txt3;
    var no4 = req.query.txt4;
    var no5 = req.query.txt5;
    var total = parseInt(no1) + parseInt(no2) + parseInt(no3) + parseInt(no4) + parseInt(no5);
    var result = (total / 500) * 100;
    // Constructing the HTML response with a table format
    var message = `
    <h1>Total Marks</h1>
    <table border="1">
      <tr>
        <th>Subject</th>
        <th>Marks</th>
      </tr>
      <tr>
        <td>English</td>
        <td>${no1}</td>
      </tr>
      <tr>
        <td>Maths</td>
        <td>${no2}</td>
      </tr>
      <tr>
        <td>Hindi</td>
        <td>${no3}</td>
      </tr>
      <tr>
        <td>Gujarati</td>
        <td>${no4}</td>
      </tr>
      <tr>
        <td>Science</td>
        <td>${no5}</td>
      </tr>
      <tr>
        <td>Total Marks</td>
        <td>${result}</td>
      </tr>
    </table>
  `;
    res.send(message);
});

app.listen(port, () => {
    console.log('Server is running on http://127.0.0.1:${port}');
});