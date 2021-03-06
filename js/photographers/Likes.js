export default class Likes {

    constructor(){
        this.ph_medias = Array.from(document.querySelectorAll('.ph_elt_like'));
        this.likes = 0 ;
        this.countlikes();
        this.gestionLike() ;
    }    

    // Fonction de comptage de likes
    countlikes() {
        this.ph_medias.forEach(element => {
            this.likes += Number(element.querySelector('.ph_work_like').textContent)
        })

        this.addLikesInHTML()
    }
    
    // Gestion des likes, si un média a déjà un like ou n'en a pas
    gestionLike() {

        this.ph_medias.forEach(element => {

            let coeur = element.querySelector('.btnLike');

            coeur.addEventListener('click', () => {

                let mediaSelectedLikes = element.querySelector('.ph_work_like')

                if (coeur.classList.contains('liked')) {
                    this.removeLike(mediaSelectedLikes, coeur);
                } else if ((coeur.classList.contains('liked')) == false) {
                    this.addLike(mediaSelectedLikes, coeur);
                }

                this.likes = 0
                this.countlikes();
            })
        })
    }

    // Fonction enlever un like
    removeLike(mediaSelectedLikes, coeur){
        mediaSelectedLikes.innerHTML --
        coeur.classList.remove('liked')
        coeur.classList.remove('fas')
        coeur.classList.add('far')
    }

    // Fonction ajouter un like
    addLike(mediaSelectedLikes, coeur) {
        mediaSelectedLikes.innerHTML ++
        coeur.classList.add('liked')
        coeur.classList.remove('far')
        coeur.classList.add('fas')
    }

    //Mise à jour du compteur de likes total du photographe
    addLikesInHTML() {
        let boxLikes = document.getElementById('likes')
        boxLikes.innerHTML = `${this.likes} <i class="fas fa-heart"></i>`
    }
}