/**
 * @jest-environment jsdom
 */

import './__mocks__/mockHtml.js';
import Movie from './modules/movie.js';
import Comment from './modules/comment.js';

describe('Count movies and comments', () => {
  it('should count no of movies', () => {
    const movieCountainer = document.querySelector('.movie-count');
    for (let i = 0; i < 5; i += 1) {
      movieCountainer.innerHTML += `<div class="movie">
    </div>`;
    }
    const movies = document.getElementsByClassName('movie');

    const count = Movie.countMovie(movies);
    expect(movies.length).toBe(5);
    expect(count).toBe(5);

    expect(Movie.countMovie(null)).toBe('The surver is not responding at the moment. Please wait!!');

    expect(Movie.countMovie(undefined)).toBe('The surver is not responding at the moment. Please wait!!');
  });

  it('should count the number of comments', () => {
    const commentCon = document.querySelector('.timeand-comment-cont');
    for (let i = 0; i < 8; i += 1) {
      commentCon.innerHTML += `<div class="time-com">
    </div>`;
    }
    const commentArray = document.querySelectorAll('.time-com');

    const commentCount = Comment.commentCounter(commentArray);
    expect(commentArray.length).toBe(8);
    expect(commentCount).toBe(8);

    expect(Comment.commentCounter(null)).toBe('The surver is not responding at the moment. Please wait!!');

    expect(Comment.commentCounter(undefined)).toBe('The surver is not responding at the moment. Please wait!!');
  });
});