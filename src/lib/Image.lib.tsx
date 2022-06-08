/* eslint-disable react/jsx-props-no-spreading */
import NextImage, { ImageLoaderProps, ImageProps } from "next/image";

const customLoader = ({ src }: ImageLoaderProps) => {
  return src;
};

export default function Image(props: ImageProps) {
  return <NextImage {...props} loader={customLoader} />;
}
