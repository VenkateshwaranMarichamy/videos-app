import React from 'react';
import SearchBar from './SearchBar'
import youtube from '../api/youtube';

class App extends React.Component{
    state = {videos:[]};

    onSearchSubmit = async (term) => {
        const response = await youtube.get('youtube/v3/search',{
                params: {
                    q: term
                }
            });
        console.log(response);
        this.setState({videos: response.data.items});
        
    }

    render(){
        return(
            <div className = 'ui container' style={{marignTop: '10px'}}>
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                {this.state.videos.length} videos found.
                
            </div>
        );
    }
}

export default App;