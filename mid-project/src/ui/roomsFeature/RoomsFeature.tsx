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
      'https://psv4.userapi.com/c856328/u271414291/docs/d13/7d5ac211e76b/1.png?extra=EQ-YQ8_vLgI9bl0bLy9b2yvHk06UUJwpMjTBTmLdi8VsA3MRuYKeK14Ld6JASu6Y0qGu5s3jxUDrYWzBuMeT8AFAzJ5WIcSUhtMYNinQuNHnzxElJhOnOVQ72sN-5ZdAccseEcG4lfex_5KoHXwLuJC0',
    name: 'Kitchen Room',
  },
  {
    imgUrl:
      'https://psv4.userapi.com/c856328/u271414291/docs/d6/3df0bff14d30/3.png?extra=D0mFfhhtJdcgDYprNGuDhwhHTbc1nNwFz3Fyx8BTzFH9X_iqsC7-1uYvTXUzDoXmm317Z-f6Fw9nWokeQ0dWzLusRjMshNOeVMNeHQ-VPJUEGkPRLEINmh_683G_rW5EpSYrpJl7rRHnaWjZJsFfug1S',
    name: 'Living Room',
  },
  {
    imgUrl:
      'https://psv4.userapi.com/c856328/u271414291/docs/d18/cbfd9227d19a/4.png?extra=nEKLhCEHhggxuOntJaZDRKL3Ll2rOhv2KnCahe7g7XRpCSyfZh5xx0nmk1Yz-hVplWn6pvKhDu8ZO7Wz4p81s0lmVB-Zz5mB1_pRVJD_AoG3UsuKCZUDn_okdsyIVLnpfl6G4yMio27yCLisln8wKv5J',
    name: 'Bath Room',
  },
  {
    imgUrl:
      'https://psv4.userapi.com/c856328/u271414291/docs/d8/44717110d335/5.png?extra=_vPN3c8mzCUrl3OUZtPbL_IDAUGc5F_Hsq0Zw24R_MMATFunA_5vXGAXkCboOhRmjesECLGq86yQE_KLfamCBDUU5VhjUbhIelh1sF582bSuRP-VuD4EqME9n1cnLEQChx_tvAUp6wx6XXRk7kKuJwQd',
    name: 'Bed Room',
  },
  {
    imgUrl:
      'https://psv4.userapi.com/c856328/u271414291/docs/d12/f577d6964f10/6.png?extra=NMajb5jmSCxYRz4nLGnB8vf5Af7DAEkAodpw6JkCqkhG_IetmpTAvu5ATAOo5fgy8q3URQKgvesbg3AxKSJqjUpxPX2p14nTZapsu5GHov2rYZa5u_oUPeeZkcZSGQ3doRJtxlaiTml0_IGg3DEt3x5u',
    name: 'Toilet Room',
  },
  {
    imgUrl:
      'https://psv4.userapi.com/c856328/u271414291/docs/d13/ce6cf6d8f891/7.png?extra=bFUSy6NTh9fI6TO4nYznieozypDFKzQaxkmjF0ScAaqPHUTlQK1kdHNE87mwUiLsZyzhSreyHyg8NQODlzd7NSISHMfYEgErDIF2dH41Wc0zppdNjWXacxwVgWkABWS4Xon-bKciQQ6yXzXjNxugr0Ta',
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
