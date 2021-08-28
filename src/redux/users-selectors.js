export const selectUsers = (state) => {
    return state.usersPage.users
}

export const selectPageSize = (state) => {
    return state.usersPage.pageSize
}

export const selectTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const selectSelectedPage = (state) => {
    return state.usersPage.selectedPage
}

export const selectIsLoading = (state) => {
    return state.usersPage.isLoading
}

export const selectIsInProgress = (state) => {
    return state.usersPage.isInProgress
}
