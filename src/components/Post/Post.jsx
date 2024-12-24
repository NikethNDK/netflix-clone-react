import './Post.css'
import YouTube from 'react-youtube'
import React, { useEffect } from 'react'
import {API_KEY,imageUrl} from '../../Constants/Constants'
import axios from '../../axios'
import { useState } from 'react'


 
function Post(props) {

    const opts= {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
    const [movie,setMovie]=useState([])
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
          // console.log(response.data.results[0])
          setMovie(response.data.results.slice(0,10))
        }).catch(err=>{
            alert('Netwrok Error')
        })
      },[])

    //a new state to store the id of the mov and pass it to youtube
    const [urlId,SetUrlId]=useState('')
    const handleTrailer=(id)=>{
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then(response=>{
            // console.log(reponse.data)
            if(response.data.results.lenght!==0){
                SetUrlId(response.data.results[0])
            }else{
                console.log('Trailer not available')
            }
        })

    }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="movie-grid">
        {
            movie.map((obj)=>(
                <div className='movie-card' key={obj.id}>
                <img onClick={()=>handleTrailer(obj.id)} src={`${imageUrl+obj.backdrop_path}`} alt="Movie Poster" className='poster' key={obj.id}/>
                <h5 className="movie-title">{obj.title}</h5>
            </div>
            ))
        }
        </div>
        {urlId && <YouTube videoId={urlId.key} opts={opts}/>}
    </div>
  )
}

export default Post
