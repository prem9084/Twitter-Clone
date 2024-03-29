import mongoose from "mongoose";
const { Schema } = mongoose;

const tweetSchema = Schema(
  {
    text: { type: String, maxLength: 280 },
    image: { type: String },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
    replay: { type: Array },
    comment: {
      type: Array,
    },
    retweet: {
      type: Array,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Tweet", tweetSchema);
