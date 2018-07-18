import React from 'react';

const Search = (props) => {
    return (
        <form className="form" onSubmit={props.value}>
            <input className="form__input" type="text" name="country" placeholder="Country"/>
            <input className="form__input" type="text" name="city" placeholder="City"/>
            <button className="form__button">See Weather</button>
        </form>
    );

}

export default Search;