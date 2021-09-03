const app = require('./app');
const port = 1234;

app.listen(port, function () {
    console.log(`Server started on port ${port}`);
});
