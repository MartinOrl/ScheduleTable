export const GroupActionTypes = {
    SET_GROUP: 'SET_GROUP'
}

export const SetGroup = group => ({
    type: GroupActionTypes.SET_GROUP,
    payload: group
})