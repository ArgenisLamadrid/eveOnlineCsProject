$(document).ready(function(){
    var charInfo = document.getElementsByClassName("charInfo");

    setCharInfo("Argenis Dirdamal");

    $("#submitBtn").click(function(){
        var searchTxt = document.getElementById('searchBar').value;
        setCharInfo(searchTxt);
        
    });

function setCharInfo(searchString){
/**
 * sets character info, usess eve ESI and ZKB API's
 * charInfo[] is the characters HTML info elements, in order
 * character name, corp name, kills, losses, KD score
 */
        $.get("https://esi.evetech.net/latest/search/?categories=character&datasource=tranquility&language=en-us&search="+searchString+"&strict=true",function(data){
            
            $.get("https://esi.evetech.net/latest/characters/"+ data.character[0] +"/?datasource=tranquility",function(data){
                charInfo[0].innerHTML = data.name;
                
                $.get("https://esi.evetech.net/latest/corporations/"+ data.corporation_id +"/?datasource=tranquility",function(data){
                charInfo[1].innerHTML = data.name;
                });
            });

            $.get("https://zkillboard.com/api/kills/characterID/"+ data.character[0] + "/", function(data){
            charInfo[2].innerHTML = data.length;
            });

            $.get("https://zkillboard.com/api/losses/characterID/"+ data.character[0] + "/", function(data){
            charInfo[3].innerHTML = data.length;
            charInfo[4].innerHTML = parseFloat(charInfo[2].innerHTML)/parseFloat(charInfo[3].innerHTML);
            });

            document.getElementById('charPortrait').src = "https://image.eveonline.com/Character/"+ data.character[0] +"_256.jpg";
        });

}   
});