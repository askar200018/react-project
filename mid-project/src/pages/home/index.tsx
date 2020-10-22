import React from 'react';
import './home.css';
import HomeCards from "../homeCards/HomeCards"
import {Card} from "../homeCards/HomeCards"


export const cards: Card[] = [
  {
   imageUrl:"https://psv4.userapi.com/c856328/u271414291/docs/d8/3219d8658464/5.png?extra=U4qQnDFiC_vGkjxtCGeeS1_GiNyCzmvhbYv3MHo74eUK-AHF2fCvbPaWOoRW9G3MHb3GtNNr-k-13qRpIMB9Tw3pfSDg8UGtynup8PAzbY2cnzwK0xkUItXN_7LXJ57jONxFMRAoi6PjbODfnjx7L_oZ",
   name:"Bed Room"
  },
  {
  imageUrl:"https://psv4.userapi.com/c856328/u271414291/docs/d13/5e492d76ee63/1.png?extra=6wb66Pp2goHNQDVxiSNDad-SmxuCF7hGpWWZ3yscHoLjpXJn3xbGX9SsGp2JNVN_cuB_Ivm3DKZ8kNNHmoUusy_coj2LAbkvcZN4EpAT0esgHsvcCilqDhIE6h5bmQrsqbJR_3huAxG17IibwBLy6w0Z",
  name:"Kitchen Room"
  },
  {
  imageUrl:"https://psv4.userapi.com/c856328/u271414291/docs/d18/25bb3e6a83e0/4.png?extra=R9cjz1LF1DCKiwsUkZ94UZwqHS6-ttwTOZHJX77Fgsy1-Wu7bFOnfqY7ag3da2S1PK8OfvMrZDNGqI0nbs9zRmPyMKtIJzt6x3u4mzuw1Gg1tJT23QAzjOTQppaU2hG7qXfsk9K0-sdNEvCOBxcWARIw",
  name:"Bath Room"
  },
  {
  imageUrl:"https://psv4.userapi.com/c856328/u271414291/docs/d12/e040bc2f824e/6.png?extra=kXg8Y84F1ztYrzRdRP-LeblSqEVUzRlGxdhkxgeNBJvmsJqHyDSb0mWR72JmRVOdJId7nshIfRck7lk9u5rBsHfgxppSVFy5a0NTp0pMBkTvSblHzVdCTeprkqQdu7QtWoPnOCZcywmhxIArpW0GydMc",
  name:"Toilet Room"
  },
  {
  imageUrl:"https://psv4.userapi.com/c856328/u271414291/docs/d6/1a94c5d73e94/3.png?extra=dfXXpFoxIM-gfyt-Q1eQIqSvNouL5UKXzn9YZgKF5Eg2g1o5JGhuoDGW5Fn2Dc2mS89k9TifmyXQeOvQOtYnUzbNLdbwf9ttw-SYXA_KgUQOuiAb7qu-HqLcT5geeIO-ujkOBX_KPWtI25YVAzMUG4Kh",
  name:"Living Room"
  },
  {
  imageUrl:"https://psv4.userapi.com/c856328/u271414291/docs/d13/0f157e4b921d/7.png?extra=INqdHh36QgEHDu3sPz6NVvjJObb6yRExitQUvqYb0xdQk60dY9eTvOF2lGErSKt9RDLsChcz45O2o0X4242KJZUlBs0dUgDaEhd5Jhj_GtDS4wK2jJ1HAm26hvnFc6VFYLQohtZXSrHm0_Iv6XTCr4qU",
  name:"Kids Room"
  },
 ]

export const Home: React.FC = () => {
  return (
    <main className="page page--home">
      <div className="header">
        <div className="wrapper-title">
          <h1 className="title">DREAM HOUSE</h1>
        </div>
      </div>
      <div>
        <HomeCards cards={cards} />
      </div>
    </main>
  );
};
