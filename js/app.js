let movies = [
  {
    id: 1,
    name: "The Magic Box",
    genre: "Drama",
    description:
      "Revision of Autologous Tissue Substitute in Right Acromioclavicular Joint, Percutaneous Endoscopic Approach",
    rating: 4.3,
    released_at: "17-06-2022",
    image: "http://dummyimage.com/798x824.png/dddddd/000000",
  },
  {
    id: 2,
    name: "Journey Into Fear",
    genre: "Drama|Film-Noir|War",
    description:
      "Fragmentation in Right Hepatic Duct, Via Natural or Artificial Opening Endoscopic",
    rating: 4.1,
    released_at: "16-09-2023",
    image: "http://dummyimage.com/661x674.png/5fa2dd/ffffff",
  },
  {
    id: 3,
    name: "Strange Color Of Your Body's Tears, The (L'étrange couleur des larmes de ton corps)",
    genre: "Mystery|Thriller",
    description:
      "Fusion of Thoracic Vertebral Joint using Nanotextured Surface Interbody Fusion Device, Open Approach, New Technology Group 2",
    rating: 1.8,
    released_at: "09-12-2022",
    image: "http://dummyimage.com/879x892.png/dddddd/000000",
  },
  {
    id: 4,
    name: "Village Barbershop, The",
    genre: "Comedy|Drama",
    description:
      "Bypass Portal Vein to Lower Vein with Intraluminal Device, Percutaneous Endoscopic Approach",
    rating: 3.0,
    released_at: "12-07-2022",
    image: "http://dummyimage.com/689x714.png/5fa2dd/ffffff",
  },
  {
    id: 5,
    name: "Intimacy",
    genre: "Drama",
    description:
      "Supplement Right Diaphragm with Synthetic Substitute, Percutaneous Endoscopic Approach",
    rating: 1.8,
    released_at: "01-06-2022",
    image: "http://dummyimage.com/610x707.png/5fa2dd/ffffff",
  },
  {
    id: 6,
    name: "Just Looking",
    genre: "Comedy",
    description:
      "Insertion of Monitoring Device into Hepatobiliary Duct, Open Approach",
    rating: 1.8,
    released_at: "03-09-2022",
    image: "http://dummyimage.com/501x773.png/cc0000/ffffff",
  },
  {
    id: 7,
    name: "Motherhood",
    genre: "Comedy",
    description:
      "Reposition Right Toe Phalangeal Joint, Percutaneous Endoscopic Approach",
    rating: 1.1,
    released_at: "28-03-2022",
    image: "http://dummyimage.com/611x779.png/ff4444/ffffff",
  },
  {
    id: 8,
    name: "Saltmen of Tibet, The (Salzmänner von Tibet, Die)",
    genre: "Documentary",
    description:
      "Supplement Right Vertebral Artery with Nonautologous Tissue Substitute, Percutaneous Approach",
    rating: 3.3,
    released_at: "14-09-2023",
    image: "http://dummyimage.com/602x589.png/dddddd/000000",
  },
  {
    id: 9,
    name: "Newcastle",
    genre: "Drama",
    description: "Repair Coronary Artery, One Artery, Open Approach",
    rating: 3.2,
    released_at: "18-03-2022",
    image: "http://dummyimage.com/540x808.png/5fa2dd/ffffff",
  },
  {
    id: 10,
    name: "Fading Gigolo",
    genre: "Comedy",
    description: "Excision of Lower Gingiva, External Approach, Diagnostic",
    rating: 1.2,
    released_at: "13-07-2022",
    image: "http://dummyimage.com/811x909.png/cc0000/ffffff",
  },
];
let movieListElement = document.querySelector("#movie-list");
let input = document.querySelector("input");

const displayMovie = (movie) => {
  let id = Math.random().toString(16).slice(2);
  let template = `
    <div class="col-md-6 col-lg-4 col-xl-3">
      <div class="card text-bg-dark border-light">
        <img
          src="${movie.image}"
          alt="${movie.name}"
          class="card-img-top rounded-bottom-3"
          height="400"
        />
        <div class="card-body">
          <h3 class="card-title text-truncate"><abbr title="${movie.name}">${movie.name}</abbr></h3>
          <p class="card-text">
            <i class="fa-solid fa-star text-warning"></i> ${movie.rating}
          </p>
        </div>
        <div class="card-footer">
          <button class="btn btn-success d-block w-100" type="button" data-bs-toggle="modal" data-bs-target="#movie-modal-${id}">
            Launch demo modal
          </button>
        </div>
      </div>
    </div>
    <div class="modal fade" id="movie-modal-${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <ul class="list-group">
              <li class="list-group-item">Name: ${movie.name}</li>
              <li class="list-group-item">Genre: ${movie.genre}</li>
              <li class="list-group-item">Rating: ${movie.rating}</li>
              <li class="list-group-item">Released at: ${movie.released_at}</li>
              <li class="list-group-item">Description: ${movie.description}</li>
            </ul>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  `;

  movieListElement.innerHTML += template;
};

movies.forEach(displayMovie);
input.addEventListener("keyup", (e) => {
  movieListElement.innerHTML = "";
  movies
    .filter((movie) => {
      return movie.name.toLowerCase().includes(e.target.value.toLowerCase());
    })
    .forEach(displayMovie);
});
