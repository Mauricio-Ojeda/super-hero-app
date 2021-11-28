export const sumPowerStats = ( heroPowerstats, powerstatsKeys ) =>{

    let sumArray = [];
    
      if( powerstatsKeys ){

          for (let i = 0; i < powerstatsKeys.length; i++) {
              const label = powerstatsKeys[ i ];
              
               let sum = heroPowerstats.reduce( ( sum, value ) =>{ // make the sum of values of the power stats per keys
                  if( value[ label ] !== "null"){
                          sum += ( parseInt( value[ label ], 10 ));
                          
                      }else {
                          sum += 0;
                      } 
                  return sum;        
                  }, 0 );
              sumArray[ i ] = sum;   
          }
      }  
    
     
    return sumArray;
    
};

export const average = ( sumTotal, total ) => {
    return ( sumTotal /= total ).toFixed(2);
}

export const dataLabelsSorted = ( arrayData, arrayLabel ) =>{
    const arrayOfObj = arrayLabel.map((d, i) => {
        return {
          label: d,
          data: arrayData[i] || 0
        };
      });

            
    const sortedArrayOfObj = arrayOfObj.sort((a, b) => {
        return b.data - a.data;
      });

          
    let  newArrayLabel = [];
    let  newArrayData = [];
      sortedArrayOfObj.forEach((d) => {
        newArrayLabel.push(d.label);
        newArrayData.push(d.data);
      });

    return [ newArrayData, newArrayLabel ];  
}