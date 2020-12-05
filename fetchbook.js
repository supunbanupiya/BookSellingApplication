import React from 'react';
import axios from 'axios';

export default class Fetchbook extends React.fetchbook{
    
    state ={
        fetchbook:[],
    };
    
    componentDidMount(){
        axios.get("https://api.nytimes.com/svc/books/v3/lists.json?api-key=[rj6SQOAWSQGhAybWb27rAyJCLEObYd2X]")
        .then(res=>{
            console.log(res.data.results);
            this.setState({fetchbook:res.data.results});
        });
        
    } 
    render()
    {
        
        return (
            <>
         selling books;
            <ul>
                {this.state.fetchbook.map(fetchbook => <li>{fetchbook.list_name}<a href="#" style={{color:'#fff',transition:'0.2s ease-out',textAlign:'center', padding:'0.1rem 0.1rem',border:'none',background:'#e31837',outline:'none !important',fontSize:'0.6rem'}}>
                   Details
                    </a>
                    </li>)}
            </ul>
        
        </>
        )
    }

}
