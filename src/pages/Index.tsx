import HeroBanner from "../components/HeroBanner";
import WhoWeAre from "../components/WhoWeAre";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <HeroBanner />

      {/* Who We Are Section */}
      <WhoWeAre />

      {/* Philosophy Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Philosophy
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to creating desserts that celebrate natural
              flavors while supporting your health and dietary needs.
            </p>
          </div>

          {/* Philosophy Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Natural First */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Natural First
              </h3>
              <p className="text-gray-600">
                We source only organic, natural ingredients from local farmers
                and trusted suppliers who share our values.
              </p>
            </div>

            {/* Health Conscious */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Health Conscious
              </h3>
              <p className="text-gray-600">
                Every recipe is carefully crafted to reduce sugar, eliminate
                artificial additives, and maximize nutritional value.
              </p>
            </div>

            {/* Artisanal Quality */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Artisanal Quality
              </h3>
              <p className="text-gray-600">
                Each cake is handcrafted with attention to detail, ensuring
                beautiful presentation and exceptional taste.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
