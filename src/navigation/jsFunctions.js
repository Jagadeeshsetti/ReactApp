export const INCREASE_COUNT = "INCREASE_COUNT";
export const DECREASE_COUNT = "DECREASE_COUNT";
export const RESET_COUNT = "RESET_COUNT";



export const reducer =(state, action)=>{
    switch(action.type){
        case INCREASE_COUNT:
            return {...state, count: state.count + 1};

        case DECREASE_COUNT:
            return {...state, count: state.count - 1};

        case RESET_COUNT:
            return {...state, count: 0};

        default:
            return state;  
    }

}