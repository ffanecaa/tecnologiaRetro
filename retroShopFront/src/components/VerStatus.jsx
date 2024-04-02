import React, { useEffect, useState } from 'react';
import useGetStatusReserva from '../Hook/useGetStatusReserva';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
const VerStatus = ({ productId }) => {


  const {products, loading, error,  } = useGetStatusReserva(productId);
  const [status, setStatus] = useState(null);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }


  return (
  
     
        <div>
        {products.status === " " ? (
        <BookmarkAddIcon />
      ) : (
        <BookmarkAddedIcon />
      )}
   </div>
  );
};






export default VerStatus;
