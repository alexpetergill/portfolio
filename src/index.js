import React from "react";
import ReactDOM from "react-dom";
import "./css/lib/normalize.css";
import "./font-awesome/css/font-awesome.min.css";
import "./css/styles.css";

function ExchangeListItem({ item }) {
  const { href, title, classes } = item;
  return (
    <li><a href={href} title={title} className={classes} target="_blank"></a></li>
  );
}

function ExchangeList(props) {
  return (
    <ul className="exchange-links fx-opacity">
      {props.items.map((item, index) => (
        <ExchangeListItem key={index} item={item} />
      ))}
    </ul>
  );
}

const exchangeListItems = [
  {
    href: "mailto:alexpetergill@icloud.com",
    title: "Email Alex Gill",
    classes: "fa fa-envelope fx-scale"
  },
  {
    href: "http://stackoverflow.com/users/1266251/alex",
    title: "Alex Gill on Drupal Answers",
    classes: "fa fa-stack-overflow fx-scale"
  },
  {
    href: "http://drupal.stackexchange.com/users/9227/alex-gill",
    title: "Alex Gill on Stackoverflow",
    classes: "fa fa-drupal fx-scale"
  },
  {
    href: "http://codepen.io/alexpetergill/",
    title: "Alex Gill on Codepen",
    classes: "fa fa-codepen fx-scale"
  },
  {
    href: "https://github.com/alexpetergill",
    title: "Alex Gill on Github",
    classes: "fa fa-github fx-scale"
  },
  {
    href: "https://twitter.com/alexpetergill",
    title: "Alex Gill on Twitter",
    classes: "fa fa-twitter fx-scale"
  }
]

function App() {
  return(
    <>
      <header><div id="header"></div></header>
      <main>
        <div id="main-content">
          <section>
            <div className="fx-fade-y">
              <h1>Alex Peter Gill</h1>
              <h2>Front-end Developer</h2>
              <hr className="fx-expand" />
            </div>
            <ExchangeList items={exchangeListItems} />
          </section>
        </div>
      </main>
      <footer><div id="footer"></div></footer>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));


