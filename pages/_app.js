import Head from "next/head";
import BasicLayout from "../components/Layout/BasicLayout";
import { AuthContextProvider } from "../context/AuthContext";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/globals.css";
import { useRouter } from "next/router";
import { useFollowPointer } from "../useHooks/useFollowPointer";
import { useRef } from "react";

function MyApp({ Component, pageProps }) {
  const GetLayout = Component.getLayout ?? BasicLayout;
  const router = useRouter();
  const ref = useRef();
  const { x, y } = useFollowPointer(ref);

  return (
    <div>
      <Head>
        <title>Những điều Sang viết</title>
        <meta name="title" content="Những điều Sang viết" />
        <meta name="description" content="" />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://portfolio-6d4w0lstm-hsangg.vercel.app/"
        />
        <meta property="og:title" content="Những điều Sang viết" />
        <meta property="og:description" content="" />
        <meta
          property="og:image"
          content="hhttps://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-1/290307587_129256073120108_5781583286109672362_n.jpg?stp=c0.19.240.240a_dst-jpg_p240x240&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=oCAjq7YzzsYAX8FhH19&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT_Zv4jI5okcw8EICvjh9bnogxyDNf4uFjcBggxPnG5abQ&oe=63191377"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://portfolio-6d4w0lstm-hsangg.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="Những điều Sang viết"
        />
        <meta property="twitter:description" content="" />
        <meta
          property="twitter:image"
          content="hhttps://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-1/290307587_129256073120108_5781583286109672362_n.jpg?stp=c0.19.240.240a_dst-jpg_p240x240&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=oCAjq7YzzsYAX8FhH19&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT_Zv4jI5okcw8EICvjh9bnogxyDNf4uFjcBggxPnG5abQ&oe=63191377"
        />
      </Head>

      <AuthContextProvider>
        <GetLayout>
          <AnimatePresence mode="wait">
            <motion.div key={router.pathname}>
              <Component {...pageProps} />

              <motion.div
                ref={ref}
                className="w-10 h-10 bg-green-400 rounded-full"
                animate={{ x, y }}
                transition={{
                  type: "spring",
                  damping: 5,
                  stiffness: 15,
                  restDelta: 0.001,
                }}
              />
              <motion.div
                className="fixed inset-0 w-full z-50  bg-white origin-bottom"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                exit={{ scaleY: 1 }}
              ></motion.div>

              <motion.div
                className="fixed inset-0 w-full z-50  bg-white origin-top"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                exit={{ scaleY: 0 }}
              ></motion.div>
            </motion.div>
          </AnimatePresence>
        </GetLayout>
      </AuthContextProvider>
    </div>
  );
}

export default MyApp;
