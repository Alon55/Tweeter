
const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())



function post() {
    if (($('#input').val()).length > 0) {
        tweeter.addPost($('#input').val())
        $('#input').val('')
        renderer.renderPosts(tweeter.getPosts())
    }
}



$('#posts').on ('click', '.delete', function() {
    tweeter.removePost($(this).closest($('#posts')).find('h3').attr('id'))
    renderer.renderPosts(tweeter.getPosts())
}

)



$('#posts').on ('click', 'button', function() {
    let commentText = $(this).closest($('.post')).find('input').val()
    let postId = $(this).closest($('.post')).find('.post-text').attr('id')
    tweeter.addComment(commentText, postId)
    renderer.renderPosts(tweeter.getPosts())
}

)



$('#posts').on ('click', '.delete-comment', function() {
    tweeter.removeComment($(this).closest($('.post')).find('h3').attr('id'), $(this).closest($('div')).attr('id'))
    renderer.renderPosts(tweeter.getPosts())
}

)






