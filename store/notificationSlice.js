const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  notification: {},
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotification: (state, action) => {
      state.notification = action.payload;
    },
    removeNotification: (state, action) => {
      state.notification = {};
    },
  },
});


export const { addNotification, removeNotification } = notificationSlice.actions;

export default notificationSlice.reducer;