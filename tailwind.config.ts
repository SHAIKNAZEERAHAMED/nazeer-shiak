import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				gold: {
					400: '#FFD700',
					500: '#FFC300',
					600: '#B8860B',
				},
				purple: {
					400: '#B794F4',
					500: '#8B5CF6',
					600: '#6D28D9',
					950: '#2E1065',
				},
				black: '#000',
				// Solo Leveling inspired
				'solo-dark': '#0a0a0f',
				'solo-purple': '#8B5CF6',
				'solo-highlight': '#FFD700',
				'solo-accent': '#B794F4',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'pulse-glow': {
                    '0%, 100%': { 
                        opacity: '1',
                        filter: 'drop-shadow(0 0 5px rgba(255, 215, 0, 0.8))' 
                    },
                    '50%': { 
                        opacity: '0.8',
                        filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.5))' 
                    },
                },
                'gradient-x': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
                'card-float': {
                    '0%': { transform: 'rotateX(10deg) rotateY(10deg)' },
                    '50%': { transform: 'rotateX(-5deg) rotateY(-5deg)' },
                    '100%': { transform: 'rotateX(10deg) rotateY(10deg)' },
                },
                'shine': {
                    '0%': { backgroundPosition: '200% 0' },
                    '100%': { backgroundPosition: '-200% 0' }
                },
                'golden-pulse': {
                    '0%, 100%': { 
                        boxShadow: '0 0 5px rgba(255, 215, 0, 0.6)',
                        borderColor: 'rgba(255, 215, 0, 0.3)'
                    },
                    '50%': { 
                        boxShadow: '0 0 20px rgba(255, 215, 0, 0.8)',
                        borderColor: 'rgba(255, 215, 0, 0.6)'
                    }
                },
                'rotate-slow': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
                'gradient-x': 'gradient-x 15s ease infinite',
                'card-float': 'card-float 6s ease-in-out infinite',
                'shine': 'shine 3s linear infinite',
                'golden-pulse': 'golden-pulse 4s ease-in-out infinite',
                'rotate-slow': 'rotate-slow 20s linear infinite'
			},
            fontFamily: {
                code: ['Fira Code', 'monospace'],
                sans: ['Inter', 'sans-serif'],
                'heading': ['Oswald', 'Bebas Neue', 'Montserrat', 'sans-serif'],
                'body': ['Inter', 'Roboto', 'sans-serif'],
            },
            backgroundImage: {
                'hero-pattern': "url('/img/hero-pattern.svg')",
                'gradient-solo': 'linear-gradient(to right, #1A1F2C, #30243F)',
                'gradient-purple': 'linear-gradient(90deg, rgba(155, 135, 245, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
                'gradient-gold': 'linear-gradient(90deg, #FFD700 0%, #B8860B 100%)',
                'solo-leveling': 'radial-gradient(ellipse at 60% 40%, rgba(155,135,245,0.18) 0%, rgba(10,10,15,0.95) 70%), linear-gradient(120deg, #0a0a0f 60%, #2E1065 100%)',
                'gradient-solo': 'linear-gradient(to right, #1A1F2C, #30243F)',
                'gradient-purple': 'linear-gradient(90deg, rgba(155, 135, 245, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
                'gradient-gold': 'linear-gradient(90deg, #FFD700 0%, #B8860B 100%)',
            },
			boxShadow: {
				'solo-glow': '0 0 32px 0 #FFD700, 0 0 8px 0 #8B5CF6',
				'solo-card': '0 4px 32px 0 rgba(139,92,246,0.15), 0 1.5px 8px 0 #FFD70044',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
