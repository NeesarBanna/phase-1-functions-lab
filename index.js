    function distanceFromHqInBlocks(block) {
        return Math.abs(block - 42);
}    
    let result1 = distanceFromHqInBlocks(43);
        expect(result1).to.equal(1);

  
    let result2 = distanceFromHqInBlocks(50);
        expect(result2).to.equal(8);

    
    let  result3 = distanceFromHqInBlocks(34);
        expect(result3).to.equal(8);

//=============================================================
 
    function distanceFromHqInFeet(streetNumber) {
       let headquartersLocation = 42; 
       let distanceInFeet = Math.abs(streetNumber - headquartersLocation) * 264;
        return distanceInFeet;
      }
       let result4 = distanceFromHqInFeet(43);
        expect(result4).to.equal(264);

       let result5 = distanceFromHqInFeet(50);
        expect(result5).to.equal(2112);

       let result6 = distanceFromHqInFeet(34);
        expect(result6).to.equal(2112);

   //=============================================================== 

     function distanceTravelledInFeet(startPoint, endPoint) {
        const block = 264;
        const distance = Math.abs(endPoint - startPoint);
         return distance * block;
      }
          
        let result7 = distanceTravelledInFeet(48,43);
         expect(result7).to.equal(1320);      
          
        let result8 = distanceTravelledInFeet(50,60);
         expect(result8).to.equal(2640);    
        
        let result9 = distanceTravelledInFeet(28,34);
         expect(result9).to.equal(1584);

//===============================================================

    function calculatesFarePrice(startBlock, endBlock) {
        const distance = Math.abs(endBlock - startBlock) * 264; // Assuming each block is 264 feet
  
        if (distance > 2500) {
            return 'cannot travel that far';
        } else if (distance <= 400) {
            return 0;
        } else if (distance <= 2000) {
             return (distance - 400) * 0.02;
        } else {
             return 25;
    }
  }