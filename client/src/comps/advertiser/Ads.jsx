import React from "react";
import styles from "./advertiser.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";

const Ads = () => {
  return (
    <div>
      <p style={{ fontSize: "1.2rem", color: "#0059a5", cursor: "pointer" }}>
        Report misleading ad
      </p>
      <div className={styles.ads}>
        <img
          src="https://scontent.fdac15-1.fna.fbcdn.net/v/t39.30808-6/327348394_1248859505711243_2750035139846531976_n.png?stp=dst-png_p130x130&_nc_cat=1&ccb=1-7&_nc_sid=4cb600&_nc_eui2=AeGpYAorEZD0AeUnHnFmCDdo9noBTAwzZ6D2egFMDDNnoAtg7QkMalFTdYbuhe1mmbs-PRuuqzclUeo710APoytO&_nc_ohc=_p8-uz_TousQ7kNvgH_CkOJ&_nc_zt=23&_nc_ht=scontent.fdac15-1.fna&edm=ANSO7JkEAAAA&_nc_gid=AT42oMhPi_ufCzGaLtxAfOY&oh=00_AYC-I-UFucZ-limd44t9kHfoOvGQFcNPIUICGKvv6-Ub5Q&oe=673246E5"
          alt="Advertiser"
          width="100%"
          height="100%"
        />
        <div className={styles.contents}>
          <div className={styles.fb_page}>
            <img
              src="https://scontent.fdac15-1.fna.fbcdn.net/v/t39.30808-1/327314350_958311831838235_9193609540550948483_n.jpg?stp=cp0_dst-jpg_s50x50&_nc_cat=1&ccb=1-7&_nc_sid=6738e8&_nc_eui2=AeGlFGJboNmCkLrv9O0f2YlgykeH8vYlaaLKR4fy9iVporgaHBgTQaFYlNpjJYZMZK2jHuiBb4dUxXDFIna0V-sa&_nc_ohc=-BrWQBSliHwQ7kNvgHmTwno&_nc_zt=24&_nc_ht=scontent.fdac15-1.fna&edm=ANSO7JkEAAAA&_nc_gid=AT42oMhPi_ufCzGaLtxAfOY&oh=00_AYCl_O-wBr45uhpySZAlXiQNrojllsY_tyOTXUSl3IpC2Q&oe=67326A1A"
              alt="facebook img"
            />
            <div>
              <h4>LightShot</h4>
              <p>384,992 followers</p>
            </div>
          </div>
          <div className={styles.bottom_container}>
            <span>
              <FaFacebookSquare color="#1877f2" /> Follow page
            </span>
            <span>
              <IoIosShareAlt /> Share
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;
