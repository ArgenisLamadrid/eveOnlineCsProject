$(document).ready(function(){
    var hubSystemId = [30000142,30002187,30002510,30002659,30002053]; 
    var regionId = [10000002,10000043,10000030,10000032,10000042];

    var plexId = 44992;
    //list of trade hub system/region id's note: region id's and solar system id's correspond

    var tickerArray = document.getElementsByClassName("tickerInfo");
/*
    for(let i = 0; i < tickerArray.length; i++){
        tickerArray[i].innerHTML += getMinCost(regionId[i],hubSystemId[0],plexId);
    }*/

    tickerArray[0].innerHTML += getMinCost(regionId[0],hubSystemId[0],plexId);
    tickerArray[1].innerHTML += getMinCost(regionId[1],hubSystemId[1],plexId);
    tickerArray[2].innerHTML += getMinCost(regionId[2],hubSystemId[2],plexId);
    tickerArray[3].innerHTML += getMinCost(regionId[3],hubSystemId[3],plexId);
    tickerArray[4].innerHTML += getMinCost(regionId[4],hubSystemId[4],plexId);
    

    function getMinCost(regionId,systemId,itemId){
        //returns the lowest price of an item in a given system
        var url ="https://esi.evetech.net/latest/markets/" + regionId +"/orders/?datasource=tranquility&order_type=sell&page=1&type_id=" + itemId;

        $.ajax({
            url: url,
            async: false,
            success: function(data){
                  var itemCosts = [];
                  var temp = [];
                  
                 for (i=0; i<data.length;i++){
                     // populates itemCosts[] with the prices from the systemId 
                      temp = data[i];
                     if(temp['system_id'] === systemId){
                         itemCosts.push(temp["price"]);
                     }
                 }
 
                 lowestPrice = itemCosts[0];
                 for(i=0;i<itemCosts.length;i++){
                     // calculates lowest price from list of prices
                     if(lowestPrice > itemCosts[i]){
                         lowestPrice=itemCosts[i];
                     }
                 }
            }
        });

        if(typeof(lowestPrice) == 'undefined'){
            return "N/A";
        }else{
            return lowestPrice;
        }
    }
});