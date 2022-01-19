import { createSelector } from "reselect";

const LangState = state => state.language

export const SelectLanguage = createSelector(
    [LangState],
    lang => lang.lang
)