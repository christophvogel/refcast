import styles from "./Logo.module.css";

type LogoProps = {
  size: string;
};

function Logo({ size }: LogoProps) {
  return <img src="/logorefcast.svg" className={`${styles[size]}`} />;
}

export default Logo;
