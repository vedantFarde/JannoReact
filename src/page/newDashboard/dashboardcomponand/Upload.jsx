import React from "react";
import Doc from "./Doc";

function Upload({
  data,
  handelRemove,
  handelPreview,
  handeldownload,
  windowWidth,
  type,

  current,
}) {
  return (
    <>
      <div className="p-10  pb-0 pr-2 ">
        <div className="flex flex-col gap-3 ">
          {current === "DocAll" &&
            data.map((elem) => (
              <Doc
                elem={elem}
                handelRemove={handelRemove}
                handelPreview={handelPreview}
                handeldownload={handeldownload}
                type={type}
                windowWidth={windowWidth}
              />
            ))}
          {current === "DocPdf" &&
            data
              .filter((ele) => {
                return ele.Key.split("/")[1] === "pdf";
              })
              .map((elem) => (
                <Doc
                  elem={elem}
                  handelRemove={handelRemove}
                  handelPreview={handelPreview}
                  handeldownload={handeldownload}
                  type={type}
                  windowWidth={windowWidth}
                />
              ))}
          {current === "DocText" &&
            data
              .filter((ele) => {
                return ele.Key.split("/")[1] === "text";
              })
              .map((elem) => (
                <Doc
                  elem={elem}
                  handelRemove={handelRemove}
                  handelPreview={handelPreview}
                  handeldownload={handeldownload}
                  type={type}
                  windowWidth={windowWidth}
                />
              ))}
          {current === "DocHtml" &&
            data
              .filter((ele) => {
                return ele.Key.split("/")[1] === "html";
              })
              .map((elem) => (
                <Doc
                  elem={elem}
                  handelRemove={handelRemove}
                  handelPreview={handelPreview}
                  handeldownload={handeldownload}
                  type={type}
                  windowWidth={windowWidth}
                />
              ))}
        </div>
      </div>
    </>
  );
}

export default Upload;
