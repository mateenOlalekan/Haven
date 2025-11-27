import { House } from 'lucide-react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex flex-reverse items-center gap-2">
            <span className="font-bold text-lg uppercase tracking-wide">Avalon</span>
      <div className="bg-green-600 p-1 rounded">
        <House size={20} className="text-white" />
      </div>

    </Link>
  );
};

export default Logo;