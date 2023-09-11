import { useRouter } from 'next/router';

const About = () => {
  const router = useRouter();

  const handleToNavigate = () => {
    router.push('/products');
  };
  return <div onClick={handleToNavigate}>dsds</div>;
};

export default About;
