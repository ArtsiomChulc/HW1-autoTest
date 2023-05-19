const initState = {
    themeId: 1,
}
export type InitStateType = {
    themeId: number
}

export const themeReducer = (state: InitStateType = initState, action: ChangeThemeIDAT): InitStateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {
                ...state, themeId: action.id
            }
        default:
            return state
    }
}

type ChangeThemeIDAT = ReturnType<typeof changeThemeId>

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const) // fix any
