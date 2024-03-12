import React from "react";
import CrawlLink from "./weblinkcom/Crawllink";
import FormFieldsList from "./weblinkcom/FormFieldsList";

function Weblink() {
  return (
    <div>
      <CrawlLink />
      <FormFieldsList type="includedLinks" />
      <FormFieldsList type="excludedLinks" />
    </div>
  );
}

export default Weblink;
