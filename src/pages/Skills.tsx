import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import BuildIcon from '@mui/icons-material/Build';
import DevicesIcon from '@mui/icons-material/Devices';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: <CodeIcon />,
      color: '#64b5f6',
      skills: [
        { name: 'Python', level: 95, category: 'programming' },
        { name: 'Java', level: 90, category: 'programming' },
        { name: 'C#', level: 85, category: 'programming' },
        { name: 'C', level: 80, category: 'programming' },
        { name: 'JavaScript', level: 85, category: 'programming' },
        { name: 'Apex (Salesforce)', level: 80, category: 'programming' },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      icon: <BuildIcon />,
      color: '#81c784',
      skills: [
        { name: 'Flask', level: 90, category: 'framework' },
        { name: 'React', level: 85, category: 'framework' },
        { name: 'Spring Boot', level: 80, category: 'framework' },
        { name: 'Node.js', level: 75, category: 'framework' },
        { name: 'Bootstrap', level: 85, category: 'framework' },
        { name: 'TensorFlow', level: 75, category: 'framework' },
        { name: 'Lightning Web Components', level: 80, category: 'framework' },
      ],
    },
    {
      title: 'Database & Tools',
      icon: <StorageIcon />,
      color: '#f06292',
      skills: [
        { name: 'MySQL', level: 85, category: 'database' },
        { name: 'Git', level: 85, category: 'tools' },
        { name: 'Postman API', level: 80, category: 'tools' },
        { name: 'Unity', level: 70, category: 'tools' },
        { name: 'Pandas', level: 75, category: 'tools' },
        { name: 'Salesforce CRM', level: 85, category: 'tools' },
      ],
    },
    {
      title: 'Cloud & Platforms',
      icon: <CloudIcon />,
      color: '#ffb74d',
      skills: [
        { name: 'Google Cloud Platform', level: 75, category: 'cloud' },
        { name: 'Salesforce Platform', level: 85, category: 'cloud' },
        { name: 'MLOps', level: 70, category: 'cloud' },
        { name: 'Process Automation', level: 80, category: 'cloud' },
      ],
    },
    {
      title: 'Core Concepts',
      icon: <DevicesIcon />,
      color: '#ba68c8',
      skills: [
        { name: 'Data Structures & Algorithms', level: 90, category: 'concepts' },
        { name: 'Object-Oriented Programming', level: 95, category: 'concepts' },
        { name: 'Computer Networks', level: 80, category: 'concepts' },
        { name: 'RESTful APIs', level: 85, category: 'concepts' },
        { name: 'MCP Server', level: 75, category: 'concepts' },
        { name: 'WebSocket', level: 80, category: 'concepts' },
      ],
    },
  ];

  const certifications = [
    {
      name: 'W3Schools: Certified in C# Programming',
      link: 'https://www.coursera.org/account/accomplishments/verify/MBPJRHFZQ4AU',
    },
    {
      name: 'Unity Essentials',
      link: 'https://www.credly.com/badges/e8e68424-b685-4ecd-9320-cdedc893237a/linked_in_profile',
    },
    {
      name: 'Google: Machine Learning Operations (MLOps) for Generative AI',
      link: 'https://www.cloudskillsboost.google/public_profiles/4a1472cd-92c3-42cb-982c-ada09de4e668/badges/16065226',
    },
    {
      name: 'Artificial Intelligence Fundamentals - IBM',
      link: 'https://www.credly.com/badges/159d748c-1491-430c-85dc-b030e039c545/linked_in_profile',
    },
    {
      name: '📢 GitHub Copilot Ask/Edit/Agent, Prompt Engg, Vibe Coding, AI Applications',
      link: 'https://globalai.community/badges/da953c4a-4adb-49dd-96a6-c5954782c04b/',
    },
    {
      name: 'Salesforce Developer with Agentblazer Champion Program - SmartBridge',
      link: 'https://drive.google.com/file/d/1fsq9x69JitZWlUYocxJ-wdmQv__y4QnZ/view',
    },
    {
      name: 'Machine Learning I - Colombia+',
      link: 'https://badges.plus.columbia.edu/8681f608-8b78-4e22-b6ff-7bd126b2857b#acc.WQmAhVl5',
    },
    {
      name: 'TechGyan at BITS Pilani: AI & Ethical Hacking Workshop',
      link: 'https://drive.google.com/file/d/1jiQpsGRyddXKaWNrd7pDSHmyh1J9VRf1/view?usp=drivesdk',
    },
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

  const skillVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: { duration: 1, delay: 0.5 },
    }),
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
                Skills & Expertise
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: 'text.secondary', maxWidth: '600px', mx: 'auto' }}
              >
                A comprehensive overview of my technical skills and proficiency levels across various technologies
              </Typography>
            </Box>
          </motion.div>

          {/* Skills Grid */}
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4, mb: 8 }}>
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <Paper
                  sx={{
                    p: 4,
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 3,
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: `0 10px 30px ${category.color}30`,
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                    <Box
                      sx={{
                        color: category.color,
                        mr: 2,
                        p: 1,
                        borderRadius: '50%',
                        backgroundColor: `${category.color}20`,
                      }}
                    >
                      {category.icon}
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 600, color: category.color }}>
                      {category.title}
                    </Typography>
                  </Box>
                  
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
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
                        <Box
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            overflow: 'hidden',
                          }}
                        >
                          <motion.div
                            variants={skillVariants}
                            custom={skill.level}
                            style={{
                              height: '100%',
                              background: `linear-gradient(90deg, ${category.color}, ${category.color}cc)`,
                              borderRadius: 4,
                            }}
                          />
                        </Box>
                      </Box>
                    </motion.div>
                  ))}
                </Paper>
              </motion.div>
            ))}
          </Box>

          {/* Certifications Section */}
          <motion.div variants={itemVariants}>
            <Paper
              sx={{
                p: 6,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 3,
                textAlign: 'center',
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 4,
                  color: 'primary.main',
                }}
              >
                Certifications & Achievements
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    <Chip
                      component="a"
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      label={cert.name}
                      sx={{
                        backgroundColor: 'rgba(100, 181, 246, 0.1)',
                        color: 'primary.main',
                        border: '1px solid rgba(100, 181, 246, 0.3)',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        padding: '8px 16px',
                        height: 'auto',
                        cursor: 'pointer',
                        textDecoration: 'none',
                        '&:hover': {
                          backgroundColor: 'rgba(100, 181, 246, 0.2)',
                          transform: 'scale(1.05)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    />
                  </motion.div>
                ))}
              </Box>
            </Paper>
          </motion.div>

          {/* Skills Summary */}
          <motion.div variants={itemVariants}>
            <Box sx={{ mt: 8, textAlign: 'center' }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: 'secondary.main',
                }}
              >
                Continuous Learning Journey
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  maxWidth: '800px',
                  mx: 'auto',
                  lineHeight: 1.7,
                }}
              >
                I believe in continuous learning and staying updated with the latest technologies. 
                My skill set is constantly evolving as I explore new frameworks, tools, and best practices 
                in the ever-changing world of software development. I'm passionate about writing clean, 
                maintainable code and creating exceptional user experiences.
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;

