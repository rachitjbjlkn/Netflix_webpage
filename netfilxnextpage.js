

function openModal(movieId) {
    var modal = document.getElementById("movieModal");
    var modalImage = document.getElementById("modalImage");
    var modalTitle = document.getElementById("modalTitle");
    var modalDescription = document.getElementById("modalDescription");

    var movies = {
        movie1: {
            image: "img/netflix/wednesday.jpg",
            title: "Wednesday",
            description: "A mix of horror,fantasy,mystery and comedy and is also considered a coming-of-age story"
        },
        movie2: {
            image: "img/netflix/stranger.jpg",
            title: "Stranger Things",
            description: "A group of kids in 1980s who encounter supernatural events in their small town."
        },
        movie3: {
            image: "img/netflix/sqm.webp",
            title: "Squid Game",
            description: "A secret contest where 456 players,all of whom are in deep financial hardship,risk their lives to play a series of deadly children's games fornthe chance to win a huge amount"
        },
        movie4: {
            image: "img/netflix/moneyheist.jpg",
            title: "Movie Money heist",
            description: "Eight thieves take hostages and lock themselves in the Royal Mintof spain as a criminal mastermind manipulates the police to carry out this pain."
        },
        movie5: {
            image: "img/netflix/sweethome.jpg",
            title: "Sweet Home",
            description: "Eight thieves take hostages and lock themselves in the Royal Mintof spain as a criminal mastermind manipulates the police to carry out this pain."
        },
        movie6: {
            image: "img/netflix/daredevil.png",
            title: "Daredevil",
            description: "Eight thieves take hostages and lock themselves in the Royal Mintof spain as a criminal mastermind manipulates the police to carry out this pain."
        },
        movie7: {
            image: "img/netflix/Oppenheimer.jpg",
            title: "Oppenheimer",
            description: "Eight thieves take hostages and lock themselves in the Royal Mintof spain as a criminal mastermind manipulates the police to carry out this pain."
        },
        movie8: {
            image: "img/netflix/lupin.jpg",
            title: "Lupin",
            description: "Eight thieves take hostages and lock themselves in the Royal Mintof spain as a criminal mastermind manipulates the police to carry out this pain."
        },
        movie9: {
            image: "img/netflix/evil.jpg",
            title: "Evil Dead Rise",
            description: "Eight thieves take hostages and lock themselves in the Royal Mintof spain as a criminal mastermind manipulates the police to carry out this pain."
        },
        movie10: {
            image: "img/netflix/dune.jpg",
            title: "Dune",
            description: "Eight thieves take hostages and lock themselves in the Royal Mintof spain as a criminal mastermind manipulates the police to carry out this pain."
        },
         movie11: {
            image: "img/netflix/alien.jpg",
            title: "Alien",
            description: "Eight thieves take hostages and lock themselves in the Royal Mintof spain as a criminal mastermind manipulates the police to carry out this pain."
        },
         movie12: {
            image: "img/netflix/deadboy.jpg",
            title: "Deadboy Detectives",
            description: "Eight thieves take hostages and lock themselves in the Royal Mintof spain as a criminal mastermind manipulates the police to carry out this pain."
        }
    };

    var movie = movies[movieId];
    modalImage.src = movie.image;
    modalTitle.textContent = movie.title;
    modalDescription.textContent = movie.description;

    
    modal.style.display = "block";
    modalImage.style.width='200px';
}

function closeModal() {
    var modal = document.getElementById("movieModal");
    modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    var modal = document.getElementById("movieModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}