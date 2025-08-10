import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Avatar,
  IconButton,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Home: React.FC = () => {
  const skills = ['Python', 'Java', 'C#', 'React', 'Flask', 'Spring Boot', 'Node.js', 'MySQL', 'TensorFlow', 'AI/ML', 'Salesforce', 'Apex'];

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

  return (
    <Box sx={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Animated background */}
      <div className="particles-bg" />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            pt: { xs: 8, md: 0 },
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 4 }}>
            <Box sx={{ flex: 1, maxWidth: { md: '50%' } }}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 700,
                      fontSize: { xs: '1.5rem', md: '2rem' },
                      mb: 1,
                      mt: 8,
                    }}
                  >
                    Hello, I'm
                  </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontWeight: 'bold',
                      mb: 2,
                      background: 'linear-gradient(45deg, #ffffff, #64b5f6)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontSize: { xs: '2.5rem', md: '3.5rem' },
                    }}
                  >
                    Manish Kumar Vodlamodi
                  </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: 'secondary.main',
                      fontWeight: 600,
                      mb: 3,
                      fontSize: { xs: '1.5rem', md: '2rem' },
                    }}
                  >
                    Computer Science & AI/ML Student
                  </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      mb: 4,
                      fontSize: '1.1rem',
                      lineHeight: 1.6,
                      maxWidth: '500px',
                    }}
                  >
                    Computer Science Engineering student specializing in AI/ML at Malla Reddy College of Engineering and Technology. 
                    Passionate about building scalable web applications, AI-powered solutions, and real-time collaboration platforms 
                    using modern technologies.
                  </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + index * 0.1 }}
                      >
                        <Chip
                          label={skill}
                          sx={{
                            backgroundColor: 'rgba(100, 181, 246, 0.1)',
                            color: 'primary.main',
                            border: '1px solid rgba(100, 181, 246, 0.3)',
                          }}
                        />
                      </motion.div>
                    ))}
                  </Box>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<DownloadIcon />}
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/resume.pdf';
                        link.download = 'resume.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                      sx={{
                        backgroundColor: 'primary.main',
                        '&:hover': {
                          backgroundColor: 'primary.dark',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Download Resume
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      onClick={() => {
                        const projectsSection = document.getElementById('projects');
                        if (projectsSection) {
                          projectsSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      sx={{
                        borderColor: 'primary.main',
                        color: 'primary.main',
                        '&:hover': {
                          backgroundColor: 'rgba(100, 181, 246, 0.1)',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      View Projects
                    </Button>
                  </Box>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    {[
                      { icon: <GitHubIcon />, href: 'https://github.com/V-Manish-Kumar' },
                      { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/v-manish-kumar/' },
                      { icon: <EmailIcon />, href: 'mailto:manishedu980@gmail.com' },
                    ].map((social, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <IconButton
                          href={social.href}
                          target="_blank"
                          sx={{
                            color: 'text.secondary',
                            '&:hover': {
                              color: 'primary.main',
                            },
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {social.icon}
                        </IconButton>
                      </motion.div>
                    ))}
                  </Box>
                </motion.div>
              </motion.div>
            </Box>

            <Box sx={{ flex: 1, maxWidth: { md: '50%' }, display: 'flex', justifyContent: 'center' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  <motion.div
                    animate={{
                      y: [0, -20, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <Avatar
                      sx={{
                        width: { xs: 250, md: 350 },
                        height: { xs: 250, md: 350 },
                        border: '4px solid rgba(100, 181, 246, 0.3)',
                        boxShadow: '0 0 50px rgba(100, 181, 246, 0.3)',
                      }}
                      src="/profile.jpg"
                      alt="Manish Kumar Vodlamodi"
                    >
                      <Typography variant="h2" sx={{ color: 'primary.main' }}>
                        MK
                      </Typography>
                    </Avatar>
                  </motion.div>

                  {/* Floating elements */}
                  {[...Array(3)].map((_, index) => (
                    <motion.div
                      key={index}
                      style={{
                        position: 'absolute',
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: 'linear-gradient(45deg, #64b5f6, #81c784)',
                        top: `${20 + index * 30}%`,
                        left: `${10 + index * 25}%`,
                      }}
                      animate={{
                        y: [0, -30, 0],
                        x: [0, 20, 0],
                      }}
                      transition={{
                        duration: 3 + index,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  ))}
                </Box>
              </motion.div>
            </Box>
          </Box>
        </Box>

        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          style={{
            position: 'absolute',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <IconButton 
              sx={{ color: 'primary.main' }}
              onClick={() => {
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <ArrowDownwardIcon />
            </IconButton>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home;
