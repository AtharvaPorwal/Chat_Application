const mongoose = require('mongoose');

const url = `mongodb+srv://atharvporwal1510:CAP48GdtILkNoaso@cluster0.rebmi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))