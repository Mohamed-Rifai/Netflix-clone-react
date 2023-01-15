import React,{useEffect,useState} from 'react'
import Youtube from 'react-youtube'
import {API_KEY,imageUrl} from '../../constants/constants'
import './Rowpost.css'
import axios from '../../axios'
function RowPost(props) {
  const [movies,setMovie] = useState([])
  const [urlId,setUrlId] = useState('')
  useEffect(()=>{
     axios.get(props.url).then((res)=>{
     
       setMovie(res.data.results)
     }).catch(err=>{
      alert(err)
     })
  })

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id)=>{
    console.log(id);
  axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(res=>{
   
        if(res.data.results.length!==0){
          setUrlId(res.data.results[0])
          console.log('its working');
        }else{
          console.log('Array empty');
        }
    })
  }

  return (
    <div className='row'>
      <h1>{props.title}</h1>
      <div className="posters">
        {movies.map((movie)=>
 <img  onClick={()=>handleMovie(movie.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+movie.backdrop_path}`} alt="" />
        )}
       
       

      </div>
   {  urlId &&  <Youtube videoId={urlId.key} opts={opts}/> }
    </div>
  )
}

export default RowPost
