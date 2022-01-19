export const ActiveSubjectTypes = {
    SET_ACTIVE_SUBJECT: "SET_ACTIVE_SUBJECT"
}

export const SetActiveSubject = subject => ({
    type: ActiveSubjectTypes.SET_ACTIVE_SUBJECT,
    payload: subject
})