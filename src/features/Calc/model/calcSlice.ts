import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './../../../app/store/store';

export interface CalcSlice {
	currentValue: string;
	prevValue: string | null;
	actionType: string | null;
	result: string | null;
}

const initialState: CalcSlice = {
	currentValue: '0',
	prevValue: null,
	actionType: null,
	result: null,
};

export const calcSlice = createSlice({
	name: 'calc',
	initialState,
	reducers: {
		setCurrentValue: (state, action: PayloadAction<string>) => {
			if (action.payload === '0' && state.currentValue === '0') {
				return state;
			}
			if (action.payload === '.' && state.currentValue.includes('.')) {
				return state;
			}
			state.currentValue =
				state.currentValue === '0' || state.currentValue === state.prevValue
					? action.payload
					: (state.currentValue += action.payload);
		},
		setActionType: (state, action: PayloadAction<string>) => {
			state.actionType = action.payload;
			if (!state.prevValue || !state.result) {
				state.prevValue = state.currentValue;
			}
			state.result = initialState.result;
		},
		setResult: (state) => {
			switch (state.actionType) {
				case '+':
					state.result = String(
						Number(state.prevValue) + Number(state.currentValue),
					);
					state.prevValue = state.result;
					state.currentValue = initialState.currentValue;
					break;
				default:
					break;
			}
		},
	},
});

export const {setCurrentValue, setActionType, setResult} = calcSlice.actions;

export const getCurrentValue = (state: RootState) => state.calc.currentValue;
export const getResult = (state: RootState) => state.calc.result;

export default calcSlice.reducer;
