import mongoose, { Schema } from 'mongoose';

const RoomSchema = new Schema(
  {
    id: { type: String, required: true },
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
