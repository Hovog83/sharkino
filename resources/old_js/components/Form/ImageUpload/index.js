/* eslint-disable no-undef */
import React, { useCallback, memo, useState } from "react";
import PropTypes from "prop-types";
import s from "./upload.module.scss";
import Loading from "../../Loading";
import defaultImage from "../../../assets/img/trucks.jpg";

function ImageUpload({ handleChagne, readonly, rest }) {
  const [isLoading, setLoading] = useState(false);
  const [file, setFile] = useState(false);

  const onChange = useCallback(
    acceptedFiles => {
      setLoading(true);
      let formData = new FormData();
      formData.append("file", acceptedFiles.files[0]);
      fetch(`${process.env.REACT_APP_API_URL}upload/attachments`, {
        method: "POST",
        body: formData
      })
        .then(async res => {
          if (res.ok) {
            let images = await res.json();
            setFile(images.image[0].filename);
            handleChagne(images.image[0].filename);
          }
        })
        .catch(e => {
        })
        .finally(() => setLoading(false));

      // if (input.files && input.files[0]) {
      //   // eslint-disable-next-line no-undef
      //   var reader = new FileReader();
      //   reader.onload = function(e) {
      //     setFile(e.target.result);
      //     setLoading(false);
      //     // handleChagne(e.target.result)
      //   };
      //   reader.readAsDataURL(input.files[0]);
      // }
    },
    [handleChagne]
  );

  if (isLoading) return <Loading width="5%" height="5%" />;
  return (
    <div className={s.upload}>
      <div className={s.image}>
        <img
          src={
            file
              ? `${process.env.REACT_APP_API_URL}upload/${file}`
              : defaultImage
          }
          alt="Car"
        />
      </div>
      <label htmlFor="upload">Choose File</label>
      <input
        type="file"
        onChange={e => onChange(e.target)}
        readOnly={readonly}
        id="upload"
        name="upload"
        {...rest}
      />
    </div>
  );
}

ImageUpload.propTypes = {
  handleChagne: PropTypes.func,
  readonly: PropTypes.bool,
  rest: PropTypes.instanceOf([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string
  ])
};
ImageUpload.defaultProps = {
  handleChagne: () => false,
  readonly: false
};

export default memo(ImageUpload);
