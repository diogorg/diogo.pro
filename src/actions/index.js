import store from '../store'

export const clickMenu = (actived) => {
  store.dispatch({ type: 'CHANGE_MENU', actived })
}

export default clickMenu
