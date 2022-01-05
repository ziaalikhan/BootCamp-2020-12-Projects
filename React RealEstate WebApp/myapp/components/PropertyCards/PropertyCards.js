import React from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { FaBed, FaBath } from "react-icons/fa";
import millify from "millify";
import { Avatar } from "@chakra-ui/avatar";

function PropertyCards({
    propertyData: {
        price,
        coverPhoto,
        rentFrequency,
        rooms,
        title,
        baths,
        area,
        agency,
        isVerified,
        externalID,
    },
}) {
    return (
        <div>
            <Link href={`/propertyData/${externalID}`} passHref>
                <a>
                    <div>
                        <Image
                            layout="responsive"
                            src={coverPhoto ? coverPhoto.url : "Image"}
                            width={90}
                            height={45}
                            alt="House Images"
                        />
                    </div>
                    <div className={styles.card_Desc}>
                        <div>
                            <p className={styles.paraGraphs}>
                                {isVerified && <GoVerified style={{ color: "green" }} />}{" "}
                                <span style={{ paddingLeft: "10px" }}>
                                    AED {millify(price)}
                                    {rentFrequency && `/${rentFrequency}`}
                                </span>
                            </p>
                            {/* <span>{isVerified && <GoVerified style={{color: "green"}} />} <span>Aed {price}</span></span> */}
                        </div>
                        <div>
                            <Avatar
                                size="sm"
                                src={agency.logo.url}
                                width="30px"
                                height="30px"
                            />
                        </div>
                    </div>
                    <div>
                        <p className={styles.paraGraphs}>
                            {rooms}
                            <span style={{ paddingLeft: "10px" }}>
                                <FaBed /> |{" "}
                            </span>
                            {baths}
                            <span style={{ paddingLeft: "10px" }}>
                                <FaBath />
                            </span>
                            <span>
                                {" "}
                                | {millify(area)} sqft | <BsGridFill />
                            </span>
                        </p>
                    </div>
                    <div>
                        <p>{title.length > 30 ? `${title.slice(0, 30)}...` : title} </p>
                    </div>
                </a>
            </Link>
        </div>
    );
}

export default PropertyCards;
