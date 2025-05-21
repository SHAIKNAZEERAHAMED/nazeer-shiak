
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
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
                // Solo Leveling inspired theme colors
                solo: {
                    dark: '#1A1F2C',
                    purple: '#8B5CF6',
                    accent: '#9b87f5',
                    highlight: '#1EAEDB',
                    gray: '#8E9196',
                    dungeon: '#0d0e11'
                }
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
                        filter: 'drop-shadow(0 0 5px rgba(155, 135, 245, 0.8))' 
                    },
                    '50%': { 
                        opacity: '0.8',
                        filter: 'drop-shadow(0 0 15px rgba(155, 135, 245, 0.5))' 
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
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
                'gradient-x': 'gradient-x 15s ease infinite',
                'card-float': 'card-float 6s ease-in-out infinite',
			},
            fontFamily: {
                code: ['Fira Code', 'monospace'],
                sans: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'hero-pattern': "url('/img/hero-pattern.svg')",
                'gradient-solo': 'linear-gradient(to right, #1A1F2C, #30243F)',
                'gradient-purple': 'linear-gradient(90deg, rgba(155,135,245,0.15) 0%, rgba(139,92,246,0.15) 100%)',
            },
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
