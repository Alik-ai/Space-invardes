//on lui fixe directement les coins, Sprite est une function de création d'objet
//car dans la function je commence par this. j'affecte des attribut a mon élément
function Sprite(filename, left, top) {
    this._node = document.createElement("img")  //this= ce, il designe un objet
    this._node.style.height = "100px"  //'la taille du vaisseau change (c'est mon ajout)
    this._node.src = filename;
    this._node.style.position = "absolute";
    document.body.appendChild(this._node);  


    //pour aller a gauche
    Object.defineProperty(this, "left", {
        //acces en lecture
        get: function(){
            return this._left;
        },
        //acces en ecriture
        set: function (value){
            this._left = value; //modifier la position de l'objet courant
            this._node.style.left = value + "px";
        }
    });

    Object.defineProperty(this, "top", {
        //acces en lecture
        get: function(){
            return this._top;
        },
        //acces en ecriture
        set: function (value){
            this._top = value; //modifier la position de l'objet courant
            this._node.style.top = value + "px";
        }
    });

    Object.defineProperty(this, "display", {
        //acces en lecture
        get: function(){
            return this._node.style.display;
        },
        //acces en ecriture
        set: function (value){
            this._top = value; 
            this._node.style.display = value ;
        }
    });

    //Elles utilisent les propriété au dessus
    this.left = left
    this.top = top;
}








































/*
              
             
                                             /\    
                                            /_|\  
                                           /____\   
                                          /.-""-.\     
                                         /< (()) >\ 
                                        /__`-..-'__\  
                                       /___|____|___\
                                   
                                      ________________  
                                   ,'/____|_____|_____\
                                  / /__|_____|_____|___\
                                 / /|_____|_____|_____|_\
                                ' /____|_____|_____|_____\
                              .' /__|_____|_____|_____|___\
                             ,' /|_____|_____|_____|_____|_\
                            /../____|_____|_____|_____|_____\ 
                           '../__|_____|_____|_____|_____|___\
                          '.:/|_____|_____|_____|_____|_____|_\              
                        ,':./____|_____|_____|_____|_____|_____\             
                       /:../__|_____|_____|_____|_____|_____|___\            
                      /.../|_____|_____|_____|_____|_____|_____|_\         
                     '..:/____|_____|_____|_____|_____|_____|_____\        
                     \:./ _  _ ___  ____ ____ _    _ _ _ _ _  _ ___\        
                      \./                                           \     
                       """"""""""""""""""""""""""""""""""""""""""""""   



*/