
import React from 'react';
import { motion } from 'framer-motion';
import SoloBadge from './SoloBadge';
import { User } from 'lucide-react';

interface RankerProps {
  name: string;
  rank: string;
  level: number;
  guild?: string;
  position: number;
  imageSrc?: string;
}

const rankers: RankerProps[] = [
  { position: 2, name: "Choi Jong-In", rank: "S", level: 97, guild: "Knights", imageSrc: "https://i.imgur.com/W6CJoIK.jpg" },
  { position: 3, name: "Baek Yoon-Ho", rank: "S", level: 94, guild: "White Tiger", imageSrc: "https://i.imgur.com/LSlhN4K.jpg" },
  { position: 4, name: "Cha Hae-In", rank: "S", level: 93, guild: "Knights", imageSrc: "https://i.imgur.com/g2FdpZY.jpg" },
  { position: 5, name: "Min Byung-Gu", rank: "S", level: 91, guild: "Hunters", imageSrc: "https://i.imgur.com/QgR5hkH.jpg" }
];

const RankingList: React.FC = () => {
  return (
    <div className="w-full px-4 py-8">
      <div className="solo-panel mb-6">
        <h2 className="text-xl font-bold text-center text-glow mb-2">National Hunter Rankings</h2>
        <p className="text-sm text-center text-white/60">Top S-Class Hunters in the Association</p>
      </div>
      
      <div className="space-y-4 mt-8">
        {rankers.map((ranker, index) => (
          <RankerItem 
            key={index}
            ranker={ranker}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

const RankerItem: React.FC<{ ranker: RankerProps, index: number }> = ({ ranker, index }) => {
  return (
    <motion.div 
      className="solo-panel py-3 px-4 flex items-center gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="text-xl font-bold text-white/50 w-8 text-center">{ranker.position}</div>
      
      <div className="h-12 w-12 rounded-md overflow-hidden border border-solo-purple/30 flex-shrink-0">
        {ranker.imageSrc ? (
          <img src={ranker.imageSrc} alt={ranker.name} className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full bg-solo-dark/60 flex items-center justify-center">
            <User className="h-6 w-6 text-solo-accent/70" />
          </div>
        )}
      </div>
      
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="font-medium text-white">{ranker.name}</span>
          <SoloBadge 
            text={`Rank ${ranker.rank}`} 
            type={ranker.rank === 'S' ? 'legendary' : ranker.rank === 'A' ? 'epic' : 'rare'} 
            className="text-[10px] py-0"
          />
        </div>
        <div className="flex items-center text-xs text-white/60 mt-1">
          <span>Lv. {ranker.level}</span>
          {ranker.guild && (
            <>
              <span className="mx-2">•</span>
              <span>{ranker.guild} Guild</span>
            </>
          )}
        </div>
      </div>
      
      <div className="text-right">
        <div className="text-xs text-white/40 uppercase">Monsters</div>
        <div className="text-sm font-mono text-solo-accent">{Math.floor(Math.random() * 500) + 200}</div>
      </div>
    </motion.div>
  );
};

export default RankingList;
