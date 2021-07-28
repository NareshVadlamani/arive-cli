import React from "react";
import SplitPane from "react-split-pane";
import { Box } from "./basicComponents";
import styles from "./resizer.module.scss";

interface IProps {
  children: React.ReactNode;
}

const resizerStyles = {
  background: "#000",
  width: "2px",
  cursor: "col-resize",
  margin: "0 5px",
  height: "100%",
};

export default function Resizer(props: IProps) {
  return (
    <Box className={styles.split_pane_container}>
      <SplitPane
        split="vertical"
        minSize={100}
        defaultSize={250}
        resizerStyle={resizerStyles}
        className={styles.split_pane}
      >
        {props.children}
      </SplitPane>
    </Box>
  );
}
