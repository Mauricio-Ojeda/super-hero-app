import React, { useContext } from 'react'
import FormSearch from './FormSearch';
import ListCards from './atoms/ListCards';
import { SearchContext } from '../../../context/SearchContext';
import Error from '../../error/Error';


const Search = () => {

    const { error } = useContext( SearchContext );

    return (
        <div className="container-fluid mb-3">
            <h1 className="text-center">Your own team of SuperHeroes</h1>
            <FormSearch />
            <div className="text-center">
                { error && <Error message={ 'We don`t find the hero, try again.' } />}
            </div>
            <ListCards />
        </div>
    )
}

export default Search
