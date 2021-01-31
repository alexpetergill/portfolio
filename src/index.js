import React from "react";
import ReactDOM from "react-dom";
import "./css/lib/normalize.css";
import "./font-awesome/css/font-awesome.min.css";
import "./css/styles.css";

ReactDOM.render(<>
  <header>
  <div id="header">
  </div>
</header>
<main>
  <div id="main-content">
    <section>
      <div className="fx-fade-y">
        <h1>Alex Peter Gill</h1>
        <h2>Front-end Developer</h2>
        <hr className="fx-expand" />
      </div>
      <ul className="exchange-links fx-opacity">
        <li><a href="mailto:alexpetergill@icloud.com"
          title="Email Alex Gill"
          className="fa fa-envelope fx-scale"></a></li>
        <li><a href="http://stackoverflow.com/users/1266251/alex"
               title="Alex Gill on Stackoverflow"
               className="fa fa-stack-overflow fx-scale" target="_blank"></a></li>
        <li><a href="http://drupal.stackexchange.com/users/9227/alex-gill"
               title="Alex Gill on Drupal Answers" className="fa fa-drupal fx-scale"
               target="_blank"></a></li>
        <li><a href="http://codepen.io/alexgill/" title="Alex Gill on Codepen"
               className="fa fa-codepen fx-scale" target="_blank"></a></li>
        <li><a href="https://github.com/alexpetergill"
               title="Alex Gill on Github"
               className="fa fa-github fx-scale" target="_blank"></a></li>
        <li><a href="https://twitter.com/alexpetergill"
               title="Alex Gill on Twitter" className="fa fa-twitter fx-scale"
               target="_blank"></a>
        </li>
      </ul>
    </section>
  </div>
</main>
<footer>
  <div id="footer"></div>
</footer>
  </>, document.getElementById("root"));
