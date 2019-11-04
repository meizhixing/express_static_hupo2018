let mongoose = require('mongoose');
// mongoose.connect('mongodb://mongodb/virtualhelper',{ useNewUrlParser: true,useUnifiedTopology: true });
mongoose.connect('mongodb://mongodb/zeronote',{ useNewUrlParser: true,useUnifiedTopology: true });
let conn = module.exports = mongoose.connection;

