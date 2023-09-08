import Image from 'next/image';

const Hero = () => {
  return (
    <section className="mx-auto bg-bgcHero bg-[url('/images/hero-bkg.png')]  w-[320px] h-[642px]">
      <div className="w-full h-full bg-hero-backdrop/50 bg-gradient-to-b from-[#001826] to to-45%  ">
        This is hero
      </div>
    </section>
  );
};

export default Hero;
