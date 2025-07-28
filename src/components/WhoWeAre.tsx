import React from "react";
import WhoWeAreImage from "../assets/image/who-we-are.webp";

const WhoWeAre = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid container: image + text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image section */}
          <div>
            <img
              src={WhoWeAreImage}
              alt="Who We Are | Bakersly"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Text content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Who <span className="text-rose-600">We Are</span>
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              We are passionate bakers, nutritionists, and wellness advocates who
              believe that life's sweetest moments shouldn't come at the cost of your health.
              Our team of dedicated artisans combines traditional baking techniques
              with modern nutritional science to create desserts that nourish both body and soul.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Every recipe we craft is a testament to our commitment to quality, health, and sustainability.
              We source our ingredients locally whenever possible, support organic farming practices,
              and continuously innovate to bring you the most delicious and nutritious treats.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Join us on this sweet journey toward a healthier, more delicious world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
