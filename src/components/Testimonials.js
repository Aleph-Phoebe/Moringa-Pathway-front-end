import React from "react";
import styled from "styled-components";
import AlephImage from "../assets/Aleph.jpg.jpg";
import FaithImage from "../assets/Faith.jpg.jpg";
import MarkImage from "../assets/Mark.jpg.jpg";

const testimonials = [
  {
    id: 1,
    name: "Aleph",
    role: "Happy Client",
    text: "Amazing services",
    review: "The services provided were exceptional and exceeded my expectations.",
    image: AlephImage,
  },
  {
    id: 2,
    name: "Faith",
    role: "Happy Client",
    text: "Awesome services",
    review: "I am extremely satisfied with the quality and professionalism.",
    image: FaithImage,
  },
  {
    id: 3,
    name: "Mark",
    role: "Easy navigation",
    text: "Awesome, thank you!",
    review: "The platform is user-friendly and easy to navigate.",
    image: MarkImage,
  },
];

const Testimonials = () => {
  return (
    <Section>
      <h2>Testimonials from Our Customers</h2>
      <TestimonialsContainer>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id}>
            <Stars>⭐⭐⭐⭐⭐</Stars>
            <h3>{testimonial.text}</h3>
            <p>{testimonial.review}</p>
            <User>
              <Avatar src={testimonial.image} alt={testimonial.name} />
              <UserInfo>
                <span>{testimonial.name}</span>
                <small>{testimonial.role}</small>
              </UserInfo>
            </User>
          </TestimonialCard>
        ))}
      </TestimonialsContainer>
    </Section>
  );
};

export default Testimonials;

const Section = styled.section`
  text-align: center;
  padding: 60px 80px;
  background: #f9f9f9;

  h2 {
    font-size: 2rem;
    color: #2a2a72;
  }
`;

const TestimonialsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const TestimonialCard = styled.div`
  background: white;
  padding: 20px;
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const Stars = styled.div`
  color: #ffcc00;
  font-size: 1.2rem;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const UserInfo = styled.div`
  span {
    font-weight: bold;
    color: #2a2a72;
  }

  small {
    display: block;
    color: #777;
  }
`;
