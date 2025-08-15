import { TypeAnimation } from 'react-type-animation';

const TypingEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        'DevOps Tools: Docker, AWS, K8s, Git, Linux',
        2000,
        'Spring Boot Specialist',
        2000,
        'Rest API Development',
        2000,
        'Microservices Architecture',
        2000,
        'Software Engineering',
        2000,
        'Mentoring and Team Collaboration',
        2000,
        'Database Schema Design',
        2000,
      ]}
      wrapper="span"
      speed={50}
      className="text-xl md:text-2xl text-muted-foreground"
      repeat={Infinity}
    />
  );
};

export default TypingEffect;