import React from 'react'
import { Posters } from '../Posters/index.js'
import './movies.css'
const continueWatching = [
  "https://nypost.com/wp-content/uploads/sites/2/2022/12/jackryan.jpg?resize=1064,692&quality=75&strip=all",
  "https://m.media-amazon.com/images/I/510UmdDAn5L._SY300_SX300_QL70_FMwebp_.jpg",
  "https://tse1.mm.bing.net/th?id=OIP.lguaUNjLWyve_ZYw8UiwzQAAAA&pid=Api&P=0&h=180",
  "https://phantom-marca.unidadeditorial.es/8f632cf0ffeaab99004070b9451ab4cf/resize/828/f/jpg/assets/multimedia/imagenes/2022/04/08/16493821207416.jpg",
  "https://www.flickonclick.com/wp-content/uploads/2022/12/Jailer-Movie-Budget-and-Cast-Rajinikanth-Starrer-is-a-Big-Money-Film-1024x576.webp",
  "https://cdn.wallpapersafari.com/53/79/ajwtby.jpg",
  "https://i.pinimg.com/474x/20/05/48/200548127f9d2266c0e2e2b4955acd3c.jpg",
  "https://tse3.mm.bing.net/th?id=OIP.K2f9mcF0_Ob1xplTZGN9AAHaEK&pid=Api&P=0&h=180",
  "https://mcdn.wallpapersafari.com/medium/85/98/6JRrHP.jpg",
  "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/10/01/16330975108719.jpg",
  "https://besttoppers.com/wp-content/uploads/2020/09/money-heist-season-5.jpg",
  "https://i.pinimg.com/474x/20/05/48/200548127f9d2266c0e2e2b4955acd3c.jpg",
  "https://files.prokerala.com/movies/pics/800/movie-posters-22495.jpg",
  "https://cdn.wallpapersafari.com/53/79/ajwtby.jpg"
];

const watchingYourLanguage = [
  "https://res.cloudinary.com/dqe4ld4cx/image/upload/v1697017840/ScreenshotHindi_tm87uc.png",
  "https://res.cloudinary.com/dqe4ld4cx/image/upload/v1697018035/ScreeshotEnglish.png",
  "https://res.cloudinary.com/dqe4ld4cx/image/upload/v1697018161/ScreenshotTelugu_btpzw8.png",
  "https://res.cloudinary.com/dqe4ld4cx/image/upload/v1697018431/ScreenshotTamil_suc605.png",
  "https://res.cloudinary.com/dqe4ld4cx/image/upload/v1697019574/ScreenshotMalayalam_o8a9gk.png",
  "https://res.cloudinary.com/dqe4ld4cx/image/upload/v1697019926/ScreenshotKannada_rl2lcx.png",
  "https://res.cloudinary.com/dqe4ld4cx/image/upload/v1697020072/ScreenshotMarathi_pvddvj.png",
  "https://res.cloudinary.com/dqe4ld4cx/image/upload/v1697020208/ScreenshotPunjabi_d4jp0n.png"
];

const toprated = [
  "https://nypost.com/wp-content/uploads/sites/2/2022/12/jackryan.jpg?resize=1064,692&quality=75&strip=all",
  "https://static-koimoi.akamaized.net/wp-content/new-galleries/2021/06/the-family-man-review-001.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Farzi.jpeg/330px-Farzi.jpeg",
  "https://images.ottplay.com/images/mumbai-diaries-watch-now-amazon-original-youtube-thumbnail-1645006198364-1645006198.jpg?impolicy=ottplay-20210210&width=1200&height=675",
  "https://filmycharcha.com/wp-content/uploads/2023/07/web-2023-07-07T121958.216-860x484.jpg",
  "https://assets-in.bmscdn.com/discovery-catalog/events/et00353997-swlucaglwy-landscape.jpg",
  "https://imgeng.jagran.com/images/2023/aug/BRO%20Box%20Office%20Collection%20day%20111691469017747.jpg",
  "https://ntvb.tmsimg.com/assets/p10700229_b_h10_aa.jpg?w=960&h=540",
  "images/small-movie8.jpg",
  "images/small-movie8.jpg"
];

