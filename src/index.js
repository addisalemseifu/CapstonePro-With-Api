import './index.css';
import Movie from './movie.js';
import Comment from './comment.js';

const movieContaier = document.querySelector('.movieContaier');

const commentPopup = document.querySelector('.comment-popup');
const mainContainer = document.querySelector('.mainContainer');
document.addEventListener('DOMContentLoaded', () => {
  Movie.populate();
});

movieContaier.addEventListener('click', (e) => {
  if (e.target.classList.contains('comments')) {
    const comentId = e.target.parentElement.id;
    if (commentPopup.classList.contains('active')) {
      commentPopup.classList.remove('active');
    }
    commentPopup.classList.add('active');
    mainContainer.classList.add('deactive');
    Comment.commentPopulator(comentId);
  }
});
