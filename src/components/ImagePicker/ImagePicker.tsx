"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type ImagePickerProps = {
  label: string;
  name: string;
};

export default function ImagePicker(props: ImagePickerProps) {
  const { label, name } = props;

  const [preview, setPreview] = useState<string | StaticImport>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleBtnClick = () => {
    inputRef.current?.click();
  };

  const onChangeImageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      setPreview("");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={inputRef}
          onChange={onChangeImageHandler}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handleBtnClick}
        >
          Pick an Image
        </button>
        <div className={classes.preview}>
          {preview ? (
            <Image src={preview} alt="Preview" fill />
          ) : (
            <p>No image Picked Yet</p>
          )}
        </div>
      </div>
    </div>
  );
}
