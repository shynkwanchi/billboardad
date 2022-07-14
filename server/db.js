const mongoose = require("mongoose");

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(process.env.URL, connectionParams);
    console.log(`Connected to DB`);
  } catch (error) {
    {
      console.log("err", error);
    }
  }
};
