import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex justify-center bg-black">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
