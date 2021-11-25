import React, { useContext } from 'react'
import { TeamContext } from '../../../context/teamContext/Store';

const PowerStats = () => {
    
    let powerstats = [];
    const [ globalState, ] = useContext( TeamContext );
    
    // Destructuring globalState
    const { heroesTeam } = globalState;
    console.log(heroesTeam);
    
    powerstats = heroesTeam.map( hero => hero.powerstats );
    
    let labels = ( heroesTeam[0] ) && Object.keys( powerstats[0] ); // Obtain keys of power stats
    
    const sumPowerStats = ( heroPowerstats, powerstatsKeys ) =>{

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
        
    } 

    console.log(sumPowerStats( powerstats, labels )); 


    return (
        <div>
            <h3>Power Stats</h3>
        </div>
    )
}

export default PowerStats
