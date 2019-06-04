data = [
    {"image" : "assets/images/trackYoSelf.png", "description" : "--A smart journal web app to track your feelz. Create a user account and start tracking! TrackYoSelf will automatically perform a sentiment analysis on your journal entry and score 5 emotions based on the text. See a graph of the emotions in each entry and of the emotions over the past 30 tracks. Technologies used: MongoDB, Mongoose, Express, React, Node.js, Passport, Axios,Victory Indico API", "title": "track-Yo-Self"},

    {"image" : "assets/images/burger.png", "description" : "--This is a burger consuming app input the type of burger to add it to the Burgers to eat list with a devour button, clicking the devour button consumes the burger and adds it to the Devoured burger list. Technologies used: CRUD methods and an ORM with Node.js, Express.js, Handlebars, and mySQL.", "title": "Eat-Da-Burger"},
    
    {"image" : "assets/images/soccer Memory game.png", "description" : "-- This is a simple click memory game that shuffles the characters after every click. It uses React's state to keep track of characters, current score, and top score. Technologies used: React and Node. ", "title" : "Soccer-Memory-Game"}]

        var vimg;
        var utxt;
         var html ='<div class="col-md-12">';
             html +='<div class="card">';
             html +='<div class="row">';
             html +='<div class="col-md-4 userimg" > </div>';
             html +='<div class="col-md-8">';
             html +='<div class="card-block">';
             html +='<a class="card-title" href=""></a>';
             html +='</div>';
             html +='</div>';
             html +='</div>';
             html +='</div>';
             html +='</div>';    

$(document).ready(function(){   

         for(var i=0;i<data.length;i++){
             $('#printcard').append(html);
            uimg=data[i].image;
            utxt=data[i].title;
            desc = data[i].description;
            
            var $img = $("<img/>");
            $img.width('340px');
            $img.height('220px');
            $img.attr("src", "" + uimg);
            $(".userimg:eq("+i+")").append($img);
            $(".card-title:eq("+i+")").append(utxt);
            $(".card-block:eq("+i+")").append(desc);

         }
         
    });

    
    window.addEventListener('load', function() {
        const trackYoSelf= document.getElementsByClassName("card-title")[0].setAttribute('href', "https://track-yo-self.herokuapp.com/");
        
        const burger = document.getElementsByClassName("card-title")[1].setAttribute('href', "https://murmuring-wildwood-87335.herokuapp.com/");

        const memoryGame = document.getElementsByClassName("card-title")[2].setAttribute('href', "https://fatkiddh.github.io/Clicky-Games/");
        
        
    })