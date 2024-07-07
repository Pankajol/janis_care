// import Lottie from "lottie-react";
// import animationData from "./assets/Animation _data.json";
// import Slider from "react-slick";
import "./App.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { useEffect,useState } from "react";
import Home from "./componets/Home.jsx";

function App() {
  const [content,setContent] =useState('');
  const [loader,setLoader] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
         setLoader(false);
         setContent (
           <Home />
         )
    },3000);
  },[]);
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 1000,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  // };
  return (
    // <>
    //   <h1 className="text-3xl  text-yellow-300 font-bold underline">
    //     Hello janis!
    //   </h1>

    //   <div className=" flex items-center justify-center gap-40">
    //     <div className=" w-full">
    //       <Lottie animationData={animationData} className="" />
    //     </div>
    //     <div className="">
    //       <p className="text-cyan-100 w-full">
    //         Janis Care, incepted in 2020, is our initiative to take the battle
    //         against COVID-19 into our hands. The pandemic rocked the world, took
    //         many lives, and changed several other lives forever. People lost
    //         loved ones, jobs, and in the end, hope. The frontliners were doing
    //         their best but watching them suffer without proper, good quality,
    //         protective gear was heart-wrenching. We wanted to make a difference
    //         for society by helping it be protected and secure. We wanted to
    //         secure the frontliners so they could do their best to protect the
    //         infected. Thus, Janis Care was established.
    //       </p>
    //     </div>
    //   </div>

    //   {/* card silder */}
    //   <div className="w-3/4 m-auto">
    //    <div className="mt-20">
    //    <Slider {...settings}>
    //     {data.map((d)=>(
          
    //       <div className="bg-white gap-96 text-black rounded-xl">
    //         <div className="h-56 rounded-xl bg-indigo-500 flex items-center justify-center">
    //           <img src={d.img} alt="N95 Earloop" className="h-44 w-44 rounded-full" />
    //         </div>



    //         <div className="flex flex-col items-center justify-center">
    //           <h1 className="font-bold">{d.name}</h1>
    //         </div>

    //       </div>
         
    //     ))}
    //      </Slider>
    //    </div>
    //   </div>
    // </>
  <>
    <div >
        {
          loader ? (
            <div className=" flex items-center justify-center">
              <img src="./Spi.svg" alt="sp"  />
              </div>
          ):(
            content
          )
        }
      </div>
  </>
  
  );
}

// const data =[
//   {
//     name:`N95 Earloop1`,
//     img:`https://www.janiscare.com/wp-content/uploads/2021/11/JanisCare-N95-Earloop-01.jpg`,
//     content:`N95 Earloop`
//   },
//   {
//     name:`N95 Earloop2`,
//     img:`https://www.janiscare.com/wp-content/uploads/2021/11/JanisCare-N95-Earloop-01.jpg`,
//     content:`N95 Earloop`
//   },
//   {
//     name:`N95 Earloop3`,
//     img:`https://www.janiscare.com/wp-content/uploads/2021/11/JanisCare-N95-Earloop-01.jpg`,
//     content:`N95 Earloop`
//   },
//   {
//     name:`N95 Earloop3`,
//     img:`https://www.janiscare.com/wp-content/uploads/2021/11/JanisCare-N95-Earloop-01.jpg`,
//     content:`N95 Earloop`
//   },
//   {
//     name:`N95 Earloop3`,
//     img:`https://www.janiscare.com/wp-content/uploads/2021/11/JanisCare-N95-Earloop-01.jpg`,
//     content:`N95 Earloop`
//   },
//   {
//     name:`N95 Earloop3`,
//     img:`https://www.janiscare.com/wp-content/uploads/2021/11/JanisCare-N95-Earloop-01.jpg`,
//     content:`N95 Earloop`
//   },
// ]
export default App;
