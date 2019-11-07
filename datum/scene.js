let mongoose = require('mongoose');

const sceneSchema = new mongoose.Schema({
    belongto: {type: String, required: true},
    scene: {type: String}
});

sceneSchema.methods.speak = function () {
    var greeting = "belongto: " + this.belongto
	+ " scene: " + this.scene
    console.log(greeting);
}
const sceneModel = mongoose.model('Scene',sceneSchema);
const publicsceneModel = mongoose.model('PublicScene',sceneSchema);

module.exports = {
sceneModel : sceneModel,
publicsceneModel : publicsceneModel
}
