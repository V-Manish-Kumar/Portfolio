import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';


const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <GitHubIcon />, href: 'https://github.com/V-Manish-Kumar', name: 'GitHub' },
    { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/v-manish-kumar/', name: 'LinkedIn' },
    { icon: <EmailIcon />, href: 'mailto:manishedu980@gmail.com', name: 'Email' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'rgba(26, 26, 26, 0.95)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ py: 6 }}>
          {/* Main Footer Content */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'center', md: 'flex-start' },
              gap: 4,
              mb: 4,
            }}
          >
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    mb: 2,
                    background: 'linear-gradient(45deg, #64b5f6, #81c784)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Manish Kumar Vodlamodi
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: 'text.secondary', maxWidth: 300 }}
                >
                  Computer Science & AI/ML Student passionate about creating innovative 
                  solutions and contributing to open-source projects in AI and web development.
                </Typography>
              </Box>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}
                >
                  Quick Links
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'].map(
                    (link) => (
                      <Typography
                        key={link}
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          cursor: 'pointer',
                          transition: 'color 0.3s ease',
                          '&:hover': {
                            color: 'primary.main',
                          },
                        }}
                        onClick={() => {
                          const sectionId = link.toLowerCase();
                          const element = document.getElementById(sectionId);
                          if (element) {
                            const offsetTop = element.offsetTop - 80;
                            window.scrollTo({
                              top: offsetTop,
                              behavior: 'smooth',
                            });
                          }
                        }}
                      >
                        {link}
                      </Typography>
                    )
                  )}
                </Box>
              </Box>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, mb: 2, color: 'secondary.main' }}
                >
                  Get In Touch
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                  Hyderabad,Telangana, India
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                  manishedu980@gmail.com
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                  +91 9346545039
                </Typography>

                {/* Social Links */}
                <Box sx={{ display: 'flex', gap: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.name}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconButton
                        href={social.href}
                        target="_blank"
                        aria-label={social.name}
                        sx={{
                          color: 'text.secondary',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          '&:hover': {
                            color: 'primary.main',
                            backgroundColor: 'rgba(100, 181, 246, 0.1)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    </motion.div>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Box>

          <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', mb: 3 }} />

          {/* Bottom Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                © {new Date().getFullYear()} Made with{' '}
                <CodeIcon sx={{ color: '#61dafb', fontSize: 16 }} /> by Manish
              </Typography>
              
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Built with React & Material-UI
              </Typography>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
