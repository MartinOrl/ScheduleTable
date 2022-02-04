import { createSelector } from "reselect";

const GroupState = state => state.group

export const SelectGroup = createSelector(
    [GroupState],
    group => group.group
)