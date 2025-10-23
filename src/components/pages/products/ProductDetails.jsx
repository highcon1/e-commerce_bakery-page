import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import allproducts from "../../../data/bakeryProducts"
import { useState, useEffect } from 'react'

const ProductDetails = ({ isModal }) => {
    const [prodObj, setProdObj] = useState();
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const Navigate = useNavigate();


    //fetching single product
    const handleFind = () => {
        setLoading(true);
        setTimeout(() => {
            const findItem = allproducts.find((item)=> item.id == id);
            if(findItem) {
                setProdObj(findItem);
                setLoading(false);
            } else {
                setLoading(false);
            }
        }, 1000)
    }

    useEffect(() =>{
        handleFind();
    }, [id]);

    const handleClose = () => Navigate(-1);

     // To lock the background scroll when modal is open
    useEffect(() => {
      if (isModal) {
        document.body.style.overflow = "hidden"; // disable page scroll
        return () => {
          document.body.style.overflow = "auto"; // restore when modal unmounts
        };
      }
    }, [isModal]);

      // Loading state
    if (loading) {
      return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <p className="text-2xl font-semibold text-gray-700">Loading...</p>
        </div>
      );
    }

    if (!prodObj) {
      return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <p className="text-xl text-gray-600">Product not found</p>
        </div>
      );
    }

  // for MODAL MODE: which is to open as overlay
    if (isModal) {
        return (
            <div className="fixed inset-0 bg-opacity-60 flex justify-center items-center z-50"
                onClick={handleClose} // click outside closes modal
            >
                <div
                    className="bg-white p-6 rounded-2xl shadow-2xl max-w-md w-full relative"
                    onClick={(e) => e.stopPropagation()} // prevent background click from closing
                >
                <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
                >
                    ✕
                </button>

                <img
                    src={prodObj.url}
                    alt={prodObj.name}
                    className="w-full h-60 object-cover rounded-xl"
                />
                <h2 className="text-2xl font-bold mt-4">{prodObj.name}</h2>
                <p className="text-gray-700 mt-2 font-medium">{prodObj.price}</p>

                {prodObj.discountedPrc && (
                    <p className="text-gray-400 line-through">{prodObj.discountedPrc}</p>
                )}

                <button
                    className="mt-5 bg-[#009F7F] hover:bg-[#018c70] text-white font-semibold px-6 py-2 rounded-lg w-full"
                    onClick={() => {
                        alert(`Added ${prodObj.name} to cart!`);
                    }}
                >
                Add to Cart
                </button>
                </div>
            </div>
        );
    }



  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
        { loading ? (
            <div className="text-center">
                <p className="text-2xl font-semibold text-gray-700">Loading.... </p>
            </div>
        ) : (
            <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
                <h1>Welcome to Product Detail Page {id}</h1>
                <img src={prodObj?.url} alt={prodObj?.name} />
                <p>{prodObj?.name}</p>
                <p>{prodObj?.price}</p>
            </div>
        )}
    </div>
  )
}

export default ProductDetails