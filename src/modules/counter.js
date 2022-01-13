
// 1. action type 만들기
const SET_DIFF = "counter/SET_DIFF" // 다른 모듈과 액션 이름이 중복되지 않도록 접두사 counter/를 붙였다.
const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

// 2. action 생성 함수 만들기
export const setDiff = diff => ({type: SET_DIFF, diff: diff});
export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});

// 3. 초기 상태를 선언
const initialState = {
    number: 0,
    diff: 1
}

// 4. reducer 선언
export default function counter(state=initialState,action) {
    switch (action.type) {
        case SET_DIFF:
            return {
                ...state,
                diff: action.diff
            };
        case INCREASE:
            return {
                ...state,
                number: state.number + state.diff
            };
        case DECREASE:
            return {
                ...state,
                number: state.number - state.diff
            };
        default:
            return state;
        }
}

