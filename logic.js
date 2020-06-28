

const Tweeter = function () {
    
    let _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]
    
    let postIdCounter
    let commentIdCounter
    let getPosts = function () {
        return _posts
        
    }
    let idP = 2
    let addPost = function (text) {
        
        idP = idP + 1
        
        let post = {
            text: text,
            id: 'p' + idP,
            comments: []
        }
        _posts.push(post)
    }
    let removePost = function (postID) {
        for (let i = 0; i < _posts.length; i++) {
            if (postID === _posts[i].id){
                console.log(_posts[i])
                console.log(_posts.indexOf(_posts[i]))
                _posts.splice((_posts.indexOf(_posts[i])), 1)
            }       
        }
    }
    let idC = 6
    let addComment = function (text, postID) {
        
        idC = idC + 1
        
        for (let i1 = 0; i1 < _posts.length; i1++) {
            if (postID === _posts[i1].id){
                    let comment = {
                        id: 'c' + idC,
                        text: text
                        }
                        _posts[i1].comments.push(comment)
                     
                }
        }
    }
   
    let removeComment = function (postID, commentID) {
        for (let i2 = 0; i2 < _posts.length; i2++) {
            if (postID === _posts[i2].id){
                for (let i3 = 0; i3 < _posts[i2].comments.length; i3++) {
                    if (commentID === _posts[i2].comments[i3].id) {
                        let indexNum = _posts[i2].comments.indexOf(_posts[i2].comments[i3]);
                        _posts[i2].comments.splice(indexNum , 1)
                    }
                } 
            }
        }
    }

    return {
        postIdCounter: postIdCounter,
        commentIdCounter: commentIdCounter,
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
}
}


