import mongoose, { Schema } from 'mongoose';
import faker from 'faker';

const RoomSchema = new Schema(
  {
    capacity: { type: Number, default: 200 },
    theater: { type: Schema.Types.ObjectId, ref: 'Theater' },
    shows: [{ type: Schema.Types.ObjectId, ref: 'Show' }],
  },
  { toObject: { virtuals: true }, toJSON: { virtuals: true }}
);

RoomSchema.statics.findByRoomID = function(id) {
  return this.find({ id });
};

RoomSchema.statics.dropAll = function() {
  return this.deleteMany({});
};

const Room = mongoose.model('Room', RoomSchema);

export default Room;

export const fakeRoom = () => ({
  name: faker.random.number(200),
  shows: [],
});

export const seedRooms = (num = 5) => {
  const inserted = [ ...Array(num).keys() ].map(fakeRoom);

  console.log('inserted', inserted);
  return Room.create(inserted);
};
