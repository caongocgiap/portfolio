import { memo } from "react";

type TechStackItemProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
};

const TechStackItem = memo(function TechStackItem({
  Icon,
  label,
}: TechStackItemProps) {
  return (
    <div className="flex flex-col items-center transition-all duration-300 ease-in-out hover:scale-110 hover:opacity-80 cursor-pointer">
      <Icon className="w-8 h-8 lg:w-12 lg:h-12 transition-transform duration-300" />
      <span className="mt-2 text-sm transition-colors duration-300">{label}</span>
    </div>
  );
});

export default TechStackItem;
