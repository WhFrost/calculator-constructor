import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import {calcSlice} from 'features/Calc/model';

export const store = configureStore({
	reducer: {
		calc: calcSlice.reducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
