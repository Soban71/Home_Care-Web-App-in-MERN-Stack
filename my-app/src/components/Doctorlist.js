import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './doctorlist.css';



var BlogHeaders={
  backgroundImage: 
  "url('/images/BannerImages/bloghero.jpg')",
  marginTop:"0px"
}
export default function Doctorlist() {
  const doctors = [
    {
      id: 1,
      name: 'Dr. John Doe',
      expertise: 'Cardiologist',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.',
      image: 'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg', // Import or provide the image path
    },
    {
      id: 2,
      name: 'Dr. Jane Smith',
      expertise: 'Dermatologist',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.',
      image: 'https://th.bing.com/th/id/R.7797a354b99f965b4f44dcf0eafcba99?rik=4frnQ74TYD3iRg&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2018%2f05%2fDoctor-PNG-Picture.png&ehk=p%2bv%2bEJaIzKwnD3deD%2bRV9WDRWH890YzHGZY5iZZ4ad8%3d&risl=&pid=ImgRaw&r=0', // Import or provide the image path
    },
    {
      id: 3,
      name: 'Dr. Michael Johnson',
      expertise: 'Orthopedic Surgeon',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.',
      image: '', 
    },
    {
      id: 4,
      name: 'Dr. Emily Williams',
      expertise: 'Pediatrician',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.',
      image: '', 
    },
  ];

  return (
   


    <section className="doctor-list-section">
    <div className="section-heading-container">
      <h2 className="section-heading">Available Doctors</h2>
    </div>

    <div className="carousel-container">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        showArrows={true} 
      >
        {doctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <img src={doctor.image} alt={doctor.name} className="doctor-image" />
            <div className="doctor-details">
              <h3 className="doctor-name">{doctor.name}</h3>
              <p className="doctor-expertise">{doctor.expertise}</p>
              <p className="doctor-info">{doctor.info}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  </section>
    
  );
}

