import styles from "./Logo.module.css";

type LogoProps = {
  size: string;
};

function Logo({ size }: LogoProps) {
  return (
    <object
      data="/logorefcast.svg"
      type="image/svg+xml"
      className={`${styles[size]}`}
    ></object>
  );
}

export default Logo;
