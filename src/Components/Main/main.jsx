import './main.css';

const Main = () => {
  return (
    <div className="main-holder">
      <h3 className="main-title">You're in the right place for shopping</h3>
      <div className="image-container">
        <img
          className="woman-img"
          src="https://i.etsystatic.com/26685079/r/il/738a4b/3079285825/il_570xN.3079285825_98fj.jpg"
          alt="Woman shopping"
        />
        <img
          className="woman-img"
          src="https://i.pinimg.com/736x/dd/12/dd/dd12dd3d97a4b341d643dfbb25182983.jpg"
          alt="Woman shopping"
        />
      </div>
      <h4 className="main-subtitle">Choose what best suits you</h4>
    </div>
  );
};

export default Main;