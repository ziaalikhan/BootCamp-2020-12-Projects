import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import { baseUrl, fetchApi } from '../../utils/fetchApi';


function Banner({ purpose, imageUrl, titleOne, titletwo, descOne, desctwo, buttonText }) {
    return (
        <div className="container">
            <div className="row" style={{ minHeight: "300px" }}>
                <div className="col-md-6 ">
                    <div className={styles.bannerimage}>
                        <Image src={imageUrl} width="500px" height="350px" alt="Rent Image" />
                    </div>
                </div>
                <div className="col-md-6 align-self-center">
                    <div className={styles.bannerDesc}>
                        <p>{purpose}</p>
                        <h3>{titleOne} <br /> {titletwo}</h3>
                        <p>{descOne} <br /> {desctwo}</p>
                        <button className={styles.bannerBtn}>{buttonText}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Banner;
