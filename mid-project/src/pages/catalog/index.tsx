import React from 'react';
import styles from './Catalog.module.scss';
import { Link } from 'react-router-dom';

interface Props {}
interface RoomType {
  imgUrl: string;
  name: string;
}

const categories: RoomType[] = [
  {
    imgUrl:
      'https://psv4.userapi.com/c856328/u271414291/docs/d13/b21852cf9f97/1.png?extra=PJOx_Or71QhVmI1TU9GXnsqBGijLr2UZUEZGgohE4vOQ7Fo8u9NTFPo7zvtcuYZ-HNAVxV-EiWhAdZvY3VZQwUnZA8npmcvIHmsm9aK3_NBE5G0ksLlxdZONnOEcCUTTYMpMvhQjCvxdE1BWDbixqOq-',
    name: 'Kitchen Room',
  },
  {
    imgUrl:
      'https://psv4.userapi.com/c856328/u271414291/docs/d6/8e51293b6a03/3.png?extra=nkd0AUd4r96cHHeGM44vzn2EigFO8goz6OizHMHORrH_vQN0euEZC_kWIXfanoDI1Jc3KgS6mtap5cAWj0euw83cNEZwSnGN1TA04RcU4T3eFMlEDrTnWThFzdKAsZ1CGT4lZcMcg5UfAEBdDpj5qDtG',
    name: 'Living Room',
  },
  {
    imgUrl:
      'https://psv4.userapi.com/c856328/u271414291/docs/d18/b9ce6002f102/4.png?extra=EpfiTvuKM2awavJL95Q29rYz_t3T62232_DFilIUhoRd4nHcM6T6al7Ttix1VU6cZk9Ez6XuWNm8oQQc-d93eVuayFa88HsEzgQXKUtmiPvaNR00Z5sapQE2pxe7N8RTKWS7pltlwDWjc8BSXpi_MZj-',
    name: 'Bath Room',
  },
  {
    imgUrl:
      'https://psv4.userapi.com/c856328/u271414291/docs/d8/b28911024561/5.png?extra=gmARJVKMH5yN2Hn_4edCxkUfbqUym8QZZASdP3TBaQ3hYWdVfbb2zGbOZrZdOjlMYz2VZ7XQJOqjyEdoCO3h2wSlHL2zwmxOcDqWzdNgvCPE8oua57-CHOav-kwaEGNNN44ZXBcCTFkMFkEvpQ0MBDG5',
    name: 'Bed Room',
  },
  {
    imgUrl:
      'https://psv4.userapi.com/c856328/u271414291/docs/d12/6f20069560d3/6.png?extra=UPjaGNnDhVFOxuWvzZ3MTi03gttKAfEe7CP8fRzafpu6xmCasesbFmg-pJeNiyG6M6bpszfMlBO94VjeU7B4xLRajHWtHx9qU1KAD_eUM1kVxSsKQb5UKotiI3N8etStqG6bLiPUfGEMLRwExiPk9Hm9',
    name: 'Toilet Room',
  },
  {
    imgUrl:
      'https://psv4.userapi.com/c856328/u271414291/docs/d13/cac03f6a7851/7.png?extra=QHp86YP_P6dqrjw5Hb32Bjc1FXg37mr30siE7ccRoUkkQ5PoTsEv-BlMf3YSTVPayQs39IWnUyLafi1Tiws3uGho_54be89ssZ4HRMlXG72HWbigmZ8afQC2UT8fhhmDG8JSOTfIF8sZQ_6_Mm1Rl0G-',
    name: 'Kids Room',
  },
];
export const CatalogPage = (props: Props) => {
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
export default CatalogPage;
