import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RoomsFeature.module.scss';

interface Props {}

interface RoomType {
  imgUrl: string;
  name: string;
}

const categories: RoomType[] = [
  {
    imgUrl:
      'https://psv4.userapi.com/c856328/u271414291/docs/d13/641bf3ea9e94/1.png?extra=uF_vGWKX_Z9jfRfM3PV3IGIxei7KvdWgEeuULJqjvGXhHoMJ_-AwtAF9c1agHxVxXePzUJazRtOC58EooBXfuosc3RKisCitnNE3d9qqchzdMnBnK204PJlDf8vbQJYood6BeIiLtlFOPNybbPT5LESX4g',
    name: 'Kitchen Room',
  },
  {
    imgUrl:
      'https://psv4.userapi.com/c856328/u271414291/docs/d6/1fca258a4ff1/3.png?extra=KH9chMFailURjQJPjFPpW2GpOOfd_iH0rNzBmg7Dqclcx5NYxdPO5n7cVHq2RJbRdd8VWf4S_XyfVHfJDu-RZhyTasRyhWtXO8aaW7SRxyeALPvC_Go8M_rCOc4ncGyDRDuRrBTIzZVVarWILGulVHvn7g',
    name: 'Living Room',
  },
  {
    imgUrl:
      'https://psv4.userapi.com/c856328/u271414291/docs/d18/34197f974e99/4.png?extra=lRR4BarjaYhgNjfZ-YmDgOLPJSWUwGeEW2QiT4D2HXQwcXm6p9icIWJ7NNLeyqhFt5M0MPy_44-otDaVLUXNcWlLf3kd9cvfUq0jlV8d2MYJkUfm_hzIf_kvydrEfM0ocPv5SxDy0dN0vpe6gu9tlFAjYw',
    name: 'Bath Room',
  },
  {
    imgUrl:
      'https://psv4.userapi.com/c856328/u271414291/docs/d8/b1c4f6033c7b/5.png?extra=mMJQMu8quZfg0fr9aUwIJPa8KvV0dNFWQE-9zWkMcnH-qWCZnw3-TVtHHPgTJVbD4GmCPTKXVH6r2pi02iy5MaJSpqr3AcYZYPdj25CDOs1OtiI2PjKAYDPJMMUEyt9HYsbhZBNfWcQB8EEdVaqFF0Dj',
    name: 'Bed Room',
  },
  {
    imgUrl:
      'https://psv4.userapi.com/c856328/u271414291/docs/d12/7dc781c10a5b/6.png?extra=-q8w17wg1CEzkRsR7KiN1dhEIKjMjgla3y__EgaVZ7L5ZPIRyX6NHqjuZ-TalmMQCCnigZriPYwcBJhqO0qVZs2SwRwxVCY7tzsxZqE0Rto9jQvMYIE8tdU1TX0RyEV-ucs2y7o7pJfl6Ds0vn6b22o2',
    name: 'Toilet Room',
  },
  {
    imgUrl:
      'https://psv4.userapi.com/c856328/u271414291/docs/d13/7e2c9ee3be44/7.png?extra=097UgT1x8mpWgyZ-npc3VYCeiirxBoN6BhUd7s9rcgg_gOQOqF31SYSklaymKRAT6ghV9NFkSboUfLx9x6vLa0jcx6c4PBN3ni4B53ECWT4gsuy_YZDRlkWGCdExYD7cN8N0oK265ch44WI-4pONkCR9',
    name: 'Kids Room',
  },
];

const RoomsFeature = (props: Props) => {
  return (
    <div className={styles.rooms}>
      <h1 className={styles.title}>All Cateogories</h1>
      <div className={styles.wrap}>
        {categories.map((room, index) => {
          return (
            <div className={styles.card} key={index}>
              <div className={styles.card_pic_wrap}>
                <Link to="/">
                  <img src={room.imgUrl} alt="A leafy plant" />
                </Link>
              </div>
              <div className={styles.card_content}>
                <h3 className={styles.card_name}>{room.name}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoomsFeature;
