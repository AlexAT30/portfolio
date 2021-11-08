import PortfolioCard from "./generic/PortfolioCard";
import portfolioData from "../services/portfolioData";

const portfolio =  portfolioData.map((project) => {
  return <PortfolioCard key={`project_${project.id}`} project={project} />
})

const Portfolio = () => {
  return(
    <div>
      {portfolio}
    </div>
  );
}
export default Portfolio;