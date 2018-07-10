function ajouter(){
        var produit = document.getElementById('prod').value;
        var qte = document.getElementById('qnt').value;
        localStorage.setItem(produit,qte);
        document.getElementById('prod').value="";
        document.getElementById('qnt').value="";
        afficher();
      }
      function modifier(){
        var produit = document.getElementById('prod').value;
        console.log(produit);
        document.getElementById("qnt").value = localStorage.getItem(produit);
          afficher();
      }
      function supprimer(){
        var produit = document.getElementById('prod').value;
        localStorage.removeItem(produit);
        document.getElementById('prod').value="";
          afficher();
      }
      function doclear(){
        localStorage.clear();
          afficher();
      }
      function afficher(){
        var key = "";
        var paires = "<tr><td>Produit</td><td>Quantité</td></tr><br>";
        for(var cpt=0;cpt<localStorage.length;cpt++){
        key = localStorage.key(cpt);
          paires +="<tr><td>"+key+"</td><br><td>"+localStorage.getItem(key)+"</td></tr><br>";
        }
        if(paires=="<tr><td>Produit</td><td>Quantité</td></tr><br>"){
          paires+="<tr><td>VIDE</td><td>VIDE</td></tr><br>"

        }
        document.getElementById('paires').innerHTML = paires;
      }
