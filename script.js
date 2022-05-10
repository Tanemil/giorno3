let uno = '1 5 8 3 5 4 2 7 6 1 8 2 7 6 3 4';
let due = '1 7 4 6 5 8 3 2 2 7 4 8 3 1 6 5';
let tre = '5 2 6 4 7 8 1 3 2 8 6 4 1 7 5 3';

var personalizza;

const COLORE1 = '#a84032';
const COLORE2 = '#3244a8';
const COLORE3 = '#32a83c';

let display_color = prompt('scegli tra: rosso , blu o verde');
personalizza = prompt('inserici 16 lettere o cifre per la tabella oppure non inserire nulla');
if (personalizza === '') {
    let display_number = prompt('scegli tra: uno , due o tre');
    if (display_number === 'uno') {
        document.getElementById('c1').innerHTML = uno[0];
        document.getElementById('c2').innerHTML = uno[2];
        document.getElementById('c3').innerHTML = uno[4];
        document.getElementById('c4').innerHTML = uno[6];
        document.getElementById('c5').innerHTML = uno[8];
        document.getElementById('c6').innerHTML = uno[10];
        document.getElementById('c7').innerHTML = uno[12];
        document.getElementById('c8').innerHTML = uno[14];
        document.getElementById('c9').innerHTML = uno[16];
        document.getElementById('c10').innerHTML = uno[18];
        document.getElementById('c11').innerHTML = uno[20];
        document.getElementById('c12').innerHTML = uno[22];
        document.getElementById('c13').innerHTML = uno[24];
        document.getElementById('c14').innerHTML = uno[26];
        document.getElementById('c15').innerHTML = uno[28];
        document.getElementById('c16').innerHTML = uno[30];
    } else if (display_number === 'due') {
        document.getElementById('c1').innerHTML = due[0];
        document.getElementById('c2').innerHTML = due[2];
        document.getElementById('c3').innerHTML = due[4];
        document.getElementById('c4').innerHTML = due[6];
        document.getElementById('c5').innerHTML = due[8];
        document.getElementById('c6').innerHTML = due[10];
        document.getElementById('c7').innerHTML = due[12];
        document.getElementById('c8').innerHTML = due[14];
        document.getElementById('c9').innerHTML = due[16];
        document.getElementById('c10').innerHTML = due[18];
        document.getElementById('c11').innerHTML = due[20];
        document.getElementById('c12').innerHTML = due[22];
        document.getElementById('c13').innerHTML = due[24];
        document.getElementById('c14').innerHTML = due[26];
        document.getElementById('c15').innerHTML = due[28];
        document.getElementById('c16').innerHTML = due[30];
    } else if (display_number === 'tre') {
        document.getElementById('c1').innerHTML = tre[0];
        document.getElementById('c2').innerHTML = tre[2];
        document.getElementById('c3').innerHTML = tre[4];
        document.getElementById('c4').innerHTML = tre[6];
        document.getElementById('c5').innerHTML = tre[8];
        document.getElementById('c6').innerHTML = tre[10];
        document.getElementById('c7').innerHTML = tre[12];
        document.getElementById('c8').innerHTML = tre[14];
        document.getElementById('c9').innerHTML = tre[16];
        document.getElementById('c10').innerHTML = tre[18];
        document.getElementById('c11').innerHTML = tre[20];
        document.getElementById('c12').innerHTML = tre[22];
        document.getElementById('c13').innerHTML = tre[24];
        document.getElementById('c14').innerHTML = tre[26];
        document.getElementById('c15').innerHTML = tre[28];
        document.getElementById('c16').innerHTML = tre[30];  
    } else {
        alert('numero non accetabile');
    };
} else if (personalizza[16] !== undefined) {
    alert('hai superato i caratteri richiesti')
} else if (personalizza.length < 16) {
    alert('troppi pochi caratteri')
} else {
    document.getElementById('c1').innerHTML = personalizza[0];
    document.getElementById('c2').innerHTML = personalizza[1];
    document.getElementById('c3').innerHTML = personalizza[2];
    document.getElementById('c4').innerHTML = personalizza[3];
    document.getElementById('c5').innerHTML = personalizza[4];
    document.getElementById('c6').innerHTML = personalizza[5];
    document.getElementById('c7').innerHTML = personalizza[6];
    document.getElementById('c8').innerHTML = personalizza[7];
    document.getElementById('c9').innerHTML = personalizza[8];
    document.getElementById('c10').innerHTML = personalizza[9];
    document.getElementById('c11').innerHTML = personalizza[10];
    document.getElementById('c12').innerHTML = personalizza[11];
    document.getElementById('c13').innerHTML = personalizza[12];
    document.getElementById('c14').innerHTML = personalizza[13];
    document.getElementById('c15').innerHTML = personalizza[14];
    document.getElementById('c16').innerHTML = personalizza[15]; 
}


