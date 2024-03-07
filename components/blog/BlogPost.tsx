import { useWindowSize } from "@uidotdev/usehooks";
import Head from "next/head";
import Link from "next/link";
import { ReactNode, RefObject, forwardRef, useEffect, useRef } from "react";
import ChevronRight from "../../public/chevron-right.svg";
import Layout from "../Layout";
import { SquareButton } from "../SquareButton";

type Props = {
  title: string;
  description: string;
  metaImage: string;
  metaVideo?: string;
  children: ReactNode;
};

const BlogPost = forwardRef<HTMLDivElement, Props>(
  ({ title, description, metaImage, metaVideo, children }, forwardedRef) => {
    const localRef = useRef<HTMLDivElement>();
    const ref: RefObject<HTMLDivElement> = (forwardedRef as any) || localRef;

    const { height: windowHeight } = useWindowSize();

    useEffect(() => {
      const script = document.createElement("script");
      script.setAttribute("src", "https://utteranc.es/client.js");
      script.setAttribute("repo", "JavierM42/personal-website");
      script.setAttribute("issue-term", "url");
      script.setAttribute("label", "utterances-comments");
      script.setAttribute(
        "theme",
        document.body.classList.contains("dark")
          ? "github-dark"
          : "github-light"
      );
      script.setAttribute("crossorigin", "anonymous");
      script.setAttribute("async", "");

      const comments = document.getElementById("comments")!;
      if (comments) {
        comments.innerHTML = "";
        comments.appendChild(script);
      }
    }, []);

    return (
      <>
        <Head>
          <title>{title} | Javier Morales</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={metaImage} />
          {metaVideo && <meta property="og:video" content={metaVideo} />}
          <meta name="author" content="Javier Morales" />
        </Head>
        <Layout
          navbarContent={
            <>
              <ChevronRight className="-mx-6 scale-50 shrink-0" />
              <Link href="/#blog">Blog</Link>
              <ChevronRight className="-mx-6 scale-50 shrink-0" />
              <a
                href="#slide-1"
                className="whitespace-nowrap text-ellipsis overflow-clip"
              >
                {title}
              </a>
            </>
          }
        >
          <div
            className="relative w-full h-screen overflow-y-auto leading-loose md:px-4 md:snap-y md:snap-mandatory text-on-background scroll-smooth"
            ref={ref}
          >
            <main className="max-w-4xl mx-auto">
              {children}
              <div
                id="comments"
                className="w-full py-16 h-fit snap-start"
              ></div>
            </main>
            <div className="fixed hidden space-y-10 -translate-y-1/2 md:block right-12 top-1/2">
              <SquareButton
                tooltip="Previous slide"
                tooltipPlacement="right"
                onClick={() =>
                  ref.current?.scrollBy({
                    top: -(windowHeight || 0),
                    behavior: "smooth",
                  })
                }
                label="Previous slide"
              >
                <ChevronRight style={{ transform: `rotate(-90deg)` }} />
              </SquareButton>
              <SquareButton
                tooltip="Next slide"
                tooltipPlacement="right"
                onClick={() =>
                  ref.current?.scrollBy({
                    top: windowHeight || 0,
                    behavior: "smooth",
                  })
                }
                label="Next slide"
              >
                <ChevronRight style={{ transform: `rotate(90deg)` }} />
              </SquareButton>
            </div>
          </div>
        </Layout>
      </>
    );
  }
);

export default BlogPost;
