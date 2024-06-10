import classNames from "classnames";
import { CSSProperties, useState } from "react";
import CodeBlock from "../../CodeBlock";
import Paragraph from "../../Paragraph";
import Slide from "../../Slide";
import DvdLogo from "../../dvd/DvdLogo";
import styles from "./dvd-with-timer.module.css";

export default function SlideFour() {
  const [containerWidth, setContainerWidth] = useState(480);
  const [containerHeight, setContainerHeight] = useState(360);
  const [logoWidthPercentage, setLogoWidthPercentage] = useState(25);
  const [speed, setSpeed] = useState(90);

  const logoHeight = Math.round(
    (containerWidth * logoWidthPercentage) / 100 / 2
  );
  const logoWidth = logoHeight * 2;

  return (
    <Slide className="flex flex-col items-center justify-center">
      <Paragraph className="md:hidden">
        Sorry, the interactive experience is not available on smaller screens.
      </Paragraph>
      <div className="hidden md:contents">
        <Paragraph>
          Use the sliders to change the animation parameters.{" "}
        </Paragraph>
        <CodeBlock>
          {`  `}
          <span className="text-purple-dark">--container-w</span>
          {": "}
          <span className="text-primary-container-light">{containerWidth}</span>
          {"; "}
          <input
            type="range"
            min="50"
            max="500"
            className="float-right h-1 mt-1.5 rounded-full appearance-none w-44 focus:outline-none slider"
            value={containerWidth}
            onChange={(event) =>
              setContainerWidth(parseInt(event.target.value))
            }
          />
          {`\n  `}
          <span className="text-purple-dark">--container-h</span>
          {": "}
          <span className="text-primary-container-light">
            {containerHeight}
          </span>
          {"; "}
          <input
            type="range"
            min="50"
            max="500"
            className="float-right h-1 mt-1.5 rounded-full appearance-none w-44 focus:outline-none slider"
            value={containerHeight}
            onChange={(event) =>
              setContainerHeight(parseInt(event.target.value))
            }
          />
          {`\n  `}
          <span className="text-purple-dark">--logo-w</span>
          {": "}
          <span className="text-primary-container-light">
            {logoWidthPercentage}%
          </span>
          {"; "}
          <input
            type="range"
            min="1"
            max="99"
            className="float-right h-1 mt-1.5 rounded-full appearance-none w-44 focus:outline-none slider"
            value={logoWidthPercentage}
            onChange={(event) =>
              setLogoWidthPercentage(parseInt(event.target.value))
            }
          />
          {`\n  `}
          <span className="text-purple-dark">--speed</span>
          {": "}
          <span className="text-primary-container-light">{speed}</span>
          {`;`}
          <input
            type="range"
            min="1"
            max="200"
            className="float-right h-1 mt-1.5 rounded-full appearance-none w-44 focus:outline-none slider"
            value={speed}
            onChange={(event) => setSpeed(parseInt(event.target.value))}
          />
        </CodeBlock>
        <div
          className={classNames(
            styles.variables,
            styles.container,
            "relative border border-surface-light bg-surface/20 mt-4"
          )}
          style={
            {
              "--container-width": containerWidth,
              "--container-height": containerHeight,
              "--logo-width": logoWidth,
              "--logo-height": logoHeight,
              "--speed": speed,
            } as CSSProperties
          }
        >
          <DvdLogo className={styles.logo} />
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
                                  <div
                                    className={styles.euclideanAlgorithmNode}
                                  >
                                    <div
                                      className={styles.euclideanAlgorithmNode2}
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
                                                                        width:
                                                                          containerWidth,
                                                                        height:
                                                                          containerHeight,
                                                                      }}
                                                                    >
                                                                      <div
                                                                        className={classNames(
                                                                          styles.timerTest,
                                                                          "text-[300px] font-bold opacity-10 text-primary font-variant-numeric leading-none -mt-6"
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
        </div>
      </div>
    </Slide>
  );
}
