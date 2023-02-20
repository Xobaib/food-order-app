import React, { Fragment } from "react";
import HeaderCardButton from "./HeaderCardButton";
import styles from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg"; // importing an image for first time

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A tabel full of delicious foods!" />
      </div>
    </Fragment>
  );
};

export default Header;
