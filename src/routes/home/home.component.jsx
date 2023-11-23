import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";

const Home = () => {
  return (
    <div className="home-page">
      <Outlet />
      <Directory />
    </div>
  );
};

export default Home;
