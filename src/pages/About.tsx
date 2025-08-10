import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Avatar,
  LinearProgress,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import InterestsIcon from '@mui/icons-material/Interests';

const About: React.FC = () => {
  const skills = [
    { name: 'Python', level: 90 },
    { name: 'Java', level: 85 },
    { name: 'C#', level: 80 },
    { name: 'React', level: 85 },
    { name: 'Flask', level: 80 },
    { name: 'Spring Boot', level: 75 },
    { name: 'Node.js', level: 75 },
    { name: 'MySQL', level: 80 },
    { name: 'TensorFlow', level: 70 },
    { name: 'Unity', level: 65 },
  ];

  const interests = [
    'AI & Machine Learning',
    'Web Development',
    'Software Engineering',
    'Generative AI',
    'Real-time Systems',
    'Healthcare Technology',
    'MLOps',
    'Game Development',
  ];

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
                About Me
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: 'text.secondary', maxWidth: '600px', mx: 'auto' }}
              >
                Get to know more about my background, skills, and what drives my passion for technology
              </Typography>
            </Box>
          </motion.div>

          {/* Main Content */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mb: 8 }}>
            {/* Left Column - Personal Info */}
            <Box sx={{ flex: 1 }}>
              <motion.div variants={itemVariants}>
                <Paper
                  sx={{
                    p: 4,
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 3,
                    mb: 4,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <PersonIcon sx={{ color: 'primary.main', mr: 2 }} />
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                      Personal Info
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                    <Avatar
                      sx={{
                        width: 100,
                        height: 100,
                        mr: 3,
                        border: '3px solid rgba(100, 181, 246, 0.3)',
                      }}
                      src="/profile.jpg"
                      alt="Manish Kumar Vodlamodi"
                    >
                      MK
                    </Avatar>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        Manish Kumar Vodlamodi
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                        Computer Science & AI/ML Student
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Telangana, India
                      </Typography>
                    </Box>
                  </Box>

                  <Typography variant="body1" sx={{ lineHeight: 1.7, color: 'text.secondary' }}>
                    I'm a Computer Science Engineering student at Malla Reddy College of Engineering and Technology, 
                    specializing in AI/ML with a CGPA of 8.3. I'm passionate about developing innovative solutions 
                    that combine web development with artificial intelligence. I enjoy building scalable collaboration 
                    platforms, AI-powered applications, and exploring the intersection of healthcare and technology.
                  </Typography>
                </Paper>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Paper
                  sx={{
                    p: 4,
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 3,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <InterestsIcon sx={{ color: 'secondary.main', mr: 2 }} />
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                      Interests
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {interests.map((interest, index) => (
                      <motion.div
                        key={interest}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <Chip
                          label={interest}
                          sx={{
                            backgroundColor: 'rgba(129, 199, 132, 0.1)',
                            color: 'secondary.main',
                            border: '1px solid rgba(129, 199, 132, 0.3)',
                          }}
                        />
                      </motion.div>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Box>

            {/* Right Column - Skills & Education */}
            <Box sx={{ flex: 1 }}>
              <motion.div variants={itemVariants}>
                <Paper
                  sx={{
                    p: 4,
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 3,
                    mb: 4,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <WorkIcon sx={{ color: 'primary.main', mr: 2 }} />
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                      Technical Skills
                    </Typography>
                  </Box>
                  
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <Box sx={{ mb: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {skill.name}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {skill.level}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            '& .MuiLinearProgress-bar': {
                              borderRadius: 4,
                              background: 'linear-gradient(45deg, #64b5f6, #81c784)',
                            },
                          }}
                        />
                      </Box>
                    </motion.div>
                  ))}
                </Paper>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Paper
                  sx={{
                    p: 4,
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 3,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <SchoolIcon sx={{ color: 'secondary.main', mr: 2 }} />
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                      Education
                    </Typography>
                  </Box>
                  
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      Bachelor of Technology – Computer Science and Engineering (AI/ML)
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'primary.main', mb: 1 }}>
                      Malla Reddy College of Engineering and Technology
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                      Sep 2023 – June 2027
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Currently pursuing B.Tech in Computer Science Engineering with specialization in 
                      Artificial Intelligence and Machine Learning. Maintaining a CGPA of 8.3. 
                      Focus areas include software engineering, AI/ML algorithms, and web development.
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Box>
          </Box>

          {/* Quote Section */}
          <motion.div variants={itemVariants}>
            <Paper
              sx={{
                p: 6,
                textAlign: 'center',
                backgroundColor: 'rgba(100, 181, 246, 0.1)',
                border: '1px solid rgba(100, 181, 246, 0.3)',
                borderRadius: 3,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontStyle: 'italic',
                  fontWeight: 300,
                  color: 'primary.main',
                  mb: 2,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                }}
              >
                "The best way to predict the future is to create it."
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                - Peter Drucker
              </Typography>
            </Paper>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
