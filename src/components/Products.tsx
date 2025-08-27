import React, { useState } from "react";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "labels", name: "Labels" },
    { id: "stickers", name: "Stickers" },
    { id: "Tags", name: "Tags" },
    { id: "branding", name: "Branding" },
  ];

  const projects = [
    {
      id: 1,
      title: "Premium Wine Labels",
      category: "labels",
      image: "/Gallery/wine-labels.jpg",
      description: "Elegant wine labels with gold foil finishing",
    },
    {
      id: 2,
      title: "Corporate Branding",
      category: "branding",
      image:
        "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete corporate identity package",
    },
    {
      id: 3,
      title: "Product Stickers",
      category: "stickers",
      image:
        "https://images.pexels.com/photos/4226721/pexels-photo-4226721.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Waterproof product stickers for outdoor use",
    },
    {
      id: 4,
      title: "Event Banners",
      category: "banners",
      image:
        "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Large format banners for corporate events",
    },
    {
      id: 5,
      title: "Food Labels",
      category: "labels",
      image:
        "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "FDA compliant food packaging labels",
    },
    {
      id: 6,
      title: "Promotional Stickers",
      category: "stickers",
      image:
        "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Custom promotional stickers for campaigns",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Discover our exceptional work and see how we've helped businesses
            enhance their brand presence
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <button className="flex items-center justify-center w-full bg-white text-gray-900 py-2 px-4 rounded-full font-semibold transition-all duration-300 hover:bg-gray-100">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Details
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
