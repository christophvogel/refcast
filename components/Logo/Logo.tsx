import styles from "./Logo.module.css";

type LogoProps = {
  size: string;
};

function Logo({ size }: LogoProps) {
  return <img src="/refcastlogo.png" className={`${styles[size]}`} />;
}

export default Logo;
