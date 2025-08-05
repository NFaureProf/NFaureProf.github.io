function validateCheckboxes() {
    let resultType = '';
    let resultEtat = '';

    // Visuel median
    const dilatés_med = document.querySelectorAll('input.dilatés_med:checked').length;
    const taches_med = document.querySelectorAll('input.taches_med:checked').length;
    const terne_med = document.querySelectorAll('input.terne_med:checked').length;
    const rougeurs_med = document.querySelectorAll('input.rougeurs_med:checked').length;
    const naevi_med = document.querySelectorAll('input.naevi_med:checked').length;

    const serrés_med = document.querySelectorAll('input.serrés_med:checked').length;
    const rides_med = document.querySelectorAll('input.rides_med:checked').length;
    const brillance_med = document.querySelectorAll('input.brillance_med:checked').length;
    const squames_med = document.querySelectorAll('input.squames_med:checked').length;
    const ephélides_med = document.querySelectorAll('input.ephélides_med:checked').length;

    // Visuel latéral
    const dilatés_lat = document.querySelectorAll('input.dilatés_lat:checked').length;
    const taches_lat = document.querySelectorAll('input.taches_lat:checked').length;
    const terne_lat = document.querySelectorAll('input.terne_lat:checked').length;
    const rougeurs_lat = document.querySelectorAll('input.rougeurs_lat:checked').length;
    const naevi_lat = document.querySelectorAll('input.naevi_lat:checked').length;

    const serrés_lat = document.querySelectorAll('input.serrés_lat:checked').length;
    const rides_lat = document.querySelectorAll('input.rides_lat:checked').length;
    const brillance_lat = document.querySelectorAll('input.brillance_lat:checked').length;
    const squames_lat = document.querySelectorAll('input.squames_lat:checked').length;
    const ephélides_lat = document.querySelectorAll('input.ephélides_lat:checked').length;

    // Aspect median
    const fine_med = document.querySelectorAll('input.fine_med:checked').length;
    const lisse_med = document.querySelectorAll('input.lisse_med:checked').length;
    const granuleuse_med = document.querySelectorAll('input.granuleuse_med:checked').length;

    const épaisse_med = document.querySelectorAll('input.épaisse_med:checked').length;
    const rêche_med = document.querySelectorAll('input.rêche_med:checked').length;
    const veloutée_med = document.querySelectorAll('input.veloutée_med:checked').length;

    // Aspect latéral
    const fine_lat = document.querySelectorAll('input.fine_lat:checked').length;
    const lisse_lat = document.querySelectorAll('input.lisse_lat:checked').length;
    const granuleuse_lat = document.querySelectorAll('input.granuleuse_lat:checked').length;

    const épaisse_lat = document.querySelectorAll('input.épaisse_lat:checked').length;
    const rêche_lat = document.querySelectorAll('input.rêche_lat:checked').length;
    const veloutée_lat = document.querySelectorAll('input.veloutée_lat:checked').length;

    // Tonicité
    const bonne_tonicité = document.querySelectorAll('input.bonne_tonicité:checked').length;
    const tonicité_insuffisante = document.querySelectorAll('input.tonicité_insuffisante:checked').length;

    // Autres
    const comédons = document.querySelectorAll('input.comédons:checked').length;
    const couperose = document.querySelectorAll('input.couperose:checked').length;
    const stries = document.querySelectorAll('input.stries:checked').length;
    const atonie = document.querySelectorAll('input.atonie:checked').length;

    // Combinaisons
    const dilatés = dilatés_lat + dilatés_med;
    const taches = taches_lat + taches_med;
    const terne = terne_lat + terne_med;
    const rougeurs = rougeurs_lat + rougeurs_med;
    const naevi = naevi_lat + naevi_med;    // Pas utile ?
    const serrés = serrés_lat + serrés_med;
    const rides = rides_lat + rides_med;
    const brillance = brillance_lat + brillance_med;
    const squames = squames_lat + squames_med;
    const ephélides = ephélides_lat + ephélides_med;    // Pas utile ?

    const fine = fine_lat + fine_med;
    const lisse = lisse_lat + lisse_med;
    const granuleuse = granuleuse_lat + granuleuse_med;
    const épaisse = épaisse_lat + épaisse_med;
    const rêche = rêche_lat + rêche_med;
    const veloutée = veloutée_lat + veloutée_med;

    // Calcul
    if (!(dilatés || taches || terne || rougeurs || rides || brillance || squames) && 
        !(fine || granuleuse || épaisse || rêche) && 
        !(comédons)){
        resultType += "Type normale"
    }
    if ((serrés || squames) && !(dilatés || brillance) && 
        rêche && !(granuleuse || veloutée) && 
        !(comédons)){
        resultType += "Type sèche"
    }
    if ((brillance || dilatés) && !(serrés || squames) && 
        (épaisse || granuleuse) && !(fine || lisse || rêche || veloutée)){
        resultType += "Type grasse"
    }
    
    if ((brillance_med || dilatés_med) && !(serrés_med || squames_med) && 
        (épaisse_med || granuleuse_med) && !(fine_med || lisse_med || rêche_med || veloutée_med)){
        if (!(dilatés_lat || taches_lat || terne_lat || rougeurs_lat || rides_lat || brillance_lat || squames_lat) && 
            !(fine_lat || granuleuse_lat || épaisse_lat || rêche_lat) && 
            !(comédons)){
            if (!(épaisse_lat || granuleuse_lat || brillance_lat || dilatés_lat)){
                resultType += "Type mixte"
            }
        }
    }

    if (stries){
        resultEtat = "Etat deshydraté"
    }

    if(rougeurs || couperose){
        resultEtat = "Etat sensible"
    }

    if((rides + taches + tonicité_insuffisante + atonie >= 2)){
        resultEtat = "Etat mature"
    }


    document.getElementById('Type').innerText = resultType;
    document.getElementById('Etat').innerText = resultEtat;
}


function deSelectAll() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
    });
    document.getElementById('Type').innerText = "";
    document.getElementById('Etat').innerText = "";
}
