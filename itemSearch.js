$(document).ready(function(){

    var regionId = [10000002,10000043,10000030,10000032,10000042];
    //list of trade hub region id's note: region id's and solar system id's correspond

    var sellPricePlace = document.getElementsByClassName('itemSellPrice');
    var buyPricePlace = document.getElementsByClassName('itemBuyPrice');
    var itemInfo = document.getElementsByClassName('itemInfo');
    var description = document.getElementById('itemDescription');

    setItemInfo(regionId,"the friend ship");

    $("#submitBtn").click(function(){
        var searchTxt = document.getElementById('searchBar').value;
        setItemInfo(regionId,searchTxt);
    });

    
    function setItemInfo(regionIdArr,searchString){
        
        $.get("https://esi.evetech.net/latest/search/?categories=inventory_type&datasource=tranquility&language=en-us&search="+ searchString +"&strict=true", function(data){
            var itemId = data.inventory_type[0];
            document.getElementById('itemImg').src = "https://image.eveonline.com/Type/"+ itemId +"_64.png"; 

            $.get("https://esi.evetech.net/latest/universe/types/"+itemId+"/?datasource=tranquility&language=en-us",function(itemData){
                description.innerHTML = itemData.description;
                itemInfo[0].innerHTML = "Item Name: " + itemData.name;
                itemInfo[1].innerHTML = "Item Vol(M^3): " + itemData.volume; 
            });

            $.get("https://market.fuzzwork.co.uk/aggregates/?region="+ regionIdArr[0] + "&types=" + itemId,function(itemData){
                sellPricePlace[0].innerHTML = itemData[itemId].sell.weightedAverage;
                buyPricePlace[0].innerHTML =  itemData[itemId].buy.min; 
            });
    
            $.get("https://market.fuzzwork.co.uk/aggregates/?region="+ regionIdArr[1] + "&types=" + itemId,function(itemData){
                sellPricePlace[1].innerHTML = itemData[itemId].sell.weightedAverage;
                buyPricePlace[1].innerHTML =  itemData[itemId].buy.min;  
            });

            $.get("https://market.fuzzwork.co.uk/aggregates/?region="+ regionIdArr[2] + "&types=" + itemId,function(itemData){
                sellPricePlace[2].innerHTML = itemData[itemId].sell.weightedAverage;
                buyPricePlace[2].innerHTML =  itemData[itemId].buy.min;
             });

            $.get("https://market.fuzzwork.co.uk/aggregates/?region="+ regionIdArr[3] + "&types=" + itemId,function(itemData){
                sellPricePlace[3].innerHTML = itemData[itemId].sell.weightedAverage;
                buyPricePlace[3].innerHTML =  itemData[itemId].buy.min;
            });

            $.get("https://market.fuzzwork.co.uk/aggregates/?region="+ regionIdArr[4] + "&types=" + itemId,function(itemData){
                sellPricePlace[4].innerHTML = itemData[itemId].sell.weightedAverage;
                buyPricePlace[4].innerHTML =  itemData[itemId].buy.min;
            });
        });
    } 
});