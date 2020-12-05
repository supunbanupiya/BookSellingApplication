import React from 'react';
import axios from 'axios';

export default class FetchData extends React.fetchbook{
    
    state ={
        fetchdata:[],
    };
    
    componentDidMount(){
        axios.get(" https://api.nytimes.com/svc/books/v3/lists.json?api-key=[rj6SQOAWSQGhAybWb27rAyJCLEObYd2X]")
        .then(res=>{
            console.log(res.data.results);
            this.setState({fetchdata:res.data.results});
        });
        
    } 
    render()
    {
        
        return (
            <>
        About selling books;
            <ul>(
                {this.state.fetch.map(fetchdata => <li>{fetchdata.display_name}
                    </li>)};
            </ul>
        
        </>
        )
    }

}
