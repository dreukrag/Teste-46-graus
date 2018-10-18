export const setWidth = (wdt) => {
    return {
        type: 'SET_WIDTH',
        selectedWidth: wdt,
    }
}
export const setProportion = (pptn) => {
    return {
        type: 'SET_PROPORTION',
        selectedProportion: pptn,
    }
}
export const setAnimation = (anmtn) => {
    return {
        type: 'SET_ANIMATION',
        selectedAnimation: anmtn,
    }
}
export const setImageIndex = (ii) => {
    return {
        type: 'SET_IMAGE_INDEX',
        selectedIndex: ii,        
    }
}