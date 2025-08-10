import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  IconButton,
  Tabs,
  Tab,
} from '@mui/material';
import { motion } from 'framer-motion';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import DataObjectIcon from '@mui/icons-material/DataObject';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Team Connect – Real-time Collaboration Platform',
    description: 'A scalable collaboration tool supporting chat, video calls, task tracking, and file sharing with robust role-based access control and AI-powered task suggestions.',
    image: '/TeamConnect.png',
    technologies: ['Python', 'Flask', 'WebSocket', 'REST API', 'JavaScript', 'HTML', 'CSS', 'MySQL', 'Google Gemini AI'],
    category: 'web',
    liveUrl: 'https://team-connect.onrender.com/',
    githubUrl: 'https://github.com/V-Manish-Kumar/Team-connect',
    featured: true,
  },
  {
    id: 2,
    title: 'Accelerating Drug Discovery via Generative AI',
    description: 'Full-stack platform using AI models to identify drug candidates and predict their biological impact, featuring image recognition for medicine identification.',
    image: '/DrugDiscovery.png',
    technologies: ['Python', 'Flask', 'Gemini API', 'HTML', 'JavaScript', 'CSS', 'MySQL', 'AI/ML'],
    category: 'ai',
    liveUrl: 'https://accelerating-drug-discovery-using-ai.onrender.com/',
    githubUrl: 'https://github.com/V-Manish-Kumar/Accelerating-Drug-Discovery-using-AI',
    featured: true,
  },
  {
    id: 3,
    title: 'InstaAd.AI – AI-Powered Ad Creation Platform',
    description: 'An intelligent platform that creates professional advertisements for small businesses using AI technology, helping entrepreneurs generate compelling marketing content effortlessly.',
    image: '/ADAI.png',
    technologies: ['AI/ML', 'JavaScript', 'HTML', 'CSS', 'Netlify', 'Ad Generation'],
    category: 'ai',
    liveUrl: 'https://classy-kataifi-d2400d.netlify.app/',
    githubUrl: 'https://github.com/V-Manish-Kumar/InstaAd.AI',
    featured: true,
  },
  {
    id: 4,
    title: 'Wall-E Chatbot – AI Assistant',
    description: 'An interactive chatbot built with Streamlit and Google Gemini API, providing intelligent conversational AI assistance with a friendly Wall-E persona.',
    image: '/Wall-E.png',
    technologies: ['Python', 'Streamlit', 'Google Gemini API', 'AI/ML', 'Natural Language Processing'],
    category: 'ai',
    liveUrl: 'https://chatbot-uh9v3ynalswsdpks9gwv42.streamlit.app/',
    githubUrl: 'https://github.com/V-Manish-Kumar/Streamlit-app',
    featured: false,
  },
  {
    id: 5,
    title: 'Velveta – E-commerce Platform',
    description: 'A modern e-commerce website featuring product catalogs, shopping cart functionality, and responsive design for an optimal online shopping experience.',
    image: '/Velveta.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Web Development', 'Responsive Design'],
    category: 'web',
    liveUrl: 'https://v-manish-kumar.github.io/Velveta/',
    githubUrl: 'https://github.com/V-Manish-Kumar/Velveta',
    featured: false,
  },
  {
    id: 6,
    title: 'Maze Game – Interactive Browser Game',
    description: 'An engaging maze game built with HTML, CSS, and JavaScript featuring interactive gameplay, collision detection, and responsive controls for an entertaining gaming experience.',
    image: '/MazeGame.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Game Development', 'DOM Manipulation'],
    category: 'web',
    liveUrl: 'https://v-manish-kumar.github.io/Maze-Game/',
    githubUrl: 'https://github.com/V-Manish-Kumar/Maze-Game',
    featured: false,
  },
];

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { value: 'all', label: 'All Projects', icon: <DataObjectIcon /> },
    { value: 'web', label: 'Web Apps', icon: <WebIcon /> },
    { value: 'mobile', label: 'Mobile Apps', icon: <MobileScreenShareIcon /> },
    { value: 'ai', label: 'AI/ML', icon: <DataObjectIcon /> },
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Box sx={{ minHeight: '100vh', py: 8 }}>
      <div className="particles-bg" />
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  background: 'linear-gradient(45deg, #64b5f6, #81c784)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                My Projects
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: 'text.secondary', maxWidth: '600px', mx: 'auto' }}
              >
                A collection of projects that showcase my skills and passion for creating innovative solutions
              </Typography>
            </Box>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div variants={itemVariants}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
              <Tabs
                value={activeTab}
                onChange={(_, newValue) => setActiveTab(newValue)}
                sx={{
                  '& .MuiTab-root': {
                    color: 'text.secondary',
                    '&.Mui-selected': {
                      color: 'primary.main',
                    },
                  },
                  '& .MuiTabs-indicator': {
                    backgroundColor: 'primary.main',
                  },
                }}
              >
                {categories.map((category) => (
                  <Tab
                    key={category.value}
                    value={category.value}
                    label={category.label}
                    icon={category.icon}
                    iconPosition="start"
                    sx={{ textTransform: 'none', fontWeight: 600 }}
                  />
                ))}
              </Tabs>
            </Box>
          </motion.div>

          {/* Featured Projects */}
          {activeTab === 'all' && (
            <motion.div variants={itemVariants}>
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 4, color: 'primary.main' }}>
                Featured Projects
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 4, mb: 8 }}>
                {projects.filter(p => p.featured).map((project, index) => (
                  <motion.div
                    key={project.id}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.2 }}
                    style={{ flex: 1 }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: 3,
                        overflow: 'hidden',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-10px)',
                          boxShadow: '0 20px 40px rgba(100, 181, 246, 0.2)',
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          height: 200,
                          objectFit: 'cover',
                        }}
                        image={project.image}
                        alt={project.title}
                      />
                      <CardContent sx={{ p: 3, height: 'calc(100% - 200px)', display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                          {project.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, flex: 1 }}>
                          {project.description}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Chip
                              key={tech}
                              label={tech}
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(100, 181, 246, 0.1)',
                                color: 'primary.main',
                                border: '1px solid rgba(100, 181, 246, 0.3)',
                              }}
                            />
                          ))}
                          {project.technologies.length > 3 && (
                            <Chip
                              label={`+${project.technologies.length - 3}`}
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(129, 199, 132, 0.1)',
                                color: 'secondary.main',
                              }}
                            />
                          )}
                        </Box>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          {project.liveUrl && (
                            <IconButton
                              href={project.liveUrl}
                              target="_blank"
                              sx={{ color: 'primary.main' }}
                            >
                              <LaunchIcon />
                            </IconButton>
                          )}
                          {project.githubUrl && (
                            <IconButton
                              href={project.githubUrl}
                              target="_blank"
                              sx={{ color: 'text.secondary' }}
                            >
                              <GitHubIcon />
                            </IconButton>
                          )}
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          )}

          {/* All Projects Grid */}
          <motion.div variants={itemVariants}>
            {activeTab !== 'all' && (
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 4, color: 'primary.main' }}>
                {categories.find(c => c.value === activeTab)?.label}
              </Typography>
            )}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 4 }}>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 3,
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 30px rgba(100, 181, 246, 0.15)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        height: 150,
                        objectFit: 'cover',
                      }}
                      image={project.image}
                      alt={project.title}
                    />
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(100, 181, 246, 0.1)',
                              color: 'primary.main',
                              border: '1px solid rgba(100, 181, 246, 0.3)',
                            }}
                          />
                        ))}
                      </Box>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        {project.liveUrl && (
                          <Button
                            variant="outlined"
                            size="small"
                            startIcon={<LaunchIcon />}
                            href={project.liveUrl}
                            target="_blank"
                            sx={{ borderColor: 'primary.main', color: 'primary.main' }}
                          >
                            Live Demo
                          </Button>
                        )}
                        {project.githubUrl && (
                          <IconButton
                            href={project.githubUrl}
                            target="_blank"
                            sx={{ color: 'text.secondary' }}
                          >
                            <GitHubIcon />
                          </IconButton>
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;
