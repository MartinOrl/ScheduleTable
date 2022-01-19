export const ModalActionTypes = {
    TOGGLE_MODAL: "TOGGLE_MODAL",
    CLOSE_MODAL: "CLOSE_MODAL"
}

export const ToggleModal = data => ({
    type: ModalActionTypes.TOGGLE_MODAL,
    payload: data
})

export const CloseModal = () => ({
    type: ModalActionTypes.CLOSE_MODAL
})