const initialState = {
    selectedWidth: '',
    selectedProportion: '',
    selectedAnimation: '',
    selectedIndex:0,
  }
export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_WIDTH':
        console.log("Setting width to: " + action.selectedWidth)
        return Object.assign({}, state, {
            selectedWidth: action.selectedWidth
        })
        case 'SET_PROPORTION':
        console.log("Setting proportion to: " + action.selectedProportion)
        return Object.assign({}, state, {
            selectedProportion: action.selectedProportion
        })
        case 'SET_ANIMATION':
        console.log("Setting animation to: " + action.selectedAnimation)
        return Object.assign({}, state, {
            selectedAnimation: action.selectedAnimation
        })

        case 'SET_IMAGE_INDEX':
        console.log("Selected index is: " + action.selectedAnimation)
        return Object.assign({}, state, {
            selectedAnimation: action.selectedAnimation
        })
        default:
        return state
    }
}