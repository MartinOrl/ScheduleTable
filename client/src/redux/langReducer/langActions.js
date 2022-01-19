export const LangActionTypes = {
    SET_LANG: "SET_LANG",
}

export const SetLanguage = lang => ({
    type: LangActionTypes.SET_LANG,
    payload: lang
})