const url = 'https://api.tvmaze.com/search/shows?q=simpsons';
// const appKey = 'xyUc6vOROrsRVucrRen9';
// const commentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appKey}/comments`;
// let dd = 0;
const commentPopup = document.querySelector('.comment-popup');
let commentCon = document.getElementsByClassName('timeand-comment-cont');
// let co = document.querySelector('.comment-count');
// let commentArray = [];
      
export default class Comment {

    static commentPopulator = async (ides) => {
    //   const commentList = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appKey}/comments?item_id=${ides}`;
    //   const rese = await fetch(commentList, {
    //     method: 'GET',
    //   });
    //   const resgett = await rese.json();
      const request = new Request(url);
      const response = await fetch(request);
      const bodyResponse = await response.json();
      for (let i = 0; i < bodyResponse.length; i += 1) {
        if (Number(bodyResponse[i].show.id) === Number(ides)) {
          commentPopup.innerHTML = `<img src="${bodyResponse[i].show.image.original}" alt="" class="comment-img">
          <h1 class="com-header">${bodyResponse[i].show.name}</h1>
          <div class="discription">
              <h4 class="detail">Language: ${bodyResponse[i].show.language}</h4>
              <h4 class="detail">Type: ${bodyResponse[i].show.type}</h4>
              <h4 class="detail">Premiered
              : ${bodyResponse[i].show.premiered}</h4>
              <h4 class="detail">Score: ${bodyResponse[i].score}</h4>
          </div>`;
        }
      }
      
    //   const commentCon = document.querySelector('.timeand-comment-cont');
    //   for (let i = 0; i < resgett.length; i += 1) {
    //     const div = document.createElement('div');
    //     div.classList.add('time-com');
    //     div.textContent = `${resgett[i].creation_date}-${resgett[i].username}: ${resgett[i].comment}`;
    //     commentCon.appendChild(div);
    //   }
    //   commentArray = document.querySelectorAll('.time-com');
    //   console.log(commentArray);
    //   let countBody = document.querySelector('.comment-count');
    //   console.log(countBody);
    //   // dd = Comment.commentCounter(commentArray);
    //   countBody.textContent = `Comments (${Comment.commentCounter(commentArray)})`;
    }
}