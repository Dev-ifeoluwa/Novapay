interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  color: 'green' | 'lime';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, color }) => {
  const colorClasses = {
    green: 'bg-green-500 border-green-200',
    lime: 'bg-lime-500 border-lime-200'
  };

  return (
    <div className="bg-white rounded-xl p-6 border border-green-200 hover:shadow-lg transition-shadow group">
      <div className={`w-16 h-16 ${colorClasses[color]} rounded-2xl flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-green-900 mb-2">{title}</h3>
      <p className="text-green-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard