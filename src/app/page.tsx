import FeaturedProducts from "../components/featured-products";
import VideoOverlay from "@/components/custom/video-overlay";

const HomePage: React.FC = () => {
  return (
    <div>
      <VideoOverlay />
      <FeaturedProducts />
    </div>
  );
};

export default HomePage;
