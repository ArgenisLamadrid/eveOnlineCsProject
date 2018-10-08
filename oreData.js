$(document).ready(function(){
    
    // var tickerArray = document.getElementsByClassName("tickerInfo");
    var hubSystemId = [30000142,30002187,30002510,30002659,30002053]; 
    // list of trade hub system id's

    var regionId = [10000002,10000043,10000030,10000032,10000042];
    //list of trade hub region id's note: region id's and solar system id's correspond

    var oreIDs = [1230,1228,1224,18,1227,20,1226,1231,21,1229,1232,19,1225,22,1223,11396];
    //list of ore id's

    var orePrices = document.getElementsByClassName("orePrices");

   /* for( let i=0; i < orePrices.length; i+5){
         orePrices[i].innerHTML = getMinCost(regionId[0],hubSystemId[0],oreIDs[i/5]);
         orePrices[i+1].innerHTML = getMinCost(regionId[1],hubSystemId[1],oreIDs[i/5]);
         orePrices[i+2].innerHTML = getMinCost(regionId[2],hubSystemId[2],oreIDs[i/5]);
         orePrices[i+3].innerHTML = getMinCost(regionId[3],hubSystemId[3],oreIDs[i/5]);
         orePrices[i+4].innerHTML = getMinCost(regionId[4],hubSystemId[4],oreIDs[i/5]);
    }
    */
    
   
    getMinCost(regionId[0],hubSystemId[0],oreIDs[0],orePrices[0]);
    getMinCost(regionId[1],hubSystemId[1],oreIDs[0],orePrices[1]);
    getMinCost(regionId[2],hubSystemId[2],oreIDs[0],orePrices[2]);
    getMinCost(regionId[3],hubSystemId[3],oreIDs[0],orePrices[3]);
    getMinCost(regionId[4],hubSystemId[4],oreIDs[0],orePrices[4]);

    getMinCost(regionId[0],hubSystemId[0],oreIDs[1],orePrices[5]);
    getMinCost(regionId[1],hubSystemId[1],oreIDs[1],orePrices[6]);
    getMinCost(regionId[2],hubSystemId[2],oreIDs[1],orePrices[7]);
    getMinCost(regionId[3],hubSystemId[3],oreIDs[1],orePrices[8]);
    getMinCost(regionId[4],hubSystemId[4],oreIDs[1],orePrices[9]);

    getMinCost(regionId[0],hubSystemId[0],oreIDs[2],orePrices[10]);
    getMinCost(regionId[1],hubSystemId[1],oreIDs[2],orePrices[11]);
    getMinCost(regionId[2],hubSystemId[2],oreIDs[2],orePrices[12]);
    getMinCost(regionId[3],hubSystemId[3],oreIDs[2],orePrices[13]);
    getMinCost(regionId[4],hubSystemId[4],oreIDs[2],orePrices[14]);

    getMinCost(regionId[0],hubSystemId[0],oreIDs[3],orePrices[15]);
    getMinCost(regionId[1],hubSystemId[1],oreIDs[3],orePrices[16]);
    getMinCost(regionId[2],hubSystemId[2],oreIDs[3],orePrices[17]);
    getMinCost(regionId[3],hubSystemId[3],oreIDs[3],orePrices[18]);
    getMinCost(regionId[4],hubSystemId[4],oreIDs[3],orePrices[19]);

    getMinCost(regionId[0],hubSystemId[0],oreIDs[4],orePrices[20]);
    getMinCost(regionId[1],hubSystemId[1],oreIDs[4],orePrices[21]);
    getMinCost(regionId[2],hubSystemId[2],oreIDs[4],orePrices[22]);
    getMinCost(regionId[3],hubSystemId[3],oreIDs[4],orePrices[23]);
    getMinCost(regionId[4],hubSystemId[4],oreIDs[4],orePrices[24]);

    getMinCost(regionId[0],hubSystemId[0],oreIDs[5],orePrices[25]);
    getMinCost(regionId[1],hubSystemId[1],oreIDs[5],orePrices[26]);
    getMinCost(regionId[2],hubSystemId[2],oreIDs[5],orePrices[27]);
    getMinCost(regionId[3],hubSystemId[3],oreIDs[5],orePrices[28]);
    getMinCost(regionId[4],hubSystemId[4],oreIDs[5],orePrices[29]);

    getMinCost(regionId[0],hubSystemId[0],oreIDs[6],orePrices[30]);
    getMinCost(regionId[1],hubSystemId[1],oreIDs[6],orePrices[31]);
    getMinCost(regionId[2],hubSystemId[2],oreIDs[6],orePrices[32]);
    getMinCost(regionId[3],hubSystemId[3],oreIDs[6],orePrices[33]);
    getMinCost(regionId[4],hubSystemId[4],oreIDs[6],orePrices[34]);

    getMinCost(regionId[0],hubSystemId[0],oreIDs[7],orePrices[35]);
    getMinCost(regionId[1],hubSystemId[1],oreIDs[7],orePrices[36]);
    getMinCost(regionId[2],hubSystemId[2],oreIDs[7],orePrices[37]);
    getMinCost(regionId[3],hubSystemId[3],oreIDs[7],orePrices[38]);
    getMinCost(regionId[4],hubSystemId[4],oreIDs[7],orePrices[39]);

    getMinCost(regionId[0],hubSystemId[0],oreIDs[8],orePrices[40]);
    getMinCost(regionId[1],hubSystemId[1],oreIDs[8],orePrices[41]);
    getMinCost(regionId[2],hubSystemId[2],oreIDs[8],orePrices[42]);
    getMinCost(regionId[3],hubSystemId[3],oreIDs[8],orePrices[43]);
    getMinCost(regionId[4],hubSystemId[4],oreIDs[8],orePrices[44]);

    getMinCost(regionId[0],hubSystemId[0],oreIDs[9],orePrices[45]);
    getMinCost(regionId[1],hubSystemId[1],oreIDs[9],orePrices[46]);
    getMinCost(regionId[2],hubSystemId[2],oreIDs[9],orePrices[47]);
    getMinCost(regionId[3],hubSystemId[3],oreIDs[9],orePrices[48]);
    getMinCost(regionId[4],hubSystemId[4],oreIDs[9],orePrices[49]);

    getMinCost(regionId[0],hubSystemId[0],oreIDs[10],orePrices[50]);
    getMinCost(regionId[1],hubSystemId[1],oreIDs[10],orePrices[51]);
    getMinCost(regionId[2],hubSystemId[2],oreIDs[10],orePrices[52]);
    getMinCost(regionId[3],hubSystemId[3],oreIDs[10],orePrices[53]);
    getMinCost(regionId[4],hubSystemId[4],oreIDs[10],orePrices[54]);

    getMinCost(regionId[0],hubSystemId[0],oreIDs[11],orePrices[55]);
    getMinCost(regionId[1],hubSystemId[1],oreIDs[11],orePrices[56]);
    getMinCost(regionId[2],hubSystemId[2],oreIDs[11],orePrices[57]);
    getMinCost(regionId[3],hubSystemId[3],oreIDs[11],orePrices[58]);
    getMinCost(regionId[4],hubSystemId[4],oreIDs[11],orePrices[59]);

    getMinCost(regionId[0],hubSystemId[0],oreIDs[12],orePrices[60]);
    getMinCost(regionId[1],hubSystemId[1],oreIDs[12],orePrices[61]);
    getMinCost(regionId[2],hubSystemId[2],oreIDs[12],orePrices[62]);
    getMinCost(regionId[3],hubSystemId[3],oreIDs[12],orePrices[63]);
    getMinCost(regionId[4],hubSystemId[4],oreIDs[12],orePrices[64]);

    getMinCost(regionId[0],hubSystemId[0],oreIDs[13],orePrices[65]);
    getMinCost(regionId[1],hubSystemId[1],oreIDs[13],orePrices[66]);
    getMinCost(regionId[2],hubSystemId[2],oreIDs[13],orePrices[67]);
    getMinCost(regionId[3],hubSystemId[3],oreIDs[13],orePrices[68]);
    getMinCost(regionId[4],hubSystemId[4],oreIDs[13],orePrices[69]);

    getMinCost(regionId[0],hubSystemId[0],oreIDs[14],orePrices[70]);
    getMinCost(regionId[1],hubSystemId[1],oreIDs[14],orePrices[71]);
    getMinCost(regionId[2],hubSystemId[2],oreIDs[14],orePrices[72]);
    getMinCost(regionId[3],hubSystemId[3],oreIDs[14],orePrices[73]);
    getMinCost(regionId[4],hubSystemId[4],oreIDs[14],orePrices[74]);

    getMinCost(regionId[0],hubSystemId[0],oreIDs[15],orePrices[75]);
    getMinCost(regionId[1],hubSystemId[1],oreIDs[15],orePrices[76]);
    getMinCost(regionId[2],hubSystemId[2],oreIDs[15],orePrices[77]);
    getMinCost(regionId[3],hubSystemId[3],oreIDs[15],orePrices[78]);
    getMinCost(regionId[4],hubSystemId[4],oreIDs[15],orePrices[79]);
    

    function getMinCost(regionId,systemId,itemId,itemPlace){
        //returns the lowest price of an item in a given system
        var url ="https://esi.evetech.net/latest/markets/" + regionId +"/orders/?datasource=tranquility&order_type=sell&page=1&type_id=" + itemId;

        $.ajax({
            url: url,
            async: true,
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
                  lowPrice = 0;
                  lowPrice=itemCosts[0];
                 for(i=0;i<itemCosts.length;i++){
                     // calculates lowest price from list of prices
                     if(lowestPrice > itemCosts[i]){
                         lowestPrice=itemCosts[i];
                     }
                 }
                 if(typeof(lowPrice) == 'undefined'){
                    itemPlace.innerHTML = "N/A";
                }else{
                    itemPlace.innerHTML = lowPrice;
                }
            }
        });  
    }
});