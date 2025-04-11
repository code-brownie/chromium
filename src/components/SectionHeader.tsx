interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
    return (
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        {subtitle && <p className="text-gray-600">{subtitle}</p>}
        <div className="w-16 h-1 bg-blue-500 mx-auto mt-4"></div>
      </div>
    );
  };
  
  export default SectionHeader;