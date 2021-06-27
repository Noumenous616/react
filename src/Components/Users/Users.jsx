import React from 'react';
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";



let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, followingInProgress, unfollow, follow,  ...props}) => {
    return <div>
        <Paginator currentPage={currentPage}
                   onPageChanged={onPageChanged}
                   totalItemCount={totalUsersCount}
                   pageSize={pageSize}/>
        {

            users.map(u => <User followingInProgress={followingInProgress}
                                 user={u}
                                 key={u.id}
                                 unfollow={unfollow}
                                 follow={follow}/>)
        }
    </div>
}

export default Users;