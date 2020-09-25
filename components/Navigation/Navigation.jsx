import React, {useState} from 'react';
import clsx from "clsx";
import styles from "./Navigation.module.css";
import {useFetchData} from "../../hooks";

const parseData = (data) => {
  const newData = {};
  for (const item of data) {
    newData[item.category_path] = item;
  }
  return newData;
};

const URL = 'http://localhost:8080/data';

const Navigation = () => {
  const [opened, setOpened] = useState(null);
  const [navData, navError, navLoading] = useFetchData(URL);

  if (navLoading) {
    return  <div>loading</div>;
  }

  if (navError) {
    return  <div>error</div>;
  }

  const categories = parseData(navData.navCatagories);

  return (
    <div className={styles.dropdown} onMouseLeave={() => setOpened(null)}>
      <div className={styles.list}>
        {Object.keys(categories).map(key =>
          <a
            key={key}
            className={styles.link}
            onMouseEnter={() => setOpened(key)}
          >
            {key}
          </a>
        )}
      </div>
      <div className={clsx([styles.content, {[styles.open]: !!opened}])}>
        <div className={styles.contentWrap}>
          <div className={styles.contentColumn}>
            {opened && categories[opened].children_data.map(elem =>
              <a key={elem.name}>{elem.name}</a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Navigation;
