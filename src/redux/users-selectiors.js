export const GetUsersRequaest = (state) => {
    return state.usersPage.users;
}

export const GetPageSize = (state) => {
    return state.usersPage.pageSize;
}
export const GetTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}
export const GetCurrentPage = (state) => {
    return state.usersPage.currentPage;
}
export const GetIsFetching = (state) => {
    return state.usersPage.isFetching;
}
export const GetFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}