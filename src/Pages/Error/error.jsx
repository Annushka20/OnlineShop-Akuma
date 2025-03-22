import './error.css';

const Error = () => {
  return (
    <div className="error">
      <img
        src="https://atlassianblog.wpengine.com/wp-content/uploads/2017/12/44-incredible-404-error-pages@3x-1560x760.png"
        alt="404 Error"
      />
      <h2 className="error-message">Oops! Page Not Found</h2>
      <a href="/" className="home-button">Go Back Home</a>
    </div>
  );
};

export default Error;