/* aide.js — mode d'emploi de l'appli élève « Observation volley » (lu par eps-aide.js) */
window.EPS_AIDE={appli:'Volley-ball · Observation (élève)',bas:'16px',publics:[
{id:'eleve',titre:'Élève',chapitres:[
{t:'Avant le match',html:`<ol><li>Écris le nom des deux équipes, ton prénom (observateur) et le numéro du terrain.</li>
<li>Touche <span class="bouton">Commencer le match</span>.</li></ol><p class="astuce">Un seul observateur par terrain, avec la tablette.</p>`},
{t:'Pendant le match',html:`<ul><li>À chaque point, touche dans la colonne de l’équipe qui marque <b>comment</b> le point a été marqué :
<ul><li><b>Attaque en 3 touches</b> : réception, passe, attaque ;</li><li><b>Renvoi en 1 ou 2 touches</b> ;</li><li><b>Service gagnant</b> : ace ou réception ratée ;</li><li><b>Faute adverse</b> : filet, dehors, ballon non renvoyé.</li></ul></li>
<li>Erreur ? <span class="bouton">↶ Annuler le dernier point</span>.</li>
<li>À la fin : <span class="bouton">Fin du match</span> (toucher deux fois pour confirmer s’il n’y a aucun point).</li></ul>`},
{t:'Après le match',html:`<ul><li>Chaque équipe voit sa répartition des points, un <b>point fort</b> et une chose <b>à travailler</b>.</li>
<li>Montre le <b>QR code</b> au professeur : il le scanne pour récupérer le match.</li>
<li><span class="bouton">Corriger le match</span> rouvre la saisie.</li>
<li>Les matchs restent sur la tablette : « Revoir les matchs et leurs QR codes ». Supprime-les en fin de séance quand le professeur les a scannés.</li></ul>`},
{t:'Lecture facilitée',html:`<p>La case <b>Lecture facilitée</b> en haut de ce mode d’emploi met la même police partout, avec des lettres et des lignes plus espacées (utile en cas de dyslexie). Le choix vaut pour toutes les applis EPS de la tablette.</p>`}]},
{id:'prof',titre:'Professeur',chapitres:[
{t:'Organisation',html:`<ul><li>Une tablette par terrain, un observateur qui change à chaque match.</li>
<li>Fin de match : scannez le QR avec votre outil volley ; rien ne part en ligne, les noms d’équipes suffisent.</li>
<li>L’appli marche sans réseau après une première ouverture.</li></ul>`}]}
]};
