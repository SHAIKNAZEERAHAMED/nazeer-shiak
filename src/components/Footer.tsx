
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-solo-dark border-t border-solo-purple/10 py-8">
      <div className="max-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Shaik Nazeer Ahamed</h3>
            <p className="text-muted-foreground">
              Full Stack Dev by Day,<br />Editor by Night.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-muted-foreground hover:text-solo-accent transition-colors">Home</a></li>
              <li><a href="#tech" className="text-muted-foreground hover:text-solo-accent transition-colors">Tech Skills</a></li>
              <li><a href="#editing" className="text-muted-foreground hover:text-solo-accent transition-colors">Editing Skills</a></li>
              <li><a href="#projects" className="text-muted-foreground hover:text-solo-accent transition-colors">Projects</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="https://github.com/SHAIKNAZEERAHAMED" className="text-muted-foreground hover:text-solo-accent transition-colors">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/shaik-nazeer-ahamed-927546329/" className="text-muted-foreground hover:text-solo-accent transition-colors">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/nazeer_shiek?igsh=d25tM2djZHU5aGZ2" className="text-muted-foreground hover:text-solo-accent transition-colors">Instagram</a></li>
              <li><a href="mailto:yernstudios@gmail.com" className="text-muted-foreground hover:text-solo-accent transition-colors">Email</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-solo-purple/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© {currentYear} Shaik Nazeer Ahamed. All rights reserved.</p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">Full Stack Dev by Day, Editor by Night.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
