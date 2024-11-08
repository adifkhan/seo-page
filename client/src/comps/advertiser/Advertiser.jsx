import React from "react";
import styles from "./advertiser.module.css";
import { FaCamera } from "react-icons/fa";
import { MdReport } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import Ads from "./Ads";

const Advertiser = () => {
  return (
    <div className={styles.advertiser}>
      <div className={styles.top_container}>
        <h4>Capture with Lightshot</h4>
        <div className={styles.find_or_report}>
          <span>
            <FaCamera /> find similar
          </span>
          <span>
            <MdReport /> report abuse
          </span>
        </div>
        <div className={styles.post_nd_like}>
          <span>
            <FaXTwitter /> Post
          </span>
          <span>
            <BiLike /> Like 6
          </span>
        </div>
      </div>
      <div className={styles.ads_wrapper}>
        <Ads />
        <Ads />
      </div>
    </div>
  );
};

export default Advertiser;
