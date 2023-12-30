/* -------- Database Models ---------- */

export interface CommentModel {
    who: string,
    message: string,
    up: number,
    down: number
}

export interface UserModel {
    name: string,
    email: string,
    pass: string,
    admin: boolean
}

export interface UserSigninModel {
    email: string,
    pass: string
}

export interface PostModel {
    title: string,
    route: string, // how+to+do+it
    author: string,
    summary: string, // Summary
    body: string,
    comment: [{
        who: string,
        like?: number,
        dislike?: number
    }]
}


/* ---------  ---------- */


