import "./HeroStats.css";

import {
  FaUsers,
  FaDonate,
  FaHandHoldingHeart,
  FaChartLine,
} from "react-icons/fa";

const HeroStats = () => {
  const stats = [
    {
      id: 1,
      icon: <FaUsers />,
      number: "10K+",
      title: "Happy Donors",
    },
    {
      id: 2,
      icon: <FaHandHoldingHeart />,
      number: "1.2K+",
      title: "Campaigns",
    },
    {
      id: 3,
      icon: <FaDonate />,
      number: "₹5.2 Cr+",
      title: "Funds Raised",
    },
    {
      id: 4,
      icon: <FaChartLine />,
      number: "98%",
      title: "Success Rate",
    },
  ];

  return (
    <section className="hero-stats">

      <div className="stats-container">

        {stats.map((item) => (
          <div className="stat-card" key={item.id}>

            <div className="stat-icon">
              {item.icon}
            </div>

            <h2>{item.number}</h2>

            <p>{item.title}</p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default HeroStats;