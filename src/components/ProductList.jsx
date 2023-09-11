import React from 'react'
// import { useDispatch,useSelector} from 'react-redux';
import {  useNavigate } from 'react-router-dom';



function ProductList() {

   


    const jewelData = [
        {
            id: "001",
            img: "https://media.istockphoto.com/id/1277517088/photo/fancy-designer-antique-golden-bracelets-for-woman-fashion.webp?b=1&s=170667a&w=0&k=20&c=9w8C8EPDigmpXsaGAiJ4DAfG4nzd8p7jPYBgLRVT6gI=",
            productName: "Bangle",
            productWeight: "11 grams",
            wastage: "1.37"
        },
        {
            id: "002",
            img: "https://media.istockphoto.com/id/1193254381/photo/indian-jewellery-necklace.jpg?s=612x612&w=0&k=20&c=MjshmVTxUDD8HlZnj0KlSaM4GfGmLZEVSWUAQDuMaB8=",
            productName: "Necklace",
            productWeight: "15 grams",
            wastage: "1.87"
        },
        {
            id: "003",
            img: "https://media.istockphoto.com/id/1133525210/photo/pair-of-fancy-golden-designer-earrings-closeup-macro-image-on-red-background.jpg?s=612x612&w=0&k=20&c=ZUknXtyeMhsS9Tdd2nRt8DkOTHc-6tmeG-KdTV_ODLU=",
            productName: "Ear Rings",
            productWeight: "3.35 grams",
            wastage: "0.41"
        },
        {
            id: "004",
            img: "https://5.imimg.com/data5/SELLER/Default/2022/9/XA/KK/HW/36933883/gold-women-rings.JPG",
            productName: " Finger Ring",
            productWeight: "2.4 grams",
            wastage: "0.3"
        },
        {
            id: "005",
            img: "https://img.freepik.com/premium-photo/gold-bracelet-with-butterflies-diamond-pink-background-romantic-jewelry-advertising-still-life-product_329479-1088.jpg?w=2000",
            productName: "Bracelet",
            productWeight: "3.7 grams",
            wastage: "0.46"

        },
        {
            id: "006",
            img: "https://media.istockphoto.com/id/1220738671/photo/gold-bars-and-bitcoin-cryptocurrency-financial.jpg?s=612x612&w=0&k=20&c=Qm9NW38fb6UM3Kiup-B4pho02guKS1__aee_5zzOxvk=",
            productName: "Gold coin",
            productWeight: "4.9 grams",
            wastage: "0.61"
        },
        {
            id: "007",
            img: "https://shop.swarna.com/wp-content/uploads/sites/133/2022/01/NQ6619_1.jpg",
            productName: "Pendants",
            productWeight: "1.2 grams",
            wastage: "0.15"
        },
        {
            id: "008",
            img: "https://bhimajewellery.com/wp-content/uploads/2023/02/Cover-image.jpg",
            productName: "Mangal Sutra",
            productWeight: "6.7 grams",
            wastage: "0.83"
        },

    ]


    const data = jewelData.map((jewel) =>

        <div className='product-card'>

            <img className='product-img' src={jewel.img} alt="..." />

            <div className='product-content' key={jewel.id}>
                <p>Product Name: {jewel.productName}</p >
                <p>Weight in gms: {jewel.productWeight}</p>
                <p>Wastage in %: {jewel.wastage}</p>
            </div>
        </div>
    )

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/signin')
    }

    const onChange = () => {
        navigate('/calculator')
    }


    return (
        <div className='App'>

            <div className='product-listing-container'>

                {data}

            </div>
            <div>
                <button className='product-btn' onClick={onChange}>Calculate gold rate</button>
                <button className='product-btn' onClick={handleClick}>Sign Out</button>
            </div>
        </div>

    )
}
export default ProductList;








