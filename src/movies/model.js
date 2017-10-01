import mongoose, { Schema } from 'mongoose';

const rand = () => Math.floor(Math.random() * 4 + 1);

const MovieSchema = new Schema(
  {
    id: { type: String, required: true },
    title: { type: String, default: 'default review text' },
    release_date: { type: Date, default: Date.now() },
    tagline: { type: String, default: 'default review text' },
    vote_average: {
      type: Number,
      default: rand,
      min: 0,
      max: 10,
    },
  },
  { toObject: { virtuals: true }, toJSON: { virtuals: true }}
);

MovieSchema.statics.findByMovieID = function(id) {
  return this.find({ id });
};

MovieSchema.statics.dropAll = function() {
  return this.deleteMany({});
};

const Movie = mongoose.model('Movie', MovieSchema);

export default Movie;

// id, title, runtime, release_date,tagline.
// adult": false,
//   "backdrop_path": "/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg",
//   "belongs_to_collection": null,
//   "budget": 63000000,
//   "genres": [
//     {
//       "id": 18,
//       "name": "Drama"
//     }
//   ],
//   "homepage": "",
//   "id": 550,
//   "imdb_id": "tt0137523",
//   "original_language": "en",
//   "original_title": "Fight Club",
//   "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
//   "popularity": 0.5,
//   "poster_path": null,
//   "production_companies": [
//     {
//       "name": "20th Century Fox",
//       "id": 25
//     }
//   ],
//   "production_countries": [
//     {
//       "iso_3166_1": "US",
//       "name": "United States of America"
//     }
//   ],
//   "release_date": "1999-10-12",
//   "revenue": 100853753,
//   "runtime": 139,
//   "spoken_languages": [
//     {
//       "iso_639_1": "en",
//       "name": "English"
//     }
//   ],
//   "status": "Released",
//   "tagline": "How much can you know about yourself if you've never been in a fight?",
//   "title": "Fight Club",
//   "video": false,
//   "vote_average": 7.8,
//   "vote_count": 3439
// }

// id: string
//       title: string
//       runtime: number
//       format: string
//       plot: string
//       releaseYear: number
//       releaseMonth: number
//       releaseDay: number
