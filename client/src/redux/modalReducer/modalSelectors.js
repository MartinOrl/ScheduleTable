import { createSelector } from 'reselect'

const ModalState = state => state.modal

export const SelectModal = createSelector(
    [ModalState],
    modal => modal
)