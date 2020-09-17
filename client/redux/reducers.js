
const GOT_BUILDING = 'GOT_BUILDING'

function standbyReducer(state = {}, action){
  switch(action.type) {
    case GOT_BUILDING:
      return state
    default:
      console.log('hiho')
      return state
  }
}

export default standbyReducer;
