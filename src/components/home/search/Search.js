import React, { useContext } from 'react'
import FormSearch from './FormSearch';
import ListCards from './atoms/ListCards';
import { SearchContext } from '../../../context/SearchContext';
import Error from '../../error/Error';

import './search.scss';


const Search = () => {

    const { error } = useContext( SearchContext );

    return (
        <div className="container-fluid mb-3" id="search">
            <h1 className="text-center my-4">Your own team of SuperHeroes</h1>
            <div className="row">
                <div className="col-md-6">
                    <FormSearch />
                    <div className="text-center text-danger bg-white">
                        { error && <Error  message={ 'We don`t find the hero, try again.' } />}
                    </div>

                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col">
                    <ListCards />

                </div>
            </div>
        </div>
    )
}

export default Search
