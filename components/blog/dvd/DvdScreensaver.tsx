import classNames from "classnames";
import { CSSProperties } from "react";
import styles from "../css-recursion/slides/dvd-with-timer.module.css";
import DvdLogo from "./DvdLogo";

const DvdScreensaver = ({
  width = 320,
  height = 240,
  fluidSize = false,
  colors = true,
  speed,
  redefineVariables,
  withTimer = false,
}: {
  width?: number;
  height?: number;
  fluidSize?: boolean;
  colors?: boolean;
  speed?: number;
  redefineVariables?: boolean;
  withTimer?: boolean;
}) => {
  return (
    <div
      className={classNames(
        redefineVariables && styles.variables,
        styles.container
      )}
      style={
        {
          "--container-width": width,
          "--container-height": height,
          "--logo-width": width / 5,
          "--logo-height": width / 10,
          width: fluidSize ? "100%" : width,
          height: fluidSize ? "100%" : height,
          ...(speed
            ? {
                "--speed": speed,
              }
            : {}),
        } as CSSProperties
      }
    >
      <DvdLogo className={colors ? styles.logo : styles.logoMovement} />
      {withTimer && (
        <div className={styles.euclideanAlgorithmNode}>
          <div className={styles.euclideanAlgorithmNode2}>
            <div className={styles.euclideanAlgorithmNode}>
              <div className={styles.euclideanAlgorithmNode2}>
                <div className={styles.euclideanAlgorithmNode}>
                  <div className={styles.euclideanAlgorithmNode2}>
                    <div className={styles.euclideanAlgorithmNode}>
                      <div className={styles.euclideanAlgorithmNode2}>
                        <div className={styles.euclideanAlgorithmNode}>
                          <div className={styles.euclideanAlgorithmNode2}>
                            <div className={styles.euclideanAlgorithmNode}>
                              <div className={styles.euclideanAlgorithmNode2}>
                                <div className={styles.euclideanAlgorithmNode}>
                                  <div
                                    className={styles.euclideanAlgorithmNode2}
                                  >
                                    <div
                                      className={styles.euclideanAlgorithmNode}
                                    >
                                      <div
                                        className={
                                          styles.euclideanAlgorithmNode2
                                        }
                                      >
                                        <div
                                          className={
                                            styles.euclideanAlgorithmNode
                                          }
                                        >
                                          <div
                                            className={
                                              styles.euclideanAlgorithmNode2
                                            }
                                          >
                                            <div
                                              className={
                                                styles.euclideanAlgorithmNode
                                              }
                                            >
                                              <div
                                                className={
                                                  styles.euclideanAlgorithmNode2
                                                }
                                              >
                                                <div
                                                  className={
                                                    styles.euclideanAlgorithmNode
                                                  }
                                                >
                                                  <div
                                                    className={
                                                      styles.euclideanAlgorithmNode2
                                                    }
                                                  >
                                                    <div
                                                      className={
                                                        styles.euclideanAlgorithmNode
                                                      }
                                                    >
                                                      <div
                                                        className={
                                                          styles.euclideanAlgorithmNode2
                                                        }
                                                      >
                                                        <div
                                                          className={
                                                            styles.euclideanAlgorithmNode
                                                          }
                                                        >
                                                          <div
                                                            className={
                                                              styles.euclideanAlgorithmNode2
                                                            }
                                                          >
                                                            <div
                                                              className={
                                                                styles.euclideanAlgorithmNode
                                                              }
                                                            >
                                                              <div
                                                                className={
                                                                  styles.euclideanAlgorithmNode2
                                                                }
                                                              >
                                                                <div
                                                                  className={
                                                                    styles.euclideanAlgorithmNode
                                                                  }
                                                                >
                                                                  <div
                                                                    className={classNames(
                                                                      "absolute text-center text-xl flex items-center justify-center",
                                                                      styles.euclideanAlgorithmNode2
                                                                    )}
                                                                    style={{
                                                                      width,
                                                                      height,
                                                                    }}
                                                                  >
                                                                    <div
                                                                      className={classNames(
                                                                        styles.timerTest,
                                                                        "text-6xl font-bold opacity-10 text-primary font-variant-numeric leading-none"
                                                                      )}
                                                                    />
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DvdScreensaver;
