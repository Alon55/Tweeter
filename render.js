
let Renderer = function () {

    let renderPosts = function (_posts) {
        $('#posts').empty()

        for (const post of _posts) {

            let h3 = `<h3 id="${post.id}" class="post-text">${post.text}</h3>`

            let orgCom = ""
            for (const comment of post.comments) {
                
                orgCom = orgCom + `<div id="${comment.id}" class="comments"><span class="delete-comment">X</span><span> ${comment.text}</span></div>`
             }

            let addComment = `<div class="comments"><input type="text" placeholder="Got something to say?"><button>Comment</button></div>`

            let del = `<div class="delete">Delete Post</div>`
            
            $('#posts').append(`<div class="post">${h3}${orgCom}${addComment}${del}</div>`)

        }
    }
    return {
        renderPosts: renderPosts
    }
}