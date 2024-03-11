import React, { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import { StarHalfOutlined } from '@mui/icons-material';

const RestaurantsTab = () => {
    const restaurantListings = [
      {
        id: 1,
        restaurantTitle: "Cafe Old Vienna",
        restaurantDescription: `Cafe Old Vienna is a charming German-Austrian restaurant, bar, and beer garden nestled in the heart of Myrtle Beach. Transport yourself to the enchanting streets of Vienna as you step into this authentic establishment that captures the essence of Central European hospitality.
  
        At Cafe Old Vienna, you'll experience a culinary journey through the rich traditions of German and Austrian cuisine. The menu is a carefully crafted selection of hearty and flavorful dishes, showcasing the culinary expertise of the Old World. From savory schnitzels to delectable sausages, each plate is a celebration of time-honored recipes and quality ingredients.
        
        The cozy and inviting atmosphere of the restaurant invites guests to savor their meals indoors, reminiscent of a traditional European tavern. For those seeking a breath of fresh air, the expansive beer garden provides a delightful al fresco dining experience. Adorned with charming lights and rustic wooden furniture, the beer garden is a perfect spot to enjoy a refreshing drink or a satisfying meal under the sun or stars.
        
        Cafe Old Vienna takes pride in offering an extensive selection of German and Austrian beers, ensuring that every sip complements the authenticity of the dining experience. Whether you're a beer enthusiast or simply looking to unwind with friends and family, the bar at Cafe Old Vienna has something for everyone.
        
        With its warm ambiance, attentive service, and a menu that pays homage to European culinary traditions, Cafe Old Vienna is a delightful destination for those looking to indulge in the flavors and spirit of Germany and Austria right in the heart of Myrtle Beach. Prost!.`,
        restaurantRating: 4.5, // Example rating, you can replace it with actual data
        url: "https://cafeoldvienna.com/",
      },
      {
        id: 2,
        restaurantTitle: "Italian Delight",
        restaurantDescription: "Authentic Italian cuisine in a cozy atmosphere.",
        restaurantRating: 4.2, // Example rating, you can replace it with actual data
        url: "https://cafeoldvienna.com/",
      },
      // Add more restaurants as needed
    ];


    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (index) => {
      setOpenAccordion((prevIndex) => (prevIndex === index ? null : index));
    };
  
    const renderStars = (rating, restaurantTitle, url) => {
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating - fullStars >= 0.5;
  
      return (
        <div className="flex items-center">
          <h3 className="text-xl font-bold mr-2">{restaurantTitle}</h3>
          {[...Array(fullStars)].map((_, index) => (
            <StarIcon key={index} color="primary" />
          ))}
          {hasHalfStar && <StarHalfOutlined color="primary" />}
          <span className="ml-1">{rating}</span>
          {url && openAccordion !== null && (
            <a href={url} target="_blank" rel="noopener noreferrer" className="ml-2">
              Visit Website
            </a>
          )}
        </div>
      );
    };
  
    return (
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="restaurant-list">
          {restaurantListings.map((item, index) => {
            const { id, restaurantTitle, restaurantDescription, restaurantRating, url } = item;
            const isOpen = openAccordion === index;
  
            return (
              <div key={id} className="mb-8">
                <div
                  className="row"
                  onClick={() => toggleAccordion(index)}
                  role="button"
                >
                  <div className="column">
                    {renderStars(restaurantRating, restaurantTitle, url)}
                    {isOpen && <p>{restaurantDescription}</p>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  export default RestaurantsTab;