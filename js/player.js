class Player{
    constructor(){

    }

    getCount(){

        var playerCountRef=database.ref('playerCount');
        playerCountRef.on("value",function(data){
            playerCount=data.val();
        });

    }

    updateCount(count){
        console.log(count);
        database.ref('playerCount').set({
             'playerCount':count
        });
    }







}