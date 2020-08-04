export const Reducers = (state = { actived: 'ABOUT' }, action) => {
  switch (action.type) {
    case 'CHANGE_MENU':
      return { actived: action.actived }
    default:
      return state
  }
}

export default Reducers