const teluguMovies = [
  "https://images.cinemaexpress.com/uploads/user/imagelibrary/2017/7/8/original/Ninnu-Kori_571BF1-D3C15C.jpg",
  "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f5ae3ae5cca4c56b08cd100532e4076a5f005ef13004a92988eef82942be0b61._UY500_UX667_RI_TTW_.jpg",
  "https://img.onmanorama.com/content/dam/mm/en/entertainment/entertainment-news/images/2020/11/28/master-vijay-movie.jpg",
  "https://telugu.filmibeat.com/img/2022/07/mayon-12-1657190177.jpg",
  "https://assets-in.bmscdn.com/discovery-catalog/events/et00362340-lvthbcqmya-landscape.jpg",
  "https://images.indianexpress.com/2019/07/dear-comrade-759-1.jpg",
  "https://data1.ibtimes.co.in/en/full/731173/vishwak-sens-hit-movie-poster.jpg?h=450&l=50&t=40",
  "https://i1.wp.com/dranshublog.com/wp-content/uploads/2019/01/tumbbad-movie.jpg?fit=706%2C437&ssl=1",
  "https://content.tupaki.com/en/feeds/2023/08/25/149219-d.webp",
  "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/31eb702d1011ff85635879f7dde74eefe158a81e71fc1de63464bd620c23973c._UY500_UX667_RI_TTW_.jpg",
  "https://img.onmanorama.com/content/dam/mm/en/entertainment/entertainment-news/images/2020/11/28/master-vijay-movie.jpg"
];

const hindiMovies = [
  "https://i1.wp.com/dranshublog.com/wp-content/uploads/2019/01/tumbbad-movie.jpg?w=706&ssl=1",
  "https://tse1.mm.bing.net/th?id=OIP.lguaUNjLWyve_ZYw8UiwzQAAAA&pid=Api&P=0&h=180",
  "https://static.toiimg.com/thumb/69276105.cms?width=680&height=512&imgsize=154458",
  "https://img.theweek.in/content/dam/week/review/movies/2019/images/2019/hrithik-tiger-war.jpg",
  "https://filmfare.wwmindia.com/content/2023/aug/chakdeindia101691652438.jpg",
  "https://assets-in.bmscdn.com/discovery-catalog/events/et00353997-swlucaglwy-landscape.jpg",
  "https://imgeng.jagran.com/images/2023/aug/BRO%20Box%20Office%20Collection%20day%20111691469017747.jpg",
  "https://ntvb.tmsimg.com/assets/p10700229_b_h10_aa.jpg?w=960&h=540",
  "images/small-movie8.jpg",
  "images/small-movie8.jpg"
];

const anime = [
  "https://cdn.wallpapersafari.com/14/67/Hea84M.jpg",
  "https://3.bp.blogspot.com/-n2GYoPPS-qE/VoIA6TMVIjI/AAAAAAAAAfQ/NeeLsVfIIZ8/s1600/OnePieceMovie2.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbwwIIMq53XgMY5Dvh04YfTJQ_5XQLdq6dw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1pdVOlQX0UJ_QkM7bq4ZUhNJzNriA_PtocQ&usqp=CAU",
  "https://m.economictimes.com/thumb/msid-103721626,width-1280,height-720,resizemode-4,imgsize-133524/where-to-read-jujutsu-kaisen-chapter-236-check-release-date-time-and-all-you-may-want-to-know.jpg",
  "https://www.konami.com/games/castlevania/s/img/info/info_gos_eu.jpg",
  "https://www.cyberpunk.net/build/images/edgerunners/gallery/s1-poster-thumbnail-5d4f3af2.jpg",
  "https://occ-0-1393-299.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRcCxZ2V6uoTIUZOoMwdNATKkbP-Bt6frHBMKa-I6Rj00NUx-HAbfbrfygYfw_fQMqv5aASqoq_eef5wXo_rANmCCuvB6iJH5FTPueDStx_e1RT4szZJFBQNwnWFRTeu7LBjzQ.jpg?r=a94"
];

