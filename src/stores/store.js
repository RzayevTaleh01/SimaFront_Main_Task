const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  transactions: transactions
});

export default store;
