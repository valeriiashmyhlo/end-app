import React from "react";
import styles from "./Logo.module.css";

const Logo = () => (
  <div className={styles.app}>
    <svg width="123" height="45" viewBox="0 0 123 45">
      <defs>
        <path d="M0 44.83h123.537V0H0z"></path>
      </defs>
      <path fill="currentColor"
            d="M0 0v44.83h24.167v-7.575H8.595V25.458h11.398v-7.576H8.595V7.575h14.948V0zM57.488 0v26.575h-.124L45.405 0H36v44.83h7.848V15.896h.123l13.143 28.936h8.222V0zM80 0h11.958c9.842 0 15.323 4.222 15.696 15.523v13.784c-.373 11.3-5.854 15.523-15.696 15.523H80V0zm8.595 37.255h2.99c4.734 0 7.474-2.235 7.474-8.94V16.516c0-6.334-2.118-8.942-7.474-8.942h-2.99v29.68zM114 44.817h8.844V36H114z"
            fillRule="evenodd"></path>
    </svg>
  </div>
);

export default Logo;