const comedyMovies = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFOo_dh0X-V_MitA7Q1vdeiYBD-AfytdMaBg&usqp=CAU",
  "https://cdn.gulte.com/wp-content/uploads/2022/05/l65920220425185628.webp",
  "https://www.telugubulletin.com/wp-content/uploads/2019/07/mumbai_10727560602019_06_25_07_03_54-768x432.jpg",
  "https://static-koimoi.akamaized.net/wp-content/new-galleries/2017/11/coco-movie-review-magical-ride-wish-never-end-1.jpg",
  "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXw2_J0Y7mNW6EeVWn3kACAEpIKjuF73u4gWbdNhCKlPgtRmcKgxCKTa6WnxmQCiCpKfdd4bfjTI3gbADabEoTEqCxDpRKqWA9Qh.jpg?r=d67",
  "https://image.tmdb.org/t/p/original/e45Z6QREa3PptqUfApiqaMoK2dq.jpg",
  "https://tse1.mm.bing.net/th?id=OIP.DbD6qj_3JsKZgEa6cuU_BwHaEK&pid=Api&P=0&h=180",
  "https://2.bp.blogspot.com/-SbIeOjHHDI4/WPfTHVw9zyI/AAAAAAAAD0Q/VFB1F5dO4CUVYdsjAKultM5F7xXwzTkOQCLcB/s1600/the-boss-baby-5804e356b16d9.png"
];

const Movies = () => {
  return (<>
  <div className='large-content'>
    <div className="row">
      <div><h1 className=' m-3 pl-3 fixed'>Continue Watching</h1></div>
      <div className="row-img" id='continueWatching'>
        {continueWatching.map((movie, index) => ( 
              <Posters key={index} src={movie} />
        ))}
      </div>
    </div>
    <div className="row">
      <div><h1 className=' m-3 pl-3 fixed'>Watch In Your Language</h1></div>
      <div className="row-img" id='continueWatching'>
        {watchingYourLanguage.map((movie, index) => ( 
              <Posters key={index} src={movie} />
        ))}
      </div>
    </div>
    <div className="row">
    <div><h1 className=' m-3 pl-3 fixed'>Top Rated</h1></div>
      <div className="row-img">
        {toprated.map((movie, index) => (
                        <Posters key={index} src={movie} />

        ) )}
      </div>
    </div>
    <div className="row">
    <div><h1 className=' m-3 pl-3 fixed'>Telugu Movies</h1></div>
      <div className="row-img">
        {teluguMovies.map((movie, index) => (
                        <Posters key={index} src={movie} />

        ) )}  
      </div>
    </div>
    <div className="row">
    <div><h1 className=' m-3 pl-3 fixed'>Hindi Movies</h1></div>
      <div className="row-img">
        {hindiMovies.map((movie, index) => (
                        <Posters key={index} src={movie} />

        ) )}
      </div>
    </div>
    
    <div className="row">
    <div><h1 className=' m-3 pl-3 fixed'>Anime Series</h1></div>
      <div className="row-img">
        {anime.map((movie, index) => (
                        <Posters key={index} src={movie} />

        ) )}
      </div>
    </div>

    <div className="row">
    <div><h1 className=' m-3 pl-3 fixed'>Comedy Movies</h1></div>
      <div className="row-img">
        {comedyMovies.map((movie, index) => (
                        <Posters key={index} src={movie} />

        ) )}
      </div>
    </div>

    </div>
  
    
    </>
  )
}

export default Movies