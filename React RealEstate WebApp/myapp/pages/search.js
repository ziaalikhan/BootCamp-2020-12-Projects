import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar/Navbar";
import SearchFilter from "../components/SearchFilter/SearchFilter";
import { BsFilter } from "react-icons/bs";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import PropertyCards from "../components/PropertyCards/PropertyCards";

function search({ properties }) {
    console.log(properties);
    const [searchFilter, setsearchFilter] = useState(false);

    const router = useRouter();

    return (
        <div>
            <Navbar />

            <div className={styles.search_Filter}>
                <p>
                    Search Filters{" "}
                    <span>
                        <BsFilter
                            onClick={() => setsearchFilter((val) => !val)}
                            className={styles.dropdown_Icons}
                        />
                    </span>
                </p>
            </div>
            {searchFilter && <SearchFilter />}
            <div>
                <h3>Properties {router.query.purpose}</h3>
            </div>
            <div className={styles.card_Container}>
                {properties.map((val) => {
                    return (
                        <div className={styles.cards}>
                            <PropertyCards propertyData={val} key={val.id} />
                        </div>
                    );
                })}
            </div>
            <div>
                {properties.length === 0 && (
                    <div>
                        <p>No Result Found.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export async function getServerSideProps({ query }) {
    const purpose = query.purpose || "for-rent";
    const rentFrequency = query.rentFrequency || "yearly";
    const minPrice = query.minPrice || "0";
    const maxPrice = query.maxPrice || "1000000";
    const roomsMin = query.roomsMin || "0";
    const bathsMin = query.bathsMin || "0";
    const sort = query.sort || "price-desc";
    const areaMax = query.areaMax || "35000";
    const locationExternalIDs = query.locationExternalIDs || "5002";
    const categoryExternalID = query.categoryExternalID || "4";

    const data = await fetchApi(
        `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
    );

    return {
        props: {
            properties: data?.hits,
        },
    };
}

export default search;
