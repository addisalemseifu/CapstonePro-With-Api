export default document.body.innerHTML = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JavaScript Group Capstone</title>
    <script
      src="https://kit.fontawesome.com/3656d24b6d.js"
      crossorigin="anonymous"
    ></script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;1,300&   display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <!-- Header  -->
    <header>
      <nav class="navbar d-flex">
        <!-- <a href="#"> -->
        <img class="logo" src="./assets/logo.png" alt="logo" />
        <!-- </a> -->
        <ul class="navlinks d-flex">
          <li class="navitems"><span class="movie-count">Movies (0)</span></li>
          <li class="navitems"><a href="#Home">Home</a></li>
          <li class="navitems"><a href="#Home">Contact Us</a></li>
          <li class="navitems"><a href="#Home">About</a></li>
        </ul>
      </nav>
    </header>
    <!-- main -->
    <main class="header">
      <div class="mainContainer">
        <div class="movieContaier"></div>
      </div>
      <section class="comment-popup">
      <div class="timeand-comment-cont">
          </div>
        <!-- <input type="textaria" aria-rowcount="10" aria-colcount="20"> -->
      </section> 
    </main>
    
    <!------Footer------>
    <!-- <footer class="footer">
      <p>
        Created by <span class="bold">Addisalem</span> &
        <span class="bold">Suliman</span> under CC License
      </p>
    </footer> -->
  </body>
</html>
    `;
