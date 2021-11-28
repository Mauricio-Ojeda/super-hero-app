import React, { useContext } from 'react'
import { TeamContext } from '../../../context/teamContext/Store';
import { average, sumPowerStats, dataLabelsSorted } from '../../../helpers/Helpers';
import HorizontalBarChart from './atoms/HorizontalBarChart';

const PowerStats = () => {
    
    
    const [ globalState, ] = useContext( TeamContext );
    
    // Destructuring globalState
    const { heroesTeam } = globalState;

    // Average Weight
    let totalWeight = heroesTeam.reduce( ( sum, { appearance } ) => {
       let weight = parseInt( appearance.weight[1], 10);
            sum += weight
            return sum

    }, 0 )
    
    const avgWeight = average( totalWeight, heroesTeam.length );

    // Average Height

    let totalHeight = heroesTeam.reduce( ( sum, { appearance } ) => {
        let height = parseInt( appearance.height[1], 10);
             sum += height
             return sum
 
     }, 0 )
     
     const avgHeight = average( totalHeight, heroesTeam.length );
    
    // Power Stats Sorted 
    let powerstats = heroesTeam.map( hero => hero.powerstats );
    
    let labels = ( heroesTeam[0] ) && Object.keys( powerstats[0] ); // Obtain keys of power stats
    
    const totalsPowerStats = sumPowerStats( powerstats, labels );

    const powerStatsSorted = (heroesTeam[0]) && dataLabelsSorted( totalsPowerStats, labels );

    

    return (
        <div className="container mt-3 ">
            <div className="col-md-6 col-lg-4 bg-dark p-3 mx-auto">
            <h3>Power Stats</h3>
            <p>Average Weight: { ( avgWeight === 'NaN' ) ? '0' : avgWeight }kg.</p>
            <p>Average Height: { ( avgHeight === 'NaN' ) ? '0' : avgHeight }cm.</p>
            {   (heroesTeam.length > 0) &&
                    <HorizontalBarChart 
                        data={ 
                            {
                                labels:  powerStatsSorted[1],
                                datasets: [
                                    {
                                    data: powerStatsSorted[0],
                                    backgroundColor: [
                                        '#ee5454',
                                        '#ffc510',
                                        '#f6db35',
                                        '#4c94f6',
                                        '#4c69f6',
                                        '#ee69f0',
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 206, 86, 1)',
                                        'rgba(75, 192, 192, 1)',
                                        'rgba(153, 102, 255, 1)',
                                        'rgba(255, 159, 64, 1)',
                                    ],
                                    borderWidth: 1,
                                    },
                                ],
                                }
                        }
                    
                    />
            }
            </div>
        </div>
    )
}

export default PowerStats
