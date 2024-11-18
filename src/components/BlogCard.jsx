

const BlogCard = ({ image, title, description }) => (
    <div className="overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="pt-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        <button className="text-gray-800 font-medium hover:text-gray-600 transition-colors duration-300 border-b border-gray-800">
          READ MORE
        </button>
      </div>
    </div>
  );
  
  const LatestBlogs = () => {
    const blogs = [
      {
        image: "Frame 1321315104.png",
        title: "Lorem Ipsum available, but the majority have suffered",
        description: "Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even"
      },
      {
        image: "Frame 1321315104 (1).png",
        title: "Lorem Ipsum available, but the majority have suffered",
        description: "Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even"
      },
      {
        image: "Frame 1321315104 (2).png",
        title: "Lorem Ipsum available, but the majority have suffered",
        description: "Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even"
      },
      {
        image: "Frame 1321315104 (3).png",
        title: "Lorem Ipsum available, but the majority have suffered",
        description: "Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even"
      }
    ];
  
    return (
      <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">See Our Latest Blogs!</h2>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors duration-300">
              View All
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogs.map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default LatestBlogs;