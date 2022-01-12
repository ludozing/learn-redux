import { createStore } from 'redux';

// createStore는 스토어를 만들어주는 함수입니다.

// 1. 리덕스에서 관리할 상태 정의
const initialState = {
    counter: 0,
    text: '',
    list: []
}

// 2. 액션 타입 정의
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'
const CHANGE_TEXT = 'CHANGE_TEXT'
const ADD_TO_LIST = 'ADD_TO_LIST'

// 3. 액션생성함수 정의
const increase = () => ({
    type: INCREASE
})
// function increase(){
//     return {
//         trpe: INCREASE
//     }
// }
const decrease = () => ({
    type: DECREASE
})
const changeText = text => ({
    type: CHANGE_TEXT,
    text
})
const addToList = item => ({
    type: ADD_TO_LIST,
    item
})

// 4. reducer 작성
    // 4-1. state 초기 상태가 필요함 state가 undefined면 초기 상태를 만들어 줘야 함
function reducer(state = initialState, action){
    switch(action.type){
        case INCREASE:
            return{
                ...state,
                counter: state.counter + 1
            };
        case DECREASE:
            return{
               ...state,
               counter: state.counter - 1 
            };
        case CHANGE_TEXT:
            return{
                ...state,
                text: action.text
            };
        case ADD_TO_LIST:
            return{
                ...state,
                list: state.list.concat(action.item)      
            };
        default:
            return state;
    }
}

// 5. store 생성
const store = createStore(reducer);
console.log(store.getState());

// store 안에 들어있는 상태가 변경될 때마다 호출되는 listener 함수
const listener = () => {
    const state = store.getState();
    console.log(state);
    console.log('<br/>여기')
}

// 6. listener 함수를 store에 구독
const unsubscribe = store.subscribe(listener);

// action들을 dispatch 해 보기
store.dispatch(increase());
store.dispatch(decrease());
// 구독 해제
unsubscribe()
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({id:1, text: '하하'}));
