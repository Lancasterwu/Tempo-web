import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import Images from "./index-sections/Images.js";
import BasicElements from "./index-sections/BasicElements.js";
import Navbars from "./index-sections/Navbars.js";
import Tabs from "./index-sections/Tabs.js";
import Pagination from "./index-sections/Pagination.js";
import Notifications from "./index-sections/Notifications.js";
import Typography from "./index-sections/Typography.js";
import Javascript from "./index-sections/Javascript.js";
import Carousel from "./index-sections/Carousel.js";
import NucleoIcons from "./index-sections/NucleoIcons.js";
import CompleteExamples from "./index-sections/CompleteExamples.js";
import SignUp from "./index-sections/SignUp.js";
import Examples from "./index-sections/Examples.js";
import Download0 from "./index-sections/Download0.js";
import Download from "./index-sections/Download.js";
import Download2 from "./index-sections/Download2.js";
import Download3 from "./index-sections/Download3.js";
import Download4 from "./index-sections/Download4.js";
import Download5 from "./index-sections/Download5.js";
import Download6 from "./index-sections/Download6.js";
import Download7 from "./index-sections/Download7.js";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
        <div className="main">
          <Download0 />
          <Download />
          <Download2 />
          <Carousel />
          <Download3 />
          <Download4 />
          <Download5 />
          <Download6 />
          <Download7 />
          <BasicElements />
          <Pagination />
        </div>
    </>
  );
}

export default Index;
