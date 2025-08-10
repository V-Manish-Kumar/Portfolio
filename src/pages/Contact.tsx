import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  IconButton,
  Snackbar,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import SendIcon from '@mui/icons-material/Send';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [showSnackbar, setShowSnackbar] = useState(false);

  const contactInfo = [
    {
      icon: <EmailIcon />,
      title: 'Email',
      value: 'manishedu980@gmail.com',
      href: 'mailto:manishedu980@gmail.com',
    },
    {
      icon: <PhoneIcon />,
      title: 'Phone',
      value: '+91 9346545039',
      href: 'tel:+919346545039',
    },
    {
      icon: <LocationOnIcon />,
      title: 'Location',
      value: 'Hyderabad, Telangana, India',
      href: 'https://maps.google.com',
    },
  ];

  const socialLinks = [
    {
      icon: <GitHubIcon />,
      name: 'GitHub',
      href: 'https://github.com/V-Manish-Kumar',
      color: '#333',
    },
    {
      icon: <LinkedInIcon />,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/v-manish-kumar/',
      color: '#0077b5',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setShowSnackbar(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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
                Get In Touch
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: 'text.secondary', maxWidth: '600px', mx: 'auto' }}
              >
                I'm always interested in new opportunities and exciting projects. Let's connect!
              </Typography>
            </Box>
          </motion.div>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6 }}>
            {/* Contact Information */}
            <Box sx={{ flex: 1 }}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 600, mb: 4, color: 'primary.main' }}
                >
                  Let's Talk
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.7 }}
                >
                  I'm currently available for freelance work and new opportunities. 
                  Whether you have a project in mind, want to collaborate, or just want 
                  to say hello, I'd love to hear from you.
                </Typography>
              </motion.div>

              {/* Contact Info Cards */}
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <Paper
                    component="a"
                    href={info.href}
                    target="_blank"
                    sx={{
                      p: 3,
                      mb: 3,
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 3,
                      display: 'flex',
                      alignItems: 'center',
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 10px 30px rgba(100, 181, 246, 0.2)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        color: 'primary.main',
                        mr: 3,
                        p: 1,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(100, 181, 246, 0.1)',
                      }}
                    >
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                        {info.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {info.value}
                      </Typography>
                    </Box>
                  </Paper>
                </motion.div>
              ))}

              {/* Social Links */}
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, mb: 3, mt: 4 }}
                >
                  Follow Me
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.name}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconButton
                        href={social.href}
                        target="_blank"
                        sx={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: social.color,
                          '&:hover': {
                            backgroundColor: `${social.color}20`,
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Box>

            {/* Contact Form */}
            <Box sx={{ flex: 1 }}>
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
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 600, mb: 4, color: 'secondary.main' }}
                  >
                    Send Message
                  </Typography>
                  
                  <form onSubmit={handleSubmit}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                      <TextField
                        name="name"
                        label="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        fullWidth
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'text.secondary',
                          },
                        }}
                      />
                      
                      <TextField
                        name="email"
                        label="Your Email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        fullWidth
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'text.secondary',
                          },
                        }}
                      />
                      
                      <TextField
                        name="subject"
                        label="Subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        fullWidth
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'text.secondary',
                          },
                        }}
                      />
                      
                      <TextField
                        name="message"
                        label="Your Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        fullWidth
                        multiline
                        rows={4}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'text.secondary',
                          },
                        }}
                      />
                      
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          endIcon={<SendIcon />}
                          fullWidth
                          sx={{
                            mt: 2,
                            backgroundColor: 'primary.main',
                            '&:hover': {
                              backgroundColor: 'primary.dark',
                              transform: 'translateY(-2px)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          Send Message
                        </Button>
                      </motion.div>
                    </Box>
                  </form>
                </Paper>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>

      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={() => setShowSnackbar(false)}
      >
        <Alert
          onClose={() => setShowSnackbar(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Message sent successfully! I'll get back to you soon.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
