import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const <%= name %>Schema = new Schema({

});

export default mongoose.model('<%= capitalName %>', <%= name %>Schema);
