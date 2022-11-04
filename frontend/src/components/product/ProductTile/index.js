import './index.css';

const ProductTile = ({ imageSrc, title, price }) => {
  return <>
    <div className='product-tile'>
      <img
        className='product-tile-image' 
        alt="pencil" src={imageSrc} />
      <p className='product-tile-name'>
        {title}
      </p>
      <p className='product-tile-price'>Rs. {price}</p>
    </div>
  </>;
};

export default ProductTile;