if (display_color === 'rosso') {
    document.getElementById('table').style.color = COLORE1;
} else if (display_color === 'blu') {
    document.getElementById('table').style.color = COLORE2;
} else if (display_color === 'verde') {
    document.getElementById('table').style.color = COLORE3;
} else {
    alert('colore non accetabile');
};

let riga_da_sommare = prompt('scegli la riga da sommare tra 1 e 4');
let colonna_da_sommare = prompt('sceglia la colonna da sommare 1 e 4');

let somma_riga1 = document.getElementById('c1').innerHTML + document.getElementById('c2').innerHTML + document.getElementById('c3').innerHTML + document.getElementById('c4').innerHTML ;
let somma_riga2 = document.getElementById('c5').innerHTML + document.getElementById('c6').innerHTML + document.getElementById('c7').innerHTML + document.getElementById('c8').innerHTML ;
let somma_riga3 = document.getElementById('c9').innerHTML + document.getElementById('c10').innerHTML + document.getElementById('c11').innerHTML + document.getElementById('c12').innerHTML ;
let somma_riga4 = document.getElementById('c13').innerHTML + document.getElementById('c14').innerHTML + document.getElementById('c15').innerHTML + document.getElementById('c16').innerHTML ;

let somma_colonna1 = document.getElementById('c1').innerHTML + document.getElementById('c5').innerHTML + document.getElementById('c9').innerHTML + document.getElementById('c13').innerHTML ;
let somma_colonna2 = document.getElementById('c2').innerHTML + document.getElementById('c6').innerHTML + document.getElementById('c10').innerHTML + document.getElementById('c14').innerHTML;
let somma_colonna3 = document.getElementById('c3').innerHTML + document.getElementById('c7').innerHTML + document.getElementById('c11').innerHTML + document.getElementById('c15').innerHTML;
let somma_colonna4 = document.getElementById('c4').innerHTML + document.getElementById('c8').innerHTML + document.getElementById('c12').innerHTML + document.getElementById('c16').innerHTML;

if (riga_da_sommare === '1' || riga_da_sommare === '2' || riga_da_sommare === '3' || riga_da_sommare === '4') {
    if (riga_da_sommare === '1') {
        document.getElementById('somma_r').innerHTML += somma_riga1;
    }
    else if (riga_da_sommare === '2') {
        document.getElementById('somma_r').innerHTML += somma_riga2;
    }
    else if (riga_da_sommare === '3') {
        document.getElementById('somma_r').innerHTML += somma_riga3;
    }
    else if (riga_da_sommare === '4') {
        document.getElementById('somma_r').innerHTML += somma_riga4;
    } else {
        alert('non hai selezionato un numero tra 1 e 4');
    }
} else {
    alert('non hai selezionato un numero')
}

if (colonna_da_sommare === '1' || colonna_da_sommare === '2' || colonna_da_sommare === '3' || colonna_da_sommare === '4') {
    if (colonna_da_sommare === '1') {
        document.getElementById('somma_c').innerHTML += somma_colonna1;
    }
    else if (colonna_da_sommare === '2') {
        document.getElementById('somma_c'.innerHTML) += somma_colonna2;
    }
    else if (colonna_da_sommare === '3') {
        document.getElementById('somma_c').innerHTML += somma_colonna3;
    }
    else if (colonna_da_sommare === '4') {
        document.getElementById('somma_c').innerHTML += somma_colonna4;
    } else {
        alert('non hai selezionato un numero tra 1 e 4');
    }
} else {
    alert('non hai selezionato un numero')
}

    














