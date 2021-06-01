//on demande l'acces complet a l'image
let alien1 = new Sprite ("./image/Mouche-1-(basique-rose).png" , 100, 50, ) 
let alien2 = new Sprite ("./image/Mouche-2-(basique-rouge).png" , 400, 50, )
let alien3 = new Sprite ("./image/Mouche-3-verte-(chauve-souris).png" , 700, 50, )
let alien4 = new Sprite ("./image/Mouche-4-(violette-surpuissante).png" , 1000, 50, )
let alien5 = new Sprite ("./image/Mouche-5-(basique-vert).png" , 1300, 50, ) 

let missile = new Sprite ("./image/Missile-(rocket).png" , 0, 0, )
missile.display = "none";

let vaisseau = new Sprite ("./image/Vaisseau-bleu.png" , 740, 700, )




//Pour les touches (pouvoir utiliser le pave numerique)
document.onkeydown = function (event){
    //console.log(event.keyCode);
    //si event code a une valuerr pareil que 103 alors tu fait -10px a chaque touche

    if (event.keyCode == 103){               //deplacement haut/gauche
        vaisseau.left -= 10;                   
        vaisseau.top -= 10;
    } 
    else if (event.keyCode == 104){          //deplacement haut
        vaisseau.top -= 10;                     
    } 
    else if (event.keyCode == 105){          //deplacement haut/droite
        vaisseau.left += 10;                    
        vaisseau.top -= 10;
    } 
    else if (event.keyCode == 100){           //deplacement gauche
        vaisseau.left -= 10;                   
    } 
    else if (event.keyCode == 102){           //deplacement droite
        vaisseau.left += 10;                   
    } 
    else if (event.keyCode == 97){           //deplacement bas/gauche
        vaisseau.left -= 10;                   
        vaisseau.top += 10;
    } 
    else if (event.keyCode == 98){             //deplacement bas                 
        vaisseau.top += 10;
    } 
    else if (event.keyCode == 99){               //deplacement bas/droite
        vaisseau.left += 10;                   
        vaisseau.top += 10;
    } 
    else;
}






