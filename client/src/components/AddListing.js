import React from 'react'
function AddListing({handleAddListing}){

    return (
        <>
        <div className='background-grad'>
            <h3 id="add_listing_text">Add a Listing!</h3>
            <form id="add_listing_form" onSubmit = {handleAddListing}> 
              <p>Name</p>
              <input
                name="name"
                type="name"
                placeholder="Enter name of item"
              />
              <p>Artist</p>
              <input
                name="artist"
                type="artist"
                placeholder="Enter artist of item"
              />
              <p>Price</p>
              <input
                name="price"
                type="price"
                placeholder="Enter price of item"
              />
              <p>Quantity</p>
              <input
                name="quantity"
                type="quantity"
                placeholder="Enter quantity of item"
              />
              <p>Description</p>
              <input
                name="description"
                type="description"
                placeholder="Enter description of item"
              />
              <p>Image</p>
              <input
                name="image"
                type="image_descrip"
                placeholder="Enter image of item"
              />

              <button type="submit">Submit</button>
              </form>
              </div>
        </>
    )
}


export default AddListing