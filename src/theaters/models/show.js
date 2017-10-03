import mongoose, { Schema } from 'mongoose';
import faker from 'faker';

const ShowSchema = new Schema(
  {
    time: { type: Date, default: Date.now() },
    price: { type: Number, default: 20 },
    theater: { type: Schema.Types.ObjectId, ref: 'Theater' },
    movie: { type: Schema.Types.ObjectId, ref: 'Movie' },
    seats_available: [{ type: Number }],
    seats_taken: [{ type: Number }],
  },
  { toObject: { virtuals: true }, toJSON: { virtuals: true }}
);

ShowSchema.statics.findByShowID = function(id) {
  return this.find({ id });
};

ShowSchema.statics.dropAll = function() {
  return this.deleteMany({});
};

const Show = mongoose.model('Show', ShowSchema);

export default Show;
export const fakeShow = () => ({
  name: faker.lorem.word(),
  city: faker.address.city(),
  rooms: [],
});

export const seedShows = (num = 5) => {
  const inserted = [ ...Array(5).keys() ].map(fakeTheater);

  console.log('inserted', inserted);
  return Theater.create(inserted);
};
