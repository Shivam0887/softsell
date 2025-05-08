import { ShieldCheck } from "lucide-react";

interface CardProps {
  position: string;
  title: string;
  desc: string;
  features: string[];
}

const Card = ({ desc, features, position, title }: CardProps) => {
  return (
    <div className="relative backdrop-blur-2xl border border-foreground/5 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-1 h-full bg-background/40">
      <div className="bg-gradient-to-b from-background/30 to-background/10 backdrop-blur-xl rounded-xl h-full">
        <div className="p-8 flex flex-col h-full">
          <div className="mb-6 relative">
            <div className="font-light text-9xl bg-gradient-to-b from-foreground/70 to-foreground/15 bg-clip-text text-transparent absolute -right-8 -top-10 opacity-100">
              {position}
            </div>
            <div className="text-xs uppercase tracking-widest text-foreground/80 mb-2">
              step
            </div>
            <div className="text-4xl font-light text-foreground">
              {position}
            </div>
          </div>

          <div className="mb-6 flex justify-center"></div>

          <div className="mt-auto">
            <h3 className="text-xl font-light mb-3 text-foreground/90">
              {title}
            </h3>
            <div className="w-16 h-1 bg-primary/50 rounded-full mb-4"></div>
            <p className="text-sm text-foreground/80">{desc}</p>

            <ul className="mt-6 text-sm text-foreground/80">
              {features.map((feature, i) => (
                <li
                  key={`feature-${i + 1}`}
                  className="flex gap-2 items-center"
                >
                  <ShieldCheck size="16" /> {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent"></div>
    </div>
  );
};

export default Card;
