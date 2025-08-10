import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

interface ExperienceItem {
  id: number;
  type: 'work' | 'education' | 'achievement';
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
  current?: boolean;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      type: 'education',
      title: 'Bachelor of Technology – Computer Science and Engineering (AI/ML)',
      company: 'Malla Reddy College of Engineering and Technology',
      location: 'Telangana, India',
      period: 'Sep 2023 – June 2027',
      current: true,
      description: [
        'Currently pursuing B.Tech in Computer Science Engineering with specialization in AI/ML',
        'Maintaining a CGPA of 8.3 with focus on software engineering principles',
        'Developing expertise in machine learning algorithms and web development',
        'Actively participating in coding competitions and technical workshops',
      ],
      technologies: ['Python', 'Java', 'C#', 'Data Structures', 'Algorithms', 'AI/ML'],
    },
    {
      id: 2,
      type: 'work',
      title: 'Developer',
      company: 'IndicAI',
      location: 'India',
      period: '2024 – Present',
      current: true,
      description: [
        'Contributing to open-source AI projects focused on Indic languages',
        'Developing machine learning models for natural language processing',
        'Collaborating with researchers and developers on AI/ML initiatives',
        'Working on language technology solutions for Indian languages',
      ],
      technologies: ['Python', 'AI/ML', 'NLP', 'Open Source', 'Language Models'],
    },
    {
      id: 3,
      type: 'work',
      title: 'Intern',
      company: 'Swecha Foundation',
      location: 'Telangana, India',
      period: '2024',
      description: [
        'Contributed to open-source software development projects',
        'Worked on educational technology solutions for rural communities',
        'Participated in community outreach and digital literacy programs',
        'Gained experience in collaborative software development',
      ],
      technologies: ['Python', 'Web Development', 'Open Source', 'Community Engagement'],
    },
    {
      id: 4,
      type: 'achievement',
      title: 'Salesforce Developer with Agentblazer Champion Program',
      company: 'SmartBridge & Salesforce',
      location: 'Online',
      period: 'May 2025 – July 2025',
      description: [
        'Completed 8-week virtual internship program demonstrating excellence in Salesforce development',
        'Mastered Salesforce fundamentals including organizational setup and data management',
        'Gained expertise in Apex development and Lightning Web Components',
        'Achieved champion status in Agentblazer with hands-on project experience',
      ],
      technologies: ['Salesforce', 'Apex', 'Lightning Web Components', 'Data Management', 'Process Automation'],
    },
    {
      id: 5,
      type: 'achievement',
      title: 'Google: Machine Learning Operations (MLOps) for Generative AI',
      company: 'Google Cloud',
      location: 'Online',
      period: '2024',
      description: [
        'Completed comprehensive certification in MLOps for Generative AI',
        'Learned best practices for deploying and managing AI models in production',
        'Gained hands-on experience with Google Cloud AI/ML services',
        'Applied MLOps principles to real-world projects',
      ],
      technologies: ['Google Cloud', 'MLOps', 'Generative AI', 'Model Deployment'],
    },
    {
      id: 6,
      type: 'achievement',
      title: 'TechGyan at BITS Pilani: AI & Ethical Hacking Workshop',
      company: 'BITS Pilani',
      location: 'India',
      period: '2024',
      description: [
        'Participated in intensive workshop on AI applications and ethical hacking',
        'Learned about cybersecurity best practices and AI safety',
        'Worked on hands-on projects combining AI and security concepts',
        'Networked with industry professionals and fellow students',
      ],
      technologies: ['AI/ML', 'Cybersecurity', 'Ethical Hacking', 'Security Protocols'],
    },
    {
      id: 7,
      type: 'achievement',
      title: 'W3Schools: Certified in C# Programming',
      company: 'W3Schools',
      location: 'Online',
      period: '2024',
      description: [
        'Achieved certification in C# programming language',
        'Demonstrated proficiency in object-oriented programming concepts',
        'Completed comprehensive assessment covering C# fundamentals and advanced topics',
        'Applied C# knowledge in various programming projects',
      ],
      technologies: ['C#', '.NET', 'Object-Oriented Programming', 'Software Development'],
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

  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <WorkIcon />;
      case 'education':
        return <SchoolIcon />;
      case 'achievement':
        return <EmojiEventsIcon />;
      default:
        return <WorkIcon />;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'work':
        return '#64b5f6';
      case 'education':
        return '#81c784';
      case 'achievement':
        return '#ffb74d';
      default:
        return '#64b5f6';
    }
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
                Experience & Education
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: 'text.secondary', maxWidth: '600px', mx: 'auto' }}
              >
                My professional journey, educational background, and key achievements in the tech industry
              </Typography>
            </Box>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={itemVariants}>
            <Timeline position="alternate">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                >
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot
                        sx={{
                          backgroundColor: getColor(experience.type),
                          p: 1,
                          border: `3px solid ${getColor(experience.type)}20`,
                        }}
                      >
                        {getIcon(experience.type)}
                      </TimelineDot>
                      {index < experiences.length - 1 && (
                        <TimelineConnector
                          sx={{
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            width: 2,
                          }}
                        />
                      )}
                    </TimelineSeparator>
                    <TimelineContent>
                      <Paper
                        sx={{
                          p: 4,
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: 3,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: `0 10px 30px ${getColor(experience.type)}30`,
                          },
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 600,
                              color: getColor(experience.type),
                              flex: 1,
                            }}
                          >
                            {experience.title}
                          </Typography>
                          {experience.current && (
                            <Chip
                              label="Current"
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(129, 199, 132, 0.2)',
                                color: 'secondary.main',
                                fontWeight: 600,
                              }}
                            />
                          )}
                        </Box>
                        
                        <Typography
                          variant="h6"
                          sx={{ color: 'primary.main', mb: 1, fontWeight: 500 }}
                        >
                          {experience.company}
                        </Typography>
                        
                        <Typography
                          variant="body2"
                          sx={{ color: 'text.secondary', mb: 1 }}
                        >
                          {experience.location} • {experience.period}
                        </Typography>
                        
                        <Box sx={{ mb: 3 }}>
                          {experience.description.map((desc, descIndex) => (
                            <Typography
                              key={descIndex}
                              variant="body2"
                              sx={{
                                color: 'text.secondary',
                                mb: 1,
                                display: 'flex',
                                alignItems: 'flex-start',
                              }}
                            >
                              <Box
                                sx={{
                                  width: 4,
                                  height: 4,
                                  borderRadius: '50%',
                                  backgroundColor: getColor(experience.type),
                                  mt: 1,
                                  mr: 2,
                                  flexShrink: 0,
                                }}
                              />
                              {desc}
                            </Typography>
                          ))}
                        </Box>
                        
                        {experience.technologies && (
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {experience.technologies.map((tech) => (
                              <Chip
                                key={tech}
                                label={tech}
                                size="small"
                                sx={{
                                  backgroundColor: `${getColor(experience.type)}20`,
                                  color: getColor(experience.type),
                                  border: `1px solid ${getColor(experience.type)}40`,
                                }}
                              />
                            ))}
                          </Box>
                        )}
                      </Paper>
                    </TimelineContent>
                  </TimelineItem>
                </motion.div>
              ))}
            </Timeline>
          </motion.div>

          {/* Summary Section */}
          <motion.div variants={itemVariants}>
            <Paper
              sx={{
                p: 6,
                mt: 8,
                backgroundColor: 'rgba(100, 181, 246, 0.1)',
                border: '1px solid rgba(100, 181, 246, 0.3)',
                borderRadius: 3,
                textAlign: 'center',
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: 'primary.main',
                }}
              >
                Professional Summary
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  maxWidth: '800px',
                  mx: 'auto',
                  lineHeight: 1.7,
                  fontSize: '1.1rem',
                }}
              >
                As a Computer Science & AI/ML student with hands-on experience in software development 
                and machine learning, I've contributed to open-source projects at IndicAI and gained 
                valuable industry experience through my internship at Swecha Foundation. My recent 
                certification as a Salesforce Developer with Agentblazer Champion status demonstrates 
                my commitment to expanding my technical expertise across multiple platforms. I'm 
                passionate about creating AI-powered solutions and contributing to the open-source community.
              </Typography>
            </Paper>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Experience;
