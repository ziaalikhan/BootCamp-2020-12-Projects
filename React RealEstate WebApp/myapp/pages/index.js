import styles from "../styles/Home.module.css";
import Head from "next/head";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import RentImage from "../assets/images/rentImage.jpg";
import BuyImage from "../assets/images/buyImage.jpg";
import PropertyCards from "../components/PropertyCards/PropertyCards";

export default function HomeIndex({ propertyForSale, propertyForRent }) {
  console.log("Api Data===>>>>", propertyForSale, propertyForRent);
  return (
    <div>
      <Head>
        <title>Real State </title>
      </Head>
      <Navbar />
      <Banner
        purpose="RENT A HOME"
        imageUrl={RentImage}
        titleOne="Rental Homes for"
        titletwo="Everyone"
        descOne="Explore Apartment Villas, Homes "
        desctwo="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
      />

      <div className={styles.card_Container}>
        {propertyForRent.map((val) => {
          return (
            <div className={styles.cards}>
              <PropertyCards propertyData={val} key={val.id} />
            </div>
          );
        })}
      </div>

      <Banner
        purpose="BUY A HOME"
        imageUrl={BuyImage}
        titleOne="Find, Buy & Your Own"
        titletwo="Dream Home"
        descOne="Explore Apartment Villas, Homes "
        desctwo="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
      />
      <div className={styles.card_Container}>
        {propertyForSale.map((val) => {
          return (
            <div className={styles.cards}>
              <PropertyCards propertyData={val} key={val.id} />
            </div>
          );
        })}
      </div>
      {/* <Banner /> */}
    </div>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertyForSale: propertyForSale?.hits,
      propertyForRent: propertyForRent?.hits,
    },
  };
}
