import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name

            return [...state].sort((a, b) => action.payload === 'up'
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name))
                 // need to fix
        }
        case 'check': {

            return state.filter(a => a.age > action.payload) // need to fix
        }
        default:
            return state
    }
}

// case 'sort': { // by name
//     const c = action.payload === 'up' ? 1 : -1
//     return [...state].sort((a, b) => {
//         if (a.name > b.name) {
//             return c
//         }
//         if (a.name < b.name) {
//             return 0 - c
//         }
//         return 0
//     })
//     // return state // need to fix
//     // return state // need to fix
// }