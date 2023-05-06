import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import styles from "./Trailer.module.css";

export function Trailer() {
  const params = useParams();
  const key = params.ytTrailerId;

  return (
    <div className={styles["react-player-container"]}>
      {key !== null ? (
        <ReactPlayer
          controls="true"
          playing="true"
          url={`https://www.youtube.com/watch?v=${key}`}
          width="100%"
          height="100%"
        />
      ) : null}
    </div>
  );
}
