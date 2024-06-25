// Store posts in an array
let posts = [];

// Render posts
function renderPosts() {
  const postList = document.getElementById('post-list');
  postList.innerHTML = '';
  posts.forEach((post) => {
    const postHTML = `
      <li class="post">
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <div class="reactions">
          <button class="like-btn">Like (${post.likes})</button>
          <button class="dislike-btn">Dislike (${post.dislikes})</button>
        </div>
        <ul class="comments">
          ${post.comments.map((comment) => `<li>${comment.author}: ${comment.content}</li>`).join('')}
        </ul>
      </li>
    `;
    postList.innerHTML += postHTML;
  });
}

// Handle new post submission
document.getElementById('new-post-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('post-title').value;
  const content = document.getElementById('post-content').value;
  const newPost = {
    title,
    content,
    likes: 0,
    dislikes: 0,
    comments: [],
  };
  posts.push(newPost);
  renderPosts();
  document.getElementById('post-title').value = '';
  document.getElementById('post-content').value = '';
});

// Handle like and dislike clicks
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('like-btn')) {
    const postId = e.target.parentNode.parentNode.dataset.postId;
   posts[postId].likes++;
    renderPosts();
  } else if (e.target.classList.contains('dislike-btn')) {
    const postId = e.target.parentNode.parentNode.dataset.postId;
    posts[postId].dislikes++;
    renderPosts();
  }
});

// Handle comment submission
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('comment-btn')) {
    const postId = e.target.parentNode.parentNode.dataset.postId;
    const commentContent = prompt('Enter your comment:');
    if (commentContent) {
      posts[postId].comments.push({
        author: 'Anonymous',
        content: commentContent,
      });
      renderPosts();
    }
  }
});

// Initialize
renderPosts();