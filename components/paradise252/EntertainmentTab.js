import React, { useState } from 'react';

const activitiesListings = [
  {
    activityTitle: 'Medieval Times',
    activityImage: 'https://images.ctfassets.net/qa81vo6zkhsj/7sAqZemN6epV3zWgUILy0q/090f5182eec0365865ae201dc87bb8f4/1.png',
    activityText: 'Medieval Times is an exciting, family-friendly experience inspired by an 11th-century feast and tournament. Guests are served a four-course banquet as they cheer for one of six knights competing in the joust and other tests of skill. Be sure to check for times early as these spots tend to book early!',
  },
  {
    activityTitle: 'Golf',
    activityImage: 'https://images.ctfassets.net/qa81vo6zkhsj/6Et50m2VRy5sGPW2tDmOXL/85fe0bf7370f764308272c1ced94f300/golf-pass.brightspotcdn.jpg',
    activityText: `If you came to Myrtle Beach to golf, you probably already have a plan. There are more than 10 courses within a 20-minute drive and you can use Myrtle Beach Golf Trail to start your golf search or check out some of these great options:
        
        Topgolf, this is a great choice for golfers and non-golfers!
        River Oaks Golf Club (they rent golf clubs $20/ set)
        Arrowhead Country Club (they rent golf clubs $30/ set)`,
  },
  {
    activityTitle: 'Fishing',
    activityImage: 'https://images.ctfassets.net/qa81vo6zkhsj/54VMFeVAplFJN4t8IkPAH9/8c36353f8fb1844beafcea74bc0c024d/5.png',
    activityText: `Walking distance from the condo
        Fishing rentals (licenses aren’t required)
        Walk the pier for a better view, or eat in the restaurant`,
  },
  {
    activityTitle: 'Broadway at the Beach',
    activityImage: 'https://images.ctfassets.net/qa81vo6zkhsj/7fS6On6VR7djbde41GUOoA/7b612866e39053f3da766e1be9d148bb/2.png',
    activityText: `Over 70 Shops featuring clothing, gifts, snacks, art and much more!
        Attractions, Entertainment, Restaurants and Theaters`,
  },
];

const Entertainment = () => {
    const [openAccordion, setOpenAccordion] = useState(null);
  
    const toggleAccordion = (index) => {
      setOpenAccordion((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="entertainment-list">
          {activitiesListings.map((item, index) => {
            const { id, activityTitle, activityText, activityImage } = item;
            const isOpen = openAccordion === index;
  
            return (
              <div key={id} className="mb-8">
                <div
                  className={`accordion-header cursor-pointer ${isOpen ? 'active' : ''}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="text-xl font-bold">{activityTitle}</h3>
                </div>
                {isOpen && (
                  <div className="accordion-content flex">
                    <div className="column w-1/2">
                      <div dangerouslySetInnerHTML={{ __html: activityText }} />
                    </div>
                    <div className="column w-1/2">
                      <div className="imgWrap">
                        <img src={activityImage} alt={activityTitle} className="w-full h-64 object-cover" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  export default Entertainment;