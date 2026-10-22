import HoloCard from './HoloCard';
import card from './assets/pikachu.webp';

export default function App() {
  return <HoloCard image={card} alt="Pikachu" preset="bursts" />;
}
