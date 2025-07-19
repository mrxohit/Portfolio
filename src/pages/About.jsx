// src/pages/About.jsx

function About() {
  return (
    <section className="h-full w-[80vw] ml-[8vw]  bg-white/20  text-black/60 rounded-2xl bo  p-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 border-b-4 border-black/30 inline-block">
          About Me
        </h1>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lg font-semibold leading-relaxed mb-4">
              Hey there! I'm <span className="font-bold text-black/80">Mohit</span>, a passionate front-end developer who loves creating sleek, user-friendly, and lightning-fast websites. With a strong foundation in technologies like <span className="font-bold text-black/80">React, Tailwind CSS, and JavaScript</span>, I aim to build impactful digital experiences that speak for themselves.
            </p>
            <p className="text-lg font-semibold leading-relaxed mb-4">
              I’m currently sharpening my skills in full-stack development and freelancing while dreaming big — <span className="text-teal-400">building my own empire</span> one project at a time. My mission? To level up daily, serve top-notch work, and create value-driven digital assets.
            </p>
            <p className="text-lg font-semibold leading-relaxed">
              Outside of code, I’m all about hustling smart, learning endlessly, and inspiring others through growth. Let’s connect, collaborate, and conquer new digital horizons together.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="./bg.png"
              alt="Mohit's Profile"
              className="rounded-2xl shadow-lg max-w-[300px] md:max-w-[400px] border-4 border-teal-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
