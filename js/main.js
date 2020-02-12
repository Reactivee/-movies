// <div class="movie">
// 		<img src="https://images-na.ssl-images-amazon.com/images/M/MV5BNTczMzc2MjYwNF5BMl5BanBnXkFtZTgwNTk4ODk1MDE@._V1_SY250_CR0,0,187,250_AL_.jpg" alt="kino rasmi">
// 		<h3><a href="#">Pardes</a></h3>
// 		<p>Genres:Musical,Romance,Action <br>Date:1997-12-08</p>
// 	</div>

var container=document.querySelector(".container");
function add(array){
	array.forEach(function(movie) {
   var moviediv=document.createElement("div");
   moviediv.classList.add("movie");
   var img=document.createElement("img");
   img.src=movie.posterurl;
   img.alt="Kino rasmi";
   var h3=document.createElement("h3");
   var a=document.createElement("a");
   a.href="#";
   a.innerText=movie.title;
   a.onclick=function(){
    more(movies.indexOf(movie));
    console.log(movies.indexOf(movie));
  };
  var p=document.createElement("p");
  var genres1="";
  
  movie.genres.map(function(genre) {
   genres1+=genre;

   genres1+=" ";
 })
  p.innerText="Genres: "+genres1;
  var p1=document.createElement("p");
  p1.innerText=movie.releaseDate;
  h3.appendChild(a);
  moviediv.appendChild(img);
  moviediv.appendChild(h3);
  moviediv.appendChild(p);
  moviediv.appendChild(p1);
  container.appendChild(moviediv);
})
}

add(movies);
function search(){
  var suz=document.querySelector("input").value;
  container.innerHTML="";
  var searchmovies=movies.filter(function(movie) {
    return movie.title.toLowerCase().includes(suz.toLowerCase());
  });

  add(searchmovies);
}

function categories(c){
	container.innerHTML="";
	var categoriesSort=movies.filter(function(movie) {
		return movie.genres.includes(c);
	})
	add(categoriesSort);
}


function more(id){
document.querySelector(".modal").classList.toggle("disable");
var modal=document.querySelector(".modal-content");
modal.innerHTML="";
var movie=movies[id];
var row=document.createElement("div");
row.classList.add("row");
var img=document.createElement("img");
img.src=movie.posterurl;
var info=document.createElement("div");
info.classList.add("info");
var h2=document.createElement("h2");
h2.innerText=movie.title;
var p=document.createElement("p");
var genres1="";
   movie.genres.map(function(genre) {
   genres1+=genre;
   genres1+=" ";
   })
   p.innerText="Genres:"+genres1;
   var p1=document.createElement("p");
var genres1="";
   movie.actors.map(function(genre) {
   genres1+=genre;
   genres1+=" ";
   })
   p1.innerText="Actors:"+genres1;
    var p2=document.createElement("p");
    p2.innerText="Rating: "+movie.imdbRating;
   var story=document.createElement("div");
story.classList.add("storyline");
story.innerText="Storyline: "+movie.storyline;
 var button=document.createElement("button");
 button.classList.add("close");
 button.innerText="Close";
 info.appendChild(h2);
 info.appendChild(p);
 info.appendChild(p1);
 info.appendChild(p2);
 row.appendChild(img);
 row.appendChild(info);
 modal.appendChild(row);
 modal.appendChild(story);
 modal.appendChild(button);
 document.querySelector(".close").addEventListener("click",function(){
 document.querySelector(".modal").classList.toggle("disable");
});
}

// <div class="row">
//       <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3OTE1MDAxNV5BMl5BanBnXkFtZTgwNjM1NDk5NTE@._V1_SY250_CR0,0,187,250_AL_.jpg">
//     <div class="info">
//       <h2>Baazigar</h2>
//     <p>Genres: Crime,Drama,Musical </p>
//     <p>Actors:"Shah Rukh Khan","Rakhee Gulzar","Kajol"</p>
//     <p>Raiting:7.8</p>
//   </div>
// </div>
//     <div class="storyline">Storyline: Widowed Madan Chopra lives a very wealthy lifestyle with two daughters, Seema and Priya. His passion is car racing, and realizing that he is not young anymore, has his last race and wins - only to find out that another competitor, Vicky Malhotra, let him win. Madan befriends Vicky, introduces him to Priya and invites him to work for him in Bombay. Vicky and Priya are attracted to each other, much to Madan's delight and he announces their marriage. Before that could happen, Seema kills herself by throwing herself down from the roof of a multi-storied building. While Madan wants to close this case due to embarrassment, Seema meets with her college friend, Police Inspector Karan, and together they begin to unravel a plot that may well end Madan and the lives of others as well. Written by rAjOo (gunwanti@hotmail.com),
// </div>
// <button class="close">Close</button>