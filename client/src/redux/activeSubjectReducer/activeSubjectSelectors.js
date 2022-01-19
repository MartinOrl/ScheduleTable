import { createSelector } from "reselect";


const ActiveSubjectState = state => state.activeSubject

export const SelectActiveSubject = createSelector(
    [ActiveSubjectState],
    subject => subject.id
)