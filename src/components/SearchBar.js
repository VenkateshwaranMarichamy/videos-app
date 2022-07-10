import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.term);
    };

    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.onSubmit} className='ui form'>
                    <div className='field'>
                        <label>Enter the videos to search</label>
                        <input type='text' value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })}></input>
                    </div>
                </form>
            </div>
        );
    }

}

export default SearchBar